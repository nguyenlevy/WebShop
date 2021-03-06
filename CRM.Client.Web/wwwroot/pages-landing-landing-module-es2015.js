(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container class=\"landing-page\">\r\n       \r\n    <div class=\"p-3 header-section\" id=\"top\">\r\n        <div class=\"theme-container\">\r\n            <div fxLayout=\"row wrap\" class=\"content\">\r\n                <div fxFlex=\"100\" class=\"mb-5 py-3\"> \r\n                    <app-logo></app-logo>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"py-5\"> \r\n                    <h1>Angular Material Design Real Estate Template</h1>\r\n                    <h4 class=\"mt-3\">Housekey implements the official Angular Material Design components and built with Angular CLI. No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Housekey template, 8 layouts, 8 color styles, 20+ pages</h4>\r\n                    <div class=\"py-5\">\r\n                        <button mat-raised-button color=\"primary\" class=\"uppercase mx-2\" (click)=\"scrollToDemos()\">View demos</button>\r\n                        <a mat-raised-button color=\"accent\" href=\"http://themeseason.com/\" target=\"_blank\" class=\"uppercase mx-2\">Purchase now</a> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> \r\n\r\n    <div class=\"p-3\">\r\n        <div class=\"theme-container\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" id=\"demos\">\r\n                <div fxFlex=\"100\" class=\"text-center py-4\"> \r\n                    <h1 class=\"fw-500\">Check out our demo styles</h1>\r\n                    <p>Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"main-wrapper\">\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-default.jpg)'\"></mat-card>\r\n                            <h2>Header default</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(1)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-image.jpg)'\"></mat-card>\r\n                            <h2>Header image</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(2)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-carousel.jpg)'\"></mat-card>\r\n                            <h2>Header carousel</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(3)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/toolbar-2.jpg)'\"></mat-card>\r\n                            <h2>Toolbar version 2</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(4)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark.jpg)'\"></mat-card>\r\n                            <h2>Dark version</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(5)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/rtl.jpg)'\"></mat-card>\r\n                            <h2>RTL</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(6)\">View demo</button>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" class=\"mt-5\">                               \r\n                            <h1 class=\"text-center\">Skins</h1> \r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/blue.jpg)'\"></mat-card>\r\n                            <h2>Blue</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(1)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/green.jpg)'\"></mat-card>\r\n                            <h2>Green</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(2)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/red.jpg)'\"></mat-card>\r\n                            <h2>Red</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(3)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/pink.jpg)'\"></mat-card>\r\n                            <h2>Pink</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(4)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/purple.jpg)'\"></mat-card>\r\n                            <h2>Purple</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(5)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/grey.jpg)'\"></mat-card>\r\n                            <h2>Grey</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(6)\">View demo</button>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" class=\"py-4 px-3 text-right\">\r\n                            <button mat-mini-fab (click)=\"goToTop()\">\r\n                                <mat-icon>keyboard_arrow_up</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div> \r\n            </div> \r\n\r\n        </div>\r\n    </div>\r\n\r\n    <mat-toolbar class=\"copyright\">\r\n        <div class=\"theme-container\"> \r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\r\n                <p ngClass.xs=\"mt-1\">Copyright © 2019 All Rights Reserved</p>\r\n                <p>Designed & Developed by <a mat-button href=\"http://themeseason.com/\" target=\"_blank\">ThemeSeason</a></p>\r\n            </div>\r\n        </div>\r\n    </mat-toolbar> \r\n\r\n</mat-drawer-container>");

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing-page .header-section {\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('1-big.jpg');\n}\n.landing-page .header-section:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.81);\n}\n.landing-page .header-section .content {\n  position: relative;\n  z-index: 9;\n  color: #fff;\n  text-align: center;\n}\n.landing-page .header-section .content h1 {\n  font-size: 36px;\n  font-weight: 400;\n}\n.landing-page .header-section .content h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.landing-page .main-wrapper {\n  margin: -16px;\n}\n.landing-page .main-wrapper .box {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.landing-page .main-wrapper .box h2 {\n  padding: 16px 0;\n  font-weight: 500;\n}\n.landing-page .main-wrapper .box .mat-card {\n  background-size: cover;\n  height: 300px;\n  background-position: top;\n  transition: 5s;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.landing-page .main-wrapper .box:hover .mat-card {\n  background-position: bottom;\n}\n.landing-page p {\n  font-size: 16px;\n}\n.landing-page .copyright {\n  margin-top: 36px;\n  height: 64px;\n}\n.landing-page .copyright p {\n  font-size: 13px;\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRWhCO0FERUk7RUFDSSxhQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREFZO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUhBQUE7QUNFaEI7QURHZ0I7RUFDSSwyQkFBQTtBQ0RwQjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FET0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNMUjtBRE1RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZXsgXHJcbiAgICAuaGVhZGVyLXNlY3Rpb257IFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9wcy9vZmZpY2UtMi8xLWJpZy5qcGcnKTsgICAgICAgXHJcbiAgICAgICAgJjpiZWZvcmV7ICAgICAgICBcclxuICAgICAgICAgICAgY29udGVudDogJyc7ICAgICAgICBcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjgxKTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICAubWFpbi13cmFwcGVye1xyXG4gICAgICAgIG1hcmdpbjogLTE2cHg7XHJcbiAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4OyAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7ICAgICAgICAgXHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0LWNhcmR7IFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA1czsgXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jb3B5cmlnaHR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5sYW5kaW5nLXBhZ2UgLmhlYWRlci1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvcHMvb2ZmaWNlLTIvMS1iaWcuanBnXCIpO1xufVxuLmxhbmRpbmctcGFnZSAuaGVhZGVyLXNlY3Rpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODEpO1xufVxuLmxhbmRpbmctcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGFuZGluZy1wYWdlIC5oZWFkZXItc2VjdGlvbiAuY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5sYW5kaW5nLXBhZ2UgLmhlYWRlci1zZWN0aW9uIC5jb250ZW50IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5sYW5kaW5nLXBhZ2UgLm1haW4td3JhcHBlciB7XG4gIG1hcmdpbjogLTE2cHg7XG59XG4ubGFuZGluZy1wYWdlIC5tYWluLXdyYXBwZXIgLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5sYW5kaW5nLXBhZ2UgLm1haW4td3JhcHBlciAuYm94IGgyIHtcbiAgcGFkZGluZzogMTZweCAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmxhbmRpbmctcGFnZSAubWFpbi13cmFwcGVyIC5ib3ggLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICB0cmFuc2l0aW9uOiA1cztcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5sYW5kaW5nLXBhZ2UgLm1haW4td3JhcHBlciAuYm94OmhvdmVyIC5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cbi5sYW5kaW5nLXBhZ2UgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sYW5kaW5nLXBhZ2UgLmNvcHlyaWdodCB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbi5sYW5kaW5nLXBhZ2UgLmNvcHlyaWdodCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LandingComponent = class LandingComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    getDemo(number) {
        if (number == 1) {
            this.settings.toolbar = 1;
            this.settings.header = 'default';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 2) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 3) {
            this.settings.toolbar = 1;
            this.settings.header = 'carousel';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 4) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 5) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
        }
        if (number == 6) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = true;
        }
        this.router.navigate(['/']);
    }
    getSkin(num) {
        if (num == 1) {
            this.settings.theme = 'blue';
            this.settings.header = "carousel";
        }
        if (num == 2) {
            this.settings.theme = 'green';
            this.settings.header = "carousel";
        }
        if (num == 3) {
            this.settings.theme = 'red';
            this.settings.header = "carousel";
        }
        if (num == 4) {
            this.settings.theme = 'pink';
            this.settings.header = "carousel";
        }
        if (num == 5) {
            this.settings.theme = 'purple';
            this.settings.header = "carousel";
        }
        if (num == 6) {
            this.settings.theme = 'grey';
            this.settings.header = "carousel";
        }
        this.settings.toolbar = 1;
        this.settings.rtl = false;
        this.router.navigate(['/']);
    }
    scrollToDemos() {
        var elmnt = document.getElementById("demos");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
    goToTop() {
        var elmnt = document.getElementById("top");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
};
LandingComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LandingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-landing',
        template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/landing/landing.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LandingComponent);



/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/pages/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' }
];
let LandingModule = class LandingModule {
};
LandingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]
    })
], LandingModule);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map