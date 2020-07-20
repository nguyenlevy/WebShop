using Authentication.Core;
using Authentication.Helper;
using AutoMapper;
using Common.Core;
using Core.Core.Helper;
using CustomerModule.Core;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using OrderModule.Core;
using ProductModule.Core;
using System.IO;

namespace Sales
{
    public class Startup
    {
        private const string DefaultCorsPolicyName = "AllowOrigin";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
                options.JsonSerializerOptions.DictionaryKeyPolicy = null;
            });

            // config Connect API Local Angular

            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowAllHeaders",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyOrigin();
                    });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v2", new OpenApiInfo { Title = "My API", Version = "v2" });
            });
           
            SalesConfiguration.SetSalesConfiguration(Configuration);

            // auto mapping
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMappingCommon());
                mc.AddProfile(new AutoMappingAuthentication());
                mc.AddProfile(new AutoMappingProduct());
                mc.AddProfile(new AutoMappingCustomer());
                mc.AddProfile(new AutoMappingOrder());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

           

            services.AddFeatureServiceAuthentication();
            services.AddFeatureServiceCommon();
            services.AddFeatureServiceCustomer();
            services.AddFeatureServiceOrder();

            services.AddFeatureServiceProduct();
            services.AddControllers();

            // configure basic authentication
            services.AddAuthentication("BasicAuthentication")
                .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseCors(options => options.WithOrigins("http://localhost:4200")
             .AllowAnyMethod()
             .AllowAnyHeader()
         );

            app.UseCors(options => options.WithOrigins("http://localhost:4944")
                .AllowAnyMethod()
                .AllowAnyHeader()
            );


            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v2/swagger.json", "My API V2");
            });

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();


        }
    }
}
