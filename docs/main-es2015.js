(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_interceptors/jwt.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");



class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const currentUser = this.authService.currentUser.value;
        if (currentUser && currentUser.jwt) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.jwt}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 69, vars: 0, consts: [[1, "center-box", "m-4"], [1, "card", "m-4", "col-md-4", "p-0", "nested-center-box"], [1, "card-header"], [1, "mt-2", "pt-2"], [1, "card-body", "px-4"], ["href", "/contribute"], ["src", "https://github.com/gauravghongde.png?size=200", "width", "100", "height", "100", 1, "profile-img"], ["href", "https://madebygaurav.vercel.app", "target", "_blank"], ["src", "https://img.shields.io/badge/Portfolio-madebygaurav.vercel.app-2ea44f?style=plastic"], ["href", "https://myfolio.vercel.app/gsg7397", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Folio_black.svg", "width", "32", "height", "32"], ["href", "https://github.com/gauravghongde", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Github_black.svg", "width", "32", "height", "32"], ["href", "https://www.linkedin.com/in/gauravghongde", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/LinkedIN_black.svg", "width", "32", "height", "32"], ["href", "https://twitter.com/madebygaurav", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Twitter_black.svg", "width", "32", "height", "32"], ["href", "https://www.instagram.com/madebygaurav", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Instagram_black.svg", "width", "32", "height", "32"], ["href", "https://www.behance.net/gauravghongde", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Behance_black.svg", "width", "32", "height", "32"], ["href", "mailto:7gaurav.ghongde@gmail.com", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Gmail_black.svg", "width", "32", "height", "32"], ["href", "https://telegram.me/gsg7397", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Telegram_black.svg", "width", "32", "height", "32"], ["href", "https://discord.gg/2RHSUwy", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/Discord_black.svg", "width", "32", "height", "32"], ["href", "https://play.google.com/store/apps/dev?id=7300960281868524728", "target", "_blank"], ["src", "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/Black/GooglePlay_black.svg", "width", "32", "height", "32"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's devnet all about??");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A Q&A website, inspired from stack-overflow. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The idea of this project is to create an open source alternative to stack-overflow, with a new age tech stack. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The project is completely open-source and the entire Source code is available for free on GitHub. Please feel free to use & do help me to make the product better and robust by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contributing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tech Stack Used :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Springboot, Angular 8, MongoDB, Heroku (backend deployment), GitHub Pages (frontend hosting) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Meet the developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hi, I'm Gaurav Ghongde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " I'm a 2019 Computer Engineering Graduate from Pune University, currently working as Software Developer, at TIAA GBS Pune. Worked on ML and NLP for my Final Year Project. Developed and Deployed an Android app on Playstore as an hobby project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Technologies I currently work on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Languages :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "- Java EE, Python, TypeScript, JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Frameworks or Technologies :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "- Spring Boot, Spring Security, Microservices, HTML5, CSS3, Angular 5+, Bootstrap, RxJS MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Follow me on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".center-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n\n.nested-center-box[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-bottom: 1rem;\n  width: 150px;\n  height: 150px;\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXN0ZWQtY2VudGVyLWJveCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbiIsIi5jZW50ZXItYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXN0ZWQtY2VudGVyLWJveCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contribute/contribute.component */ "./src/app/contribute/contribute.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _qna_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qna/ask-question/ask-question.component */ "./src/app/qna/ask-question/ask-question.component.ts");
/* harmony import */ var _qna_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./qna/view-question/view-question.component */ "./src/app/qna/view-question/view-question.component.ts");
/* harmony import */ var _search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search-results/search-results.component */ "./src/app/search/search-results/search-results.component.ts");
/* harmony import */ var _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
















const routes = [
    {
        path: '',
        component: _home_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        pathMatch: 'full',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'contribute',
        component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_5__["ContributeComponent"]
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'home',
        redirectTo: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'questions',
        children: [
            {
                path: 'ask',
                component: _qna_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_9__["AskQuestionComponent"],
                data: { editorMode: _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_12__["EditorMode"].ADD }
            },
            {
                path: 'edit/:questionId',
                component: _qna_ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_9__["AskQuestionComponent"],
                data: { editorMode: _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_12__["EditorMode"].UPDATE }
            },
            {
                path: ':qId/:qHeader',
                component: _qna_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_10__["ViewQuestionComponent"]
            },
            {
                path: '',
                component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'search',
        component: _search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'devnetApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "fill-wh-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contribute/contribute.component */ "./src/app/contribute/contribute.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _qna_qna_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qna/qna.module */ "./src/app/qna/qna.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ "./src/app/_interceptors/jwt.interceptor.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
            _qna_qna_module__WEBPACK_IMPORTED_MODULE_15__["QnaModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_14__["ProfileModule"],
            _search_search_module__WEBPACK_IMPORTED_MODULE_16__["SearchModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_10__["ContributeComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
        _qna_qna_module__WEBPACK_IMPORTED_MODULE_15__["QnaModule"],
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_14__["ProfileModule"],
        _search_search_module__WEBPACK_IMPORTED_MODULE_16__["SearchModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_10__["ContributeComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                    _qna_qna_module__WEBPACK_IMPORTED_MODULE_15__["QnaModule"],
                    _profile_profile_module__WEBPACK_IMPORTED_MODULE_14__["ProfileModule"],
                    _search_search_module__WEBPACK_IMPORTED_MODULE_16__["SearchModule"],
                ],
                providers: [
                    _authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authUrl}/auth/login`;
        this.registerUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authUrl}/auth/register`;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    get currentUser() {
        return this.currentUserSubject;
    }
    isLoggedIn() {
        console.log('ISLOGGEDIN', !!sessionStorage.getItem('currentUser'));
        return !!sessionStorage.getItem('currentUser');
    }
    login(username, password) {
        return this.http.post(this.loginUrl, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and jwt token in session storage to keep user logged in between page refreshes
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    register(email, firstName, lastName, password, username) {
        const registerBody = { email, firstName, lastName, password, username };
        return this.http.post(this.registerUrl, registerBody);
    }
    logout() {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('login');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function LoginComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_16_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_input_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 22);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(renderer, router, authService) {
        this.renderer = renderer;
        this.router = router;
        this.authService = authService;
        this.loader = false;
        this.submitted = false;
    }
    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
        this.renderer.addClass(document.body, 'login-bg');
        this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginFormGroup.invalid) {
            return;
        }
        this.loginUser();
    }
    loginUser() {
        this.loader = true;
        this.authService.login(this.loginFormGroup.get('username').value, this.loginFormGroup.get('password').value).subscribe((loginResp) => {
            console.log(loginResp);
            this.loader = false;
            if (loginResp != null && loginResp.username != null && loginResp.username != undefined) {
                this.router.navigate(['home']);
                this.messageType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["ResponseTypes"].SUCCESS;
                this.message = 'Logged in Successfully!!';
            }
            else {
                this.messageType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["ResponseTypes"].FAILED;
                this.message = 'Username or Password did not match';
            }
        }, (errorResp) => {
            this.loader = false;
            console.log('Couldn\'t Login: ', errorResp);
            alert("Error while logging in! Please check your credentials & try again!");
        });
    }
    get f() { return this.loginFormGroup.controls; }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'login-bg');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 11, consts: [[1, "flex-center-hv", "h-100"], [1, "card", "p-4", "card-secondary", "col-md-3", "align-self-center"], [1, "card", "card-primary"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["formControlName", "username", "placeholder", "Username", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fa", "fa-key"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "rpCheck1", 1, "form-check-input"], ["for", "rpCheck1", 1, "form-check-label", "text-left"], ["type", "submit", "value", "Login", "class", "btn btn-hollow-color-green btn-block", 4, "ngIf"], ["class", "flex-center-hv", 4, "ngIf"], [1, "text-center"], ["href", "/register"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "submit", "value", "Login", 1, "btn", "btn-hollow-color-green", "btn-block"], [1, "flex-center-hv"], [1, "spinner-loader", "m-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Remember password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_input_21_Template, 1, 0, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card-secondary[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: #ffffff9c;\n}\n\n.card-primary[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  background-color: #ffffff50;\n}\n\n.fit-content-fixed[_ngcontent-%COMP%] {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.logo-btn-md[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 2rem;\n  align-self: center;\n}\n\n.flex-center-hv[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zZWNvbmRhcnkge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjljO1xufVxuXG4uY2FyZC1wcmltYXJ5IHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MDtcbn1cblxuLmZpdC1jb250ZW50LWZpeGVkIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmxvZ28tYnRuLW1kIHtcbiAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZsZXgtY2VudGVyLWh2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuY2FyZC1zZWNvbmRhcnkge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjljO1xufVxuXG4uY2FyZC1wcmltYXJ5IHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1MDtcbn1cblxuLmZpdC1jb250ZW50LWZpeGVkIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmxvZ28tYnRuLW1kIHtcbiAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZsZXgtY2VudGVyLWh2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function RegisterComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_15_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.firstName.errors.required);
} }
function RegisterComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_21_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_21_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.email.errors.email);
} }
function RegisterComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_27_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.username.errors.required);
} }
function RegisterComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_33_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_33_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.password.errors.minlength);
} }
function RegisterComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_39_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_39_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.confirmPassword.errors.mustMatch);
} }
function RegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loader = false;
        this.submitted = false;
    }
    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.mustMatch('password', 'confirmPassword')
        });
    }
    // emailDomainValidator(control: FormControl) { 
    //   let email = control.value;
    //   if (email && email.indexOf("@") != -1) { 
    //     let [_, domain] = email.split("@"); 
    //     if (domain !== "gmail.com") { 
    //       return {
    //         emailDomain: {
    //           parsedDomain: domain
    //         }
    //       }
    //     }
    //   }
    //   return null; 
    // }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.registerUser();
    }
    registerUser() {
        this.loader = true;
        this.authService.register(this.registerForm.value.email, this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.password, this.registerForm.value.username)
            .subscribe((registerResp) => {
            console.log(registerResp);
            this.loader = false;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(registerResp) && !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(registerResp.username)) {
                this.router.navigate(['home']);
            }
        }, (errorResp) => {
            this.loader = false;
            alert("Couldn't Register : " + errorResp);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 47, vars: 26, consts: [[1, "flex-center-hv", "h-100"], [1, "col-md-4", "align-self-center"], [1, "card", "card-primary", "m-4"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "card-title", "mt-3", "text-center"], [1, "text-center"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["formControlName", "firstName", "placeholder", "First name", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "lastName", "placeholder", "Last name", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fa", "fa-envelope"], ["formControlName", "email", "placeholder", "Email address", "type", "email", 1, "form-control", 3, "ngClass"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-at"], ["formControlName", "username", "type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-lock"], ["formControlName", "password", "placeholder", "Create password", "type", "password", 1, "form-control", 3, "ngClass"], ["formControlName", "confirmPassword", "placeholder", "Repeat password", "type", "password", 1, "form-control", 3, "ngClass"], ["class", "form-group", 4, "ngIf"], ["class", "flex-center-hv", 4, "ngIf"], [1, "text-center", "mt-lg-3"], ["href", ""], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", "btn-hollow-color-green", "btn-block"], [1, "flex-center-hv"], [1, "spinner-loader", "m-2"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener($event) { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get started with your free account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterComponent_div_33_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegisterComponent_div_39_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_div_40_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterComponent_div_41_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".flex-center-hv[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 2rem;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXItaHYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4iLCIuZmxleC1jZW50ZXItaHYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contribute/contribute.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contribute/contribute.component.ts ***!
  \****************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContributeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContributeComponent.ɵfac = function ContributeComponent_Factory(t) { return new (t || ContributeComponent)(); };
ContributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContributeComponent, selectors: [["app-contribute"]], decls: 15, vars: 0, consts: [[1, "flex-center-hv", "h-100"], [1, "card", "col-md-3", "align-self-center"], [1, "card-body"], [1, "pb-3"], ["src", "https://docs.exosite.com/development/tools/github/github.png", 1, "logo-btn-md"], ["href", "https://github.com/gauravghongde/devnetApp", "target", "_blank", 1, "btn", "mr-3", "btn-hollow-color-dark-blue"], [1, "fas", "fa-external-link-alt"], ["href", "https://github.com/gauravghongde/devnet", "target", "_blank", 1, "btn", "btn-hollow-color-light-blue"], [1, "card-footer"]], template: function ContributeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Checkout the source-code on Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Made with \u2764 in India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo-btn-md[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  margin: 2rem;\n  align-self: center;\n}\n\n.flex-center-hv[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvY29udHJpYnV0ZS9jb250cmlidXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250cmlidXRlL2NvbnRyaWJ1dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyaWJ1dGUvY29udHJpYnV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJ0bi1tZCB7XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZsZXgtY2VudGVyLWh2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIubG9nby1idG4tbWQge1xuICBoZWlnaHQ6IDVyZW07XG59XG5cbi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNlbnRlci1odiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContributeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contribute',
                templateUrl: './contribute.component.html',
                styleUrls: ['./contribute.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utilities_constants_feedback_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/constants/feedback.constants */ "./src/app/utilities/constants/feedback.constants.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/input-stars/input-stars.component */ "./src/app/shared/input-stars/input-stars.component.ts");








function FeedbackComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedbackComponent_div_2_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input-stars", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_div_2_Template_input_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r21.feedbackFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.getFormControl("feedbackText").hasError("required") && ctx_r21.getFormControl("feedbackText").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messages", ctx_r21.ratingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r21.feedbackFormGroup.valid);
} }
function FeedbackComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Thanks for your feedback, much appreciated!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeedbackComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.preText = 'Experience was';
        this.ratingMessages = [
            `${this.preText} worst!`,
            `${this.preText} pretty bad.`,
            `${this.preText} acceptable.`,
            `${this.preText} pretty good.`,
            `${this.preText} great!`
        ];
        this.loading = false;
    }
    ngOnInit() {
        this.feedbackFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            feedbackText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        if (sessionStorage.getItem('isFBSubmitted') === 'true') {
            this.submitted = true;
        }
    }
    submit() {
        this.loading = true;
        const fbBody = new FormData;
        fbBody.append(_utilities_constants_feedback_constants__WEBPACK_IMPORTED_MODULE_2__["FB_TEXT_PARAM"], this.feedbackFormGroup.get('feedbackText').value);
        fbBody.append(_utilities_constants_feedback_constants__WEBPACK_IMPORTED_MODULE_2__["FB_RATE_PARAM"], this.feedbackFormGroup.get('rating').value);
        this.commonService.postMethodWithOptions(_utilities_constants_feedback_constants__WEBPACK_IMPORTED_MODULE_2__["FORM_URL"], fbBody, { responseType: 'text/html' }).subscribe((resp) => {
            this.submitted = true;
            sessionStorage.setItem('isFBSubmitted', 'true');
            this.loading = false;
            console.log("resp", resp);
        }, (err) => {
            this.submitted = true;
            sessionStorage.setItem('isFBSubmitted', 'true');
            this.loading = false;
            console.log("err", err);
        });
    }
    getFormControl(name) {
        return this.feedbackFormGroup.get(name);
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 5, vars: 3, consts: [[1, "flex-center-hv", "h-100"], [1, "card", "col-lg-4", "align-self-center"], ["class", "card-body", 4, "ngIf"], ["class", "card-body flex-center-hv", 4, "ngIf"], ["class", "card-body m4", 4, "ngIf"], [1, "card-body"], [1, "text-left", 3, "formGroup"], ["rows", "4", "formControlName", "feedbackText", "placeholder", "Your text here", 1, "textarea"], ["class", "text-danger text-x-small", 4, "ngIf"], ["formControlName", "rating", "label", "Rating", 3, "messages"], ["type", "submit", "value", "Submit", 1, "btn", "btn-hollow-color-green", "btn-block", 3, "disabled", "click"], [1, "text-danger", "text-x-small"], [1, "card-body", "flex-center-hv"], [1, "spinner-loader", "m-4"], [1, "card-body", "m4"], [1, "p-3"], [1, "fa", "fal", "fa-check"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedbackComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FeedbackComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedbackComponent_div_4_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_5__["InputStarsComponent"]], styles: [".align-self-center[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  margin: 2rem;\n  align-self: center;\n}\n\n.flex-center-hv[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.textarea[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n}\n\n.textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURBRTtFQUNFLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZsZXgtY2VudGVyLWh2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dGFyZWEge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiIsIi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNlbnRlci1odiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHRhcmVhIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/qna/question.service */ "./src/app/qna/question.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/question-list-view/question-list-view.component */ "./src/app/shared/question-list-view/question-list-view.component.ts");





function HomepageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function HomepageComponent_app_question_list_view_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question-list-view", 5);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionList", ctx_r28.allQuestions);
} }
function HomepageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
class HomepageComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.loader = true;
    }
    ngOnInit() {
        this.getAllQuestions();
        this.loader = false;
    }
    getAllQuestions() {
        this.questionService.getAllQuestions().subscribe((questionObjArr) => {
            this.allQuestions = questionObjArr;
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 7, vars: 3, consts: [[1, "p-3", "col", "col-md-9"], ["class", "vertical-bars-loader", 4, "ngIf"], [3, "questionList", 4, "ngIf"], ["class", "spinner-loader", 4, "ngIf"], [1, "vertical-bars-loader"], [3, "questionList"], [1, "spinner-loader"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Questions for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomepageComponent_div_4_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomepageComponent_app_question_list_view_5_Template, 1, 1, "app-question-list-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomepageComponent_div_6_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.allQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader || !ctx.allQuestions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_3__["QuestionListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 15, vars: 0, consts: [[1, "h-100", "notfound"], [1, "notfound-404"], [1, "m-0"], ["href", "/", 1, "btn", "btn-hollow-color-green"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oops! Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Guess you messed up something, No Worries!! :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get to a safe place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".notfound[_ngcontent-%COMP%] {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  text-shadow: -8px 0px 0px #fff;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 10rem;\n  font-weight: 900;\n  margin: 0px;\n  color: #262626;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSA+IHNwYW4ge1xuICB0ZXh0LXNoYWRvdzogLThweCAwcHggMHB4ICNmZmY7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG4iLCIubm90Zm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEgPiBzcGFuIHtcbiAgdGV4dC1zaGFkb3c6IC04cHggMHB4IDBweCAjZmZmO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/qna/answer-post/answer-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/qna/answer-post/answer-post.component.ts ***!
  \**********************************************************/
/*! exports provided: AnswerPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPostComponent", function() { return AnswerPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnswerPostComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AnswerPostComponent.ɵfac = function AnswerPostComponent_Factory(t) { return new (t || AnswerPostComponent)(); };
AnswerPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswerPostComponent, selectors: [["app-answer-post"]], decls: 2, vars: 0, template: function AnswerPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "answer-post works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3FuYS9hbnN3ZXItcG9zdC9hbnN3ZXItcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer-post',
                templateUrl: './answer-post.component.html',
                styleUrls: ['./answer-post.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/qna/answer.service.ts":
/*!***************************************!*\
  !*** ./src/app/qna/answer.service.ts ***!
  \***************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





class AnswerService {
    constructor(commonService) {
        this.commonService = commonService;
    }
    addAnswer(answerReq, questionId) {
        //options -> questionId is required for Answer Object to point to a perticular question identified by questionId
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("questionId", questionId) };
        return this.commonService.postMethodWithOptions(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/posts/add`, answerReq, options);
    }
    editAnswer(answerReq, answerId) {
        return this.commonService.putMethod(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/posts/${answerId}/update`, answerReq);
    }
    deleteAnswer(answerId) {
        return this.commonService.deleteMethod(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/posts/${answerId}/delete`);
    }
}
AnswerService.ɵfac = function AnswerService_Factory(t) { return new (t || AnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
AnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnswerService, factory: AnswerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnswerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/ask-question/ask-question.component.ts":
/*!************************************************************!*\
  !*** ./src/app/qna/ask-question/ask-question.component.ts ***!
  \************************************************************/
/*! exports provided: AskQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskQuestionComponent", function() { return AskQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _shared_qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/qna-editor/qna-editor.component */ "./src/app/shared/qna-editor/qna-editor.component.ts");






class AskQuestionComponent {
    constructor(route, router, sharedService) {
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.qnaObjToEdit = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["QnaRequest"]();
        this.editorType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"].QUESTION;
        this.questionTitle = '';
        this.loader = false;
    }
    ngOnInit() {
        this.editorMode = this.route.snapshot.data.editorMode;
        console.log("Current Mode: ", this.viewOption);
        this.qnaObjToEdit = this.sharedService.getQnaRequest();
        console.log("edit mode wala question: ", this.qnaObjToEdit);
    }
}
AskQuestionComponent.ɵfac = function AskQuestionComponent_Factory(t) { return new (t || AskQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
AskQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AskQuestionComponent, selectors: [["app-ask-question"]], decls: 31, vars: 3, consts: [[1, "mt-4", "mx-4", "pl-2"], [1, "mt-4", "mx-4", "px-2"], [1, "row"], [1, "col", "col-md-9"], [3, "qnaRequest", "editorMode", "editorType"], [1, "col", "col-md-3"], [1, "card"], [1, "card-header"], [1, "card-body"], ["href", "https://example.com"]], template: function AskQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ask a Question\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-qna-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " How to Format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u25BA create code fences with backticks ` or tildes ~ ``` like so ``` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u25BA add language identifier to highlight code ```python def function(foo): print(foo) ``` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u25BA put returns between paragraphs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u25BA for linebreak add 2 spaces at end ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u25BA _italic_ or **bold** ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u25BA indent code by 4 spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u25BA backtick escapes `like _so_` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u25BA quote by placing > at start of line ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u25BA to make links (use https whenever possible) <https: //example.com> [example](https://example.com) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " formatting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaRequest", ctx.qnaObjToEdit)("editorMode", ctx.editorMode)("editorType", ctx.editorType);
    } }, directives: [_shared_qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_4__["QnaEditorComponent"]], styles: [".word-warp[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.variable-textarea[_ngcontent-%COMP%] {\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvcW5hL2Fzay1xdWVzdGlvbi9hc2stcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS9hc2stcXVlc3Rpb24vYXNrLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNFQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3FuYS9hc2stcXVlc3Rpb24vYXNrLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmQtd2FycCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi52YXJpYWJsZS10ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuIiwiLndvcmQtd2FycCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi52YXJpYWJsZS10ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ask-question',
                templateUrl: './ask-question.component.html',
                styleUrls: ['./ask-question.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/comment.service.ts":
/*!****************************************!*\
  !*** ./src/app/qna/comment.service.ts ***!
  \****************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class CommentService {
    // addCommentUrl: string;
    constructor(http) {
        this.http = http;
    }
    addComment(commentReq, postId) {
        const addCommentUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/comments/add`;
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('postId', postId) };
        return this.http.post(addCommentUrl, commentReq, options);
    }
    updateComment(commentReq, postId, commentId) {
        const updateCommentUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/comments/${commentId}/update`;
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('postId', postId) };
        return this.http.put(updateCommentUrl, commentReq, options);
    }
    deleteComment(postId, commentId) {
        const deleteCommentUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/comments/${commentId}/delete`;
        const options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('postId', postId) };
        return this.http.put(deleteCommentUrl, {}, options);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/qna.module.ts":
/*!***********************************!*\
  !*** ./src/app/qna/qna.module.ts ***!
  \***********************************/
/*! exports provided: QnaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaModule", function() { return QnaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _answer_post_answer_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer-post/answer-post.component */ "./src/app/qna/answer-post/answer-post.component.ts");
/* harmony import */ var _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ask-question/ask-question.component */ "./src/app/qna/ask-question/ask-question.component.ts");
/* harmony import */ var _view_question_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-question/comments/comments.component */ "./src/app/qna/view-question/comments/comments.component.ts");
/* harmony import */ var _view_question_view_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-question/view-question.component */ "./src/app/qna/view-question/view-question.component.ts");











class QnaModule {
}
QnaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QnaModule });
QnaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function QnaModule_Factory(t) { return new (t || QnaModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QnaModule, { declarations: [_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_8__["ViewQuestionComponent"], _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"], _answer_post_answer_post_component__WEBPACK_IMPORTED_MODULE_5__["AnswerPostComponent"], _view_question_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QnaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_8__["ViewQuestionComponent"], _ask_question_ask_question_component__WEBPACK_IMPORTED_MODULE_6__["AskQuestionComponent"], _answer_post_answer_post_component__WEBPACK_IMPORTED_MODULE_5__["AnswerPostComponent"], _view_question_comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot(),
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/qna/question.service.ts":
/*!*****************************************!*\
  !*** ./src/app/qna/question.service.ts ***!
  \*****************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': `Bearer ${sessionStorage.getItem('currentUser.jwt')}`
//   })
// };
class QuestionService {
    constructor(commonService) {
        this.commonService = commonService;
        this.addQuestionUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts/add`;
        this.searchQuestionUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/search`;
        this.getQuestionUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts/questions`;
    }
    addQuestion(questionReq) {
        return this.commonService.postMethod(this.addQuestionUrl, questionReq);
    }
    editQuestion(questionId, questionReq) {
        return this.commonService.putMethod(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts/${questionId}/update`, questionReq);
    }
    searchQuestion(searchQuery) {
        const queryParam = { query: searchQuery };
        return this.commonService.getMethodWithQueryParam(this.searchQuestionUrl, queryParam);
    }
    getQueWithAns(questionId, questionHeader) {
        return this.commonService.getMethod(this.getQuestionUrl + '/' + questionId);
    }
    getAllQuestions() {
        return this.commonService.getMethod(this.getQuestionUrl);
    }
    deleteQuestion(questionId) {
        return this.commonService.deleteMethod(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/posts/${questionId}/delete`);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/view-question/comments/comments.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/qna/view-question/comments/comments.component.ts ***!
  \******************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../comment.service */ "./src/app/qna/comment.service.ts");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/vote-badge/vote-badge.component */ "./src/app/shared/vote-badge/vote-badge.component.ts");








function CommentsComponent_ng_container_0_ng_container_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r98.username, " ");
} }
function CommentsComponent_ng_container_0_ng_container_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", comment_r98.username, " ");
} }
function CommentsComponent_ng_container_0_ng_container_1_ng_container_11_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_ng_container_11_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r109.editClicked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentsComponent_ng_container_0_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsComponent_ng_container_0_ng_container_1_ng_container_11_a_1_Template, 2, 0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_ng_container_11_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.editCommentClicked(comment_r98.id, comment_r98.body); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_ng_container_11_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.deleteCommentClicked(ctx_r114.post.id, comment_r98.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.editClicked);
} }
function CommentsComponent_ng_container_0_ng_container_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r103.commentEditData.length, "/", ctx_r103.charLimits.MAX_CHAR_LIMIT_COMMENT, " characters");
} }
function CommentsComponent_ng_container_0_ng_container_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r104.commentEditData.length, "/", ctx_r104.charLimits.MAX_CHAR_LIMIT_COMMENT, " characters");
} }
function CommentsComponent_ng_container_0_ng_container_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r105.errMsg);
} }
function CommentsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vote-badge", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CommentsComponent_ng_container_0_ng_container_1_span_9_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CommentsComponent_ng_container_0_ng_container_1_span_10_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentsComponent_ng_container_0_ng_container_1_ng_container_11_Template, 6, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsComponent_ng_container_0_ng_container_1_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r116.commentEditData = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.submitEditCommentClicked(ctx_r118.post.id, comment_r98.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CommentsComponent_ng_container_0_ng_container_1_div_21_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CommentsComponent_ng_container_0_ng_container_1_div_22_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommentsComponent_ng_container_0_ng_container_1_div_23_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_Template_a_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.editCancelClicked(comment_r98.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_ng_container_0_ng_container_1_Template_a_click_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.deleteCommentClicked(ctx_r122.post.id, comment_r98.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUpvotes", comment_r98.vote.upVotes)("currentDownvotes", comment_r98.vote.downVotes)("currentVoteStatus", comment_r98.vote.voteStatus)("postId", ctx_r99.post.id)("commentId", comment_r98.id)("usersInteracted", comment_r98.usersInteracted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "commentBodyDOM" + comment_r98.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "commentTextDOM" + comment_r98.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r98.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/users/", comment_r98.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r98.username == ctx_r99.post.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r98.username != ctx_r99.post.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.hasEditAccess(comment_r98.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "commentEditText" + comment_r98.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r99.isCommentSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "commentEditAreaCollapse" + comment_r98.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r99.commentEditData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.commentEditData.length <= ctx_r99.charLimits.MIN_CHAR_LIMIT_COMMENT || ctx_r99.commentEditData.length > ctx_r99.charLimits.MAX_CHAR_LIMIT_COMMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.commentEditData.length > ctx_r99.charLimits.MIN_CHAR_LIMIT_COMMENT && ctx_r99.commentEditData.length <= ctx_r99.charLimits.MAX_CHAR_LIMIT_COMMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.isCmtError);
} }
function CommentsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsComponent_ng_container_0_ng_container_1_Template, 29, 21, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r98);
} }
function CommentsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r95.commentData.length, "/", ctx_r95.charLimits.MAX_CHAR_LIMIT_COMMENT, " characters");
} }
function CommentsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r96.commentData.length, "/", ctx_r96.charLimits.MAX_CHAR_LIMIT_COMMENT, " characters");
} }
function CommentsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r97.errMsg);
} }
class CommentsComponent {
    constructor(commentService, authService) {
        this.commentService = commentService;
        this.authService = authService;
        this.isCommentSubmitted = false;
        this.isEditSuccessfull = false;
        this.commentData = '';
        this.commentEditData = '';
        this.previousEditId = '';
        this.isCmtError = false;
        this.editClicked = false;
        this.charLimits = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["CharLimits"];
        this.newComment = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["Comment"]();
    }
    ngOnInit() { }
    hasEditAccess(commentUser) {
        const loggedInUser = this.authService.currentUser.value.username;
        return (commentUser === loggedInUser) ? true : false;
    }
    testClick() {
        delete this.post.comments[0];
    }
    scroll(el) {
        let elementToScrollTo = el;
        const childOffset = 5;
        for (let i = 0; i < childOffset; i++) {
            if (!elementToScrollTo.previousElementSibling) {
                break;
            }
            elementToScrollTo = elementToScrollTo.previousElementSibling;
        }
        elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        document.getElementById('addCommentButton' + this.index).click();
    }
    submitCommentClicked(postId) {
        if (this.commentData.length >= this.charLimits.MIN_CHAR_LIMIT_COMMENT
            && this.commentData.length <= this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
            this.isCmtError = false;
            const body = this.commentData;
            this.commentService.addComment({ body }, postId).subscribe((commentRes) => {
                console.log('posted comment response -> ', commentRes);
                if (commentRes) {
                    console.log('post before pushing-> ', this.post);
                    this.post.comments.push(commentRes);
                    console.log('post after pushing-> ', this.post);
                    this.isCommentSubmitted = true;
                    // this.newComment = commentRes;
                    this.commentData = '';
                }
                this.isCommentSubmitted = false;
            });
        }
        else if (this.commentData.length > this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
            this.isCmtError = true;
            this.errMsg = 'Comment is too big!!!';
        }
        else if (this.commentData.length < this.charLimits.MIN_CHAR_LIMIT_COMMENT) {
            this.isCmtError = true;
            this.errMsg = 'Comment is too short!!!';
        }
    }
    collapseAllOthers(id) {
        this.post.comments.forEach(comment => {
            if (comment.id !== id) {
                this.editCancelClicked(comment.id);
            }
        });
    }
    editCommentClicked(commentId, commentBody) {
        this.isCommentSubmitted = false;
        this.collapseAllOthers(commentId);
        this.previousEditId = commentId;
        document.getElementById('commentBodyDOM' + commentId).style.display = 'none';
        this.commentEditData = document.getElementById('commentTextDOM' + commentId).innerText;
        console.log('editClicked-' + this.commentEditData);
        const el = document.getElementById('commentEditAreaCollapse' + commentId);
        if (el.classList) {
            el.classList.remove('collapse');
        }
    }
    editCancelClicked(commentId) {
        console.log('editCancelClicked - ' + commentId);
        document.getElementById('commentBodyDOM' + commentId).style.display = 'block';
        this.commentEditData = '';
        const el = document.getElementById('commentEditAreaCollapse' + commentId);
        if (el.classList) {
            el.classList.add('collapse');
        }
    }
    submitEditCommentClicked(postId, commentId) {
        console.log('EditSubmitted - ' + commentId);
        const body = this.commentEditData;
        this.editCancelClicked(commentId);
        this.commentService.updateComment({ body }, postId, commentId).subscribe((commentRes) => {
            console.log('edited comment response -> ', commentRes);
            document.getElementById('commentTextDOM' + commentId).innerText = body;
        });
    }
    deleteCommentClicked(postId, commentId) {
        if (confirm('Are you sure to delete this comment??')) {
            this.commentService.deleteComment(postId, commentId).subscribe((commentRes) => {
                console.log('deleted comment response -> ', commentRes);
                delete this.post.comments[this.post.comments.findIndex(item => item.id === commentId)];
                this.post.comments = this.post.comments.filter(n => n); // to filter undefined values
            });
        }
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], inputs: { post: "post", index: "index" }, decls: 15, vars: 10, consts: [[4, "ngFor", "ngForOf"], [1, "my-3", "maxout-min-width"], ["data-toggle", "collapse", 3, "id", "href"], [1, "row", "py-0", "mx-0", "comment-body", "collapse", "multi-collapse", 3, "id"], [1, "col", "pl-0", "my-3", "pr-3", "maxout-min-width", "form-group"], ["name", "commentTextArea", "rows", "2", "placeholder", "Type your comment here..", 1, "form-control", "variable-textarea", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-color-green", "my-2", "my-sm-0", 3, "click"], ["class", "p-2 text-danger", 4, "ngIf"], ["class", "p-2 text-success", 4, "ngIf"], ["class", "alert alert-danger dn-alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "row", "py-0", "mx-0", "comment-body"], [3, "currentUpvotes", "currentDownvotes", "currentVoteStatus", "postId", "commentId", "usersInteracted"], [1, "col", "pl-4", "pr-0", 2, "min-width", "85%", 3, "id"], [1, "my-2"], [3, "id"], [1, "ml-2", 3, "href"], ["class", "badge badge-secondary px-2 mr-2 comment-author-badge", 4, "ngIf"], ["class", "badge badge-secondary border px-2 mr-2 comment-user-badge", 4, "ngIf"], [1, "col", "pl-0", "mb-3", "pr-3", "maxout-min-width", "form-group"], ["name", "commentTextArea", "rows", "3", 1, "form-control", "variable-textarea", 3, "ngModel", "ngModelChange"], [1, "p-2", "link", 3, "click"], [1, "link", "p-2", "mr-2", 3, "click"], [1, "comment-seperator"], [1, "badge", "badge-secondary", "px-2", "mr-2", "comment-author-badge"], [1, "badge", "badge-secondary", "border", "px-2", "mr-2", "comment-user-badge"], [3, "click", 4, "ngIf"], [1, "link", "mr-2", 3, "click"], [3, "click"], [1, "p-2", "text-danger"], [1, "p-2", "text-success"], [1, "alert", "alert-danger", "dn-alert-danger"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.commentData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_10_listener($event) { return ctx.submitCommentClicked(ctx.post.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentsComponent_div_12_Template, 2, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommentsComponent_div_13_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CommentsComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.post.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "addCommentButton" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "#commentTextAreaCollapse" + ctx.index, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.isCommentSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "commentTextAreaCollapse" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentData.length <= ctx.charLimits.MIN_CHAR_LIMIT_COMMENT || ctx.commentData.length > ctx.charLimits.MAX_CHAR_LIMIT_COMMENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentData.length > ctx.charLimits.MIN_CHAR_LIMIT_COMMENT && ctx.commentData.length <= ctx.charLimits.MAX_CHAR_LIMIT_COMMENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCmtError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_6__["VoteBadgeComponent"]], styles: [".comment-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 100%;\n}\n\n.comment-seperator[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  display: block;\n  width: 100%;\n  background-color: #d6d8d9;\n  height: 1px;\n}\n\n.comment-author-badge[_ngcontent-%COMP%] {\n  background-color: #101357;\n  color: lightblue;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.comment-author-badge[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.comment-user-badge[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px #101357 solid !important;\n  color: #101357;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.comment-user-badge[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.maxout-min-width[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvcW5hL3ZpZXctcXVlc3Rpb24vY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS92aWV3LXF1ZXN0aW9uL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcW5hL3ZpZXctcXVlc3Rpb24vY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1ib2R5IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXNlcGVyYXRvciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsZWFyOmJvdGg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6I2Q2ZDhkOTtcbiAgICBoZWlnaHQ6IDFweDtcbn1cblxuLmNvbW1lbnQtYXV0aG9yLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMzU3O1xuICAgIGNvbG9yOiBsaWdodGJsdWU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb21tZW50LWF1dGhvci1iYWRnZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jb21tZW50LXVzZXItYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4ICMxMDEzNTcgc29saWQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzEwMTM1NztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbW1lbnQtdXNlci1iYWRnZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tYXhvdXQtbWluLXdpZHRoIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rIHsgXG4gICAgY29sb3I6ICMwMDdiZmY7IFxufSBcblxuLmxpbms6aG92ZXIgeyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IFxufSIsIi5jb21tZW50LWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudC1zZXBlcmF0b3Ige1xuICBib3JkZXI6IDA7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOGQ5O1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLmNvbW1lbnQtYXV0aG9yLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTM1NztcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29tbWVudC1hdXRob3ItYmFkZ2U6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNvbW1lbnQtdXNlci1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCAjMTAxMzU3IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTAxMzU3O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb21tZW50LXVzZXItYmFkZ2U6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1heG91dC1taW4td2lkdGgge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.scss']
            }]
    }], function () { return [{ type: _comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }, { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/qna/view-question/view-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/qna/view-question/view-question.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionComponent", function() { return ViewQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question.service */ "./src/app/qna/question.service.ts");
/* harmony import */ var _answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../answer.service */ "./src/app/qna/answer.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/vote-badge/vote-badge.component */ "./src/app/shared/vote-badge/vote-badge.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _shared_avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/avatar/gravatar.directive */ "./src/app/shared/avatar/gravatar.directive.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/qna/view-question/comments/comments.component.ts");
/* harmony import */ var _shared_qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/qna-editor/qna-editor.component */ "./src/app/shared/qna-editor/qna-editor.component.ts");














function ViewQuestionComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_div_17_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.editQuestionClicked(ctx_r37.questionObj); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_div_17_Template_a_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.deleteQuestionClicked(ctx_r39.questionObj.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_div_0_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Answers yet! Would you like to write one ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_ng_container_33_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.isAnswerWindowOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Write An Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ViewQuestionComponent_div_0_h4_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_div_0_div_36_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_div_36_a_8_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.indexOfAnsInEditMode = 0 - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2190 Discard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_div_0_div_36_ng_container_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_div_36_ng_container_9_div_7_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const answer_r42 = ctx_r51.$implicit; const i_r43 = ctx_r51.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.editAnswerClicked(answer_r42, i_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_div_0_div_36_ng_container_9_div_7_Template_a_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const answer_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.deleteAnswerClicked(answer_r42.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_div_0_div_36_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "markdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewQuestionComponent_div_0_div_36_ng_container_9_div_7_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const answer_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Views: 124k, Comments: ", answer_r42.comments.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", answer_r42.answerBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.hasEditAccess(answer_r42.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarKey", answer_r42.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/users/", answer_r42.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r42.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, answer_r42.postedAt));
} }
function ViewQuestionComponent_div_0_div_36_app_qna_editor_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-qna-editor", 35);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaRequest", ctx_r46.qnaRequest)("editorMode", ctx_r46.editorMode)("editorType", ctx_r46.editorType);
} }
function ViewQuestionComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-vote-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewQuestionComponent_div_0_div_36_a_8_Template, 2, 0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewQuestionComponent_div_0_div_36_ng_container_9_Template, 19, 9, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewQuestionComponent_div_0_div_36_app_qna_editor_10_Template, 1, 3, "app-qna-editor", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-comments", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUpvotes", answer_r42.vote.upVotes)("currentDownvotes", answer_r42.vote.downVotes)("currentVoteStatus", answer_r42.vote.voteStatus)("postId", answer_r42.id)("usersInteracted", answer_r42.usersInteracted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r43 === ctx_r35.indexOfAnsInEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r43 != ctx_r35.indexOfAnsInEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r43 === ctx_r35.indexOfAnsInEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", answer_r42)("index", i_r43);
} }
function ViewQuestionComponent_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-qna-editor", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaRequest", ctx_r36.qnaRequest)("editorMode", ctx_r36.editorMode)("editorType", ctx_r36.editorType);
} }
function ViewQuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-vote-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "markdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ViewQuestionComponent_div_0_div_17_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-comments", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ViewQuestionComponent_div_0_ng_container_33_Template, 6, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewQuestionComponent_div_0_h4_35_Template, 2, 0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ViewQuestionComponent_div_0_div_36_Template, 14, 10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewQuestionComponent_div_0_div_37_Template, 5, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUpvotes", ctx_r30.questionObj.vote.upVotes)("currentDownvotes", ctx_r30.questionObj.vote.downVotes)("currentVoteStatus", ctx_r30.questionObj.vote.voteStatus)("postId", ctx_r30.questionObj.id)("usersInteracted", ctx_r30.questionObj.usersInteracted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Views: 124k, Answers: ", ctx_r30.answerObjList.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.questionObj.questionHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r30.questionObj.questionBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.hasEditAccess(ctx_r30.questionObj.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarKey", ctx_r30.questionObj.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/users/", ctx_r30.questionObj.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.questionObj.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 19, ctx_r30.questionObj.postedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r30.questionObj)("index", 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.answerObjList.length == 0 && !ctx_r30.isAnswerWindowOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.answerObjList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.answerObjList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.isAnswerWindowOpen);
} }
function ViewQuestionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
} }
class ViewQuestionComponent {
    constructor(route, questionService, answerService, router, sharedService, authService) {
        this.route = route;
        this.questionService = questionService;
        this.answerService = answerService;
        this.router = router;
        this.sharedService = sharedService;
        this.authService = authService;
        this.questionObj = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["Post"]();
        this.answerObjList = new Array();
        this.currentVoteCount = 0;
        this.currentUpvotes = 0;
        this.currentDownvotes = 0;
        this.isAnswerWindowOpen = true;
        this.newComment = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["Comment"]();
        this.questionTitle = '';
        this.questionBody = '';
        this.answerData = '';
        this.indexOfAnsInEditMode = -1;
        this.editorMode = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorMode"].ADD;
        this.editorType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"].ANSWER;
        this.qnaRequest = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["QnaRequest"]();
        this.isAnsError = false;
        this.isLoading = false;
    }
    // To call router:
    // this.router.navigate(['/myUrlPath', "someId", "another ID"]);
    // In routes.ts:
    // { path: 'myUrlpath/:id1/:id2', component: componentToGoTo},
    ngOnInit() {
        this.isLoading = true;
        this.route.params.subscribe((params) => {
            console.log(params);
            this.showQuestion(params.qId, params.qHeader);
        }, (err) => {
            console.log(err);
            this.isLoading = false;
        });
    }
    showQuestion(questionId, questionHeader) {
        this.qnaRequest = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["QnaRequest"]();
        this.qnaRequest.questionId = questionId;
        this.sharedService.setQnaRequest(this.qnaRequest);
        this.questionService.getQueWithAns(questionId, questionHeader).subscribe((getQueWithAnsResp) => {
            console.log("Question + Array of Answers:: ", getQueWithAnsResp);
            getQueWithAnsResp.forEach((postObj) => {
                (postObj.id === postObj.questionId) ? this.questionObj = postObj : this.answerObjList.push(postObj);
            });
            // this.currentUpvotes = +this.questionObj.upVotes; //parseInt(this.questionObj.upVotes)
            // this.currentDownvotes = +this.questionObj
            if (this.answerObjList.length === 0) {
                this.isAnswerWindowOpen = false;
            }
            this.isLoading = false;
        }, (err) => {
            console.log(err);
            this.isLoading = false;
        });
    }
    deleteQuestionClicked(questionId) {
        if (confirm('Are you sure you want to delete this question?')) {
            this.questionService.deleteQuestion(questionId).subscribe(res => console.log(res));
            alert('Question was deleted');
            window.location.href = '/home';
        }
        else {
            console.log('Question was not deleted.');
        }
    }
    editQuestionClicked(qnaObj) {
        this.editorType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"].QUESTION;
        this.editorMode = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorMode"].UPDATE;
        this.qnaRequest = new src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["QnaRequest"]();
        this.qnaRequest.id = qnaObj.id;
        this.qnaRequest.questionBody = qnaObj.questionBody;
        this.qnaRequest.questionHeader = qnaObj.questionHeader;
        this.sharedService.setQnaRequest(this.qnaRequest);
        this.router.navigateByUrl('/questions/edit/' + qnaObj.id);
    }
    editAnswerClicked(answerObj, currentIndex) {
        this.indexOfAnsInEditMode = currentIndex;
        this.editorType = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"].ANSWER;
        this.editorMode = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorMode"].UPDATE;
        this.qnaRequest.id = answerObj.id;
        this.qnaRequest.answerBody = answerObj.answerBody;
        this.sharedService.setQnaRequest(this.qnaRequest);
    }
    deleteAnswerClicked(answerId) {
        if (confirm('Are you sure you want to delete this answer?')) {
            this.answerService.deleteAnswer(answerId).subscribe(res => console.log(res));
            alert('Answer was deleted');
            window.location.reload();
        }
        else {
            console.log('Answer was not deleted.');
        }
    }
    hasEditAccess(owner) {
        const loggedInUser = this.authService.currentUser.value.username;
        return (owner === loggedInUser) ? true : false;
    }
}
ViewQuestionComponent.ɵfac = function ViewQuestionComponent_Factory(t) { return new (t || ViewQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
ViewQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewQuestionComponent, selectors: [["app-view-question"]], decls: 2, vars: 2, consts: [["class", "mt-4 mx-4 px-2", 4, "ngIf"], ["class", "spinner-loader m-4", 4, "ngIf"], [1, "mt-4", "mx-4", "px-2"], [1, "row"], [1, "col", "col-md-9"], [1, "card"], [1, "row", "py-4", "mx-4"], [3, "currentUpvotes", "currentDownvotes", "currentVoteStatus", "postId", "commentId", "usersInteracted"], [1, "col", "pl-4", "pr-0", 2, "min-width", "80%"], [1, "row", "p-0", "m-0", "mb-3", "word-warp"], [1, "text-muted", "maxout-min-width"], [1, "markdown-content", "mb-2"], [1, "variable-binding", 3, "data"], [1, "comment-seperator"], [1, "row", "maxout-min-width", "p-0", "m-0"], [4, "ngIf"], [1, "author-card", "ml-auto", "m-0", "p-0"], ["href", "", 1, "p-2", "float-left"], ["appGravatar", "", "alt", "", "width", "38", "height", "38", 1, "bar-sm", 3, "avatarKey"], [1, "px-2", "pt-2", "author-username"], [3, "href"], [1, "m-0", "font-13", "author-date"], [1, "row", "py-0", "m-0", "comment-display-contents"], [3, "post", "index"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "link", "mr-2", 3, "click"], [1, "link", 3, "click"], [1, "text-muted", "m-0"], [1, "btn", "btn-hollow-color-green", "my-2", "my-sm-0", 3, "click"], [1, "my-2"], ["class", "text-danger link", 3, "click", 4, "ngIf"], ["class", "w-100", 3, "qnaRequest", "editorMode", "editorType", 4, "ngIf"], [1, "text-danger", "link", 3, "click"], [1, "text-muted"], [1, "w-100", 3, "qnaRequest", "editorMode", "editorType"], [1, ""], [1, "row", "py-4", "mx-0"], [1, "spinner-loader", "m-4"]], template: function ViewQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewQuestionComponent_div_0_Template, 38, 21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewQuestionComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_8__["VoteBadgeComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_9__["MarkdownComponent"], _shared_avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_10__["GravatarDirective"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_12__["QnaEditorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["voter-default[_ngcontent-%COMP%] {\n  background-color: darkgray;\n  color: 0;\n}\n\n.author-card[_ngcontent-%COMP%] {\n  width: 170px;\n  background: #101357;\n  float: right;\n  padding: 8px;\n  border-radius: 4px;\n}\n\n.author-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid #c0d6ff;\n  border-radius: 2px;\n}\n\n.font-13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.author-date[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.author-username[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: lightblue !important;\n  text-decoration: none !important;\n}\n\n.author-username[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgba(173, 216, 230, 0.9);\n}\n\n.markdown-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.answer-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.preview-answer[_ngcontent-%COMP%] {\n  min-height: 165px;\n}\n\n.comment-display-contents[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvcW5hL3ZpZXctcXVlc3Rpb24vdmlldy1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3ZpZXctcXVlc3Rpb24vdmlldy1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9xbmEvdmlldy1xdWVzdGlvbi92aWV3LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidm90ZXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICBjb2xvcjogZ3JlZW4oJGNvbG9yOiAjMDAwMDAwKTtcbn1cblxuLmF1dGhvci1jYXJkIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTAxMzU3O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYXV0aG9yLWNhcmQgaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2MwZDZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZm9udC0xMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmF1dGhvci1kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXV0aG9yLXVzZXJuYW1lIGEge1xuICBjb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmF1dGhvci11c2VybmFtZSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZmFkZS1vdXQoJGNvbG9yOiBsaWdodGJsdWUsICRhbW91bnQ6IDAuMSk7XG59XG5cbi5tYXJrZG93bi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbnN3ZXItYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4ucHJldmlldy1hbnN3ZXIge1xuICBtaW4taGVpZ2h0OiAxNjVweDtcbn1cblxuLmNvbW1lbnQtZGlzcGxheS1jb250ZW50cyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iLCJ2b3Rlci1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gIGNvbG9yOiAwO1xufVxuXG4uYXV0aG9yLWNhcmQge1xuICB3aWR0aDogMTcwcHg7XG4gIGJhY2tncm91bmQ6ICMxMDEzNTc7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hdXRob3ItY2FyZCBpbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzBkNmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5mb250LTEzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYXV0aG9yLWRhdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hdXRob3ItdXNlcm5hbWUgYSB7XG4gIGNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRob3ItdXNlcm5hbWUgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC45KTtcbn1cblxuLm1hcmtkb3duLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFuc3dlci1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2aWV3LWFuc3dlciB7XG4gIG1pbi1oZWlnaHQ6IDE2NXB4O1xufVxuXG4uY29tbWVudC1kaXNwbGF5LWNvbnRlbnRzIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-question',
                templateUrl: './view-question.component.html',
                styleUrls: ['./view-question.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/vote.service.ts":
/*!*************************************!*\
  !*** ./src/app/qna/vote.service.ts ***!
  \*************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);






class VoteService {
    constructor(http) {
        this.http = http;
    }
    sendVote(voteCode, postId, commentId) {
        this.getVoteUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/posts/${postId}/vote`;
        let voteParams; //Create new HttpParams
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(commentId)) {
            voteParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("voteId", voteCode).set("commentId", commentId);
        }
        else {
            voteParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("voteId", voteCode);
        }
        return this.http.get(this.getVoteUrl, {
            params: voteParams,
            observe: 'response',
            responseType: 'text'
        });
    }
}
VoteService.ɵfac = function VoteService_Factory(t) { return new (t || VoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VoteService, factory: VoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search-results/search-results.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/qna/question.service */ "./src/app/qna/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/question-list-view/question-list-view.component */ "./src/app/shared/question-list-view/question-list-view.component.ts");






function SearchResultsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SearchResultsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-question-list-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionList", ctx_r57.searchResultObj);
} }
function SearchResultsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No results found!! ", ctx_r58.errorMsg, "");
} }
class SearchResultsComponent {
    constructor(questionService, route) {
        this.questionService = questionService;
        this.route = route;
    }
    ngOnInit() {
        this.searchLoader = false;
        this.isError = false;
        this.route.queryParams.subscribe((params) => {
            if (params.hasOwnProperty('query')) {
                this.doSearch(params['query']);
            }
        });
    }
    doSearch(searchQuery) {
        if (searchQuery) {
            // encodeURIComponent(this.searchQuery.trim())
            this.searchLoader = true;
            this.questionService.searchQuestion(searchQuery).subscribe((questionObjArr) => {
                this.isError = false;
                this.searchResultObj = questionObjArr.body;
                console.log('this.searchResultObj: ', this.searchResultObj);
            }, (err) => {
                this.isError = true;
                this.errorMsg = err;
            });
            this.searchLoader = false;
        }
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 7, vars: 3, consts: [[1, "p-3"], [4, "ngIf"], [1, "spinner-loader"], [3, "questionList"], [1, "alert", "alert-warning"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchResultsComponent_ng_container_4_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchResultsComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchResultsComponent_ng_container_6_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchLoader && ctx.searchResultObj && !ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchLoader && ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_4__["QuestionListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-results',
                templateUrl: './search-results.component.html',
                styleUrls: ['./search-results.component.scss']
            }]
    }], function () { return [{ type: src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search/search-results/search-results.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CommonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMethod(url) {
        return this.httpClient.get(url);
    }
    getMethodWithQueryParam(url, param) {
        return this.httpClient.get(url, {
            params: param,
            observe: 'response'
        });
    }
    postMethod(url, requestBody) {
        return this.httpClient.post(url, requestBody).pipe();
    }
    postMethodWithOptions(url, requestBody, options) {
        return this.httpClient.post(url, requestBody, options);
    }
    putMethod(url, requestBody) {
        return this.httpClient.put(url, requestBody);
    }
    deleteMethod(url) {
        return this.httpClient.delete(url);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");




class SharedService {
    constructor() {
        this.currentQnaRequest = new _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["QnaRequest"]();
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentQnaRequest);
        this.currentQnaRequest$ = this.messageSource.asObservable();
    }
    setQnaRequest(qnaObj) {
        this.currentQnaRequest = new _utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["QnaRequest"]();
        this.currentQnaRequest.id = qnaObj.id;
        this.currentQnaRequest.questionId = qnaObj.questionId;
        this.currentQnaRequest.answerBody = qnaObj.answerBody;
        this.currentQnaRequest.questionBody = qnaObj.questionBody;
        this.currentQnaRequest.questionHeader = qnaObj.questionHeader;
        this.messageSource.next(this.currentQnaRequest);
    }
    getQnaRequest() {
        return this.currentQnaRequest;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/avatar/gravatar.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/avatar/gravatar.directive.ts ***!
  \*****************************************************/
/*! exports provided: GravatarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravatarDirective", function() { return GravatarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5 */ "./src/app/shared/avatar/md5.ts");



class GravatarDirective {
    constructor(el) {
        this.el = el;
        this.fallback = 'identicon'; // https://en.gravatar.com/site/implement/images/
    }
    ngOnInit() {
        if (this.el) {
            if (!this.avatarKey || !this.el.nativeElement) {
                return;
            }
            const emailHash = _md5__WEBPACK_IMPORTED_MODULE_1__["Md5"].hashStr(this.avatarKey.trim().toLowerCase());
            this.el.nativeElement.src =
                `//www.gravatar.com/avatar/${emailHash}?d=${this.fallback}`;
        }
    }
}
GravatarDirective.ɵfac = function GravatarDirective_Factory(t) { return new (t || GravatarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
GravatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GravatarDirective, selectors: [["", "appGravatar", ""]], inputs: { avatarKey: "avatarKey" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GravatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appGravatar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { avatarKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/avatar/md5.ts":
/*!**************************************!*\
  !*** ./src/app/shared/avatar/md5.ts ***!
  \**************************************/
/*! exports provided: Md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Md5", function() { return Md5; });
// @dynamic
class Md5 {
    constructor() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    static hashStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    }
    static hashAsciiStr(str, raw = false) {
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    }
    static _hex(x) {
        const hc = Md5.hexChars;
        const ho = Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    }
    static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }
    start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    }
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    }
    appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    }
    getState() {
        const self = this;
        const s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    }
    setState(state) {
        const buf = state.buffer;
        const x = state.state;
        const s = this._state;
        let i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    }
    end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        let dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            const lo = parseInt(matches[2], 16);
            const hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    }
}
// Private Static Variables
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
// Permanent instance is to use for one-call hashing
Md5.onePassHasher = new Md5();
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}


/***/ }),

/***/ "./src/app/shared/input-stars/BaseControlValueAccessor.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/input-stars/BaseControlValueAccessor.ts ***!
  \****************************************************************/
/*! exports provided: BaseControlValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseControlValueAccessor", function() { return BaseControlValueAccessor; });
class BaseControlValueAccessor {
    constructor() {
        this.disabled = false;
    }
    /**
     * Call when value has changed programmatically
     */
    onChange(newVal) { }
    onTouched(_) { }
    /**
     * Model -> View changes
     */
    writeValue(obj) { this.value = obj; } // called on initial value, or setValue/patchValue
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}


/***/ }),

/***/ "./src/app/shared/input-stars/input-stars.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/input-stars/input-stars.component.ts ***!
  \*************************************************************/
/*! exports provided: InputStarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputStarsComponent", function() { return InputStarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseControlValueAccessor */ "./src/app/shared/input-stars/BaseControlValueAccessor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function InputStarsComponent_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.label);
} }
function InputStarsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputStarsComponent_ng_container_2_Template__svg_svg_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const star_r63 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.setRating(star_r63); })("mouseover", function InputStarsComponent_ng_container_2_Template__svg_svg_mouseover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const i_r64 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.displayText = !ctx_r67.disabled && ctx_r67.messages ? ctx_r67.messages[i_r64] : undefined; })("mouseout", function InputStarsComponent_ng_container_2_Template__svg_svg_mouseout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.displayText = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InputStarsComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r61.displayText);
} }
function InputStarsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r62.ratingText);
} }
class InputStarsComponent extends _BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_2__["BaseControlValueAccessor"] {
    constructor(fb, eRef, renderer) {
        super();
        this.fb = fb;
        this.eRef = eRef;
        this.renderer = renderer;
        this.stars = [0, 1, 2, 3, 4]; // default is 5 stars
        this.value = null; // un-touched value should be null
    }
    writeValue(val) {
        this.value = val;
        super.writeValue(this.value);
    }
    setRating(rating) {
        if (this.disabled) {
            return;
        }
        // stars & messages arrays are 0 based
        let oldVal = rating;
        this.value = oldVal + 1;
        // set text to display (if it exists on the chosen star object)
        this.ratingText = this.messages[rating] ? this.messages[rating] : undefined;
        // set the value for the control
        this.onChange(this.value);
        this.onTouched();
        // SVG STAR & DOM STUFF
        const svgs = this.eRef.nativeElement.querySelectorAll('svg.star');
        for (let i = 0, j = svgs.length; i < j; i++) {
            if (i <= rating) {
                this.renderer.addClass(svgs[i], "active");
            }
            else {
                this.renderer.removeClass(svgs[i], "active");
            }
        }
    }
    // if there's a value on init we need to apply it to the stars programmatically
    // eRef has no DOM on init. We need to work with our view within AfterViewInit
    ngAfterViewInit() {
        if (this.value !== null) {
            let initialValue = this.value;
            this.setRating(--initialValue);
        }
    }
}
InputStarsComponent.ɵfac = function InputStarsComponent_Factory(t) { return new (t || InputStarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
InputStarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputStarsComponent, selectors: [["input-stars"]], inputs: { stars: "stars", messages: "messages", label: "label", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputStarsComponent),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["class", "star__label", 4, "ngIf"], [1, "stars"], [4, "ngFor", "ngForOf"], [1, "star__rating__info"], [4, "ngIf"], [1, "star__label"], ["width", "255", "height", "240", "viewBox", "0 0 51 48", 1, "star", 3, "click", "mouseover", "mouseout"], ["d", "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"]], template: function InputStarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputStarsComponent_h4_0_Template, 2, 1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputStarsComponent_ng_container_2_Template, 3, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputStarsComponent_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputStarsComponent_span_5_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayText && !ctx.ratingText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratingText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".stars[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n}\n\n.star__label[_ngcontent-%COMP%] {\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  margin: 0;\n}\n\n.star__rating__info[_ngcontent-%COMP%] {\n  -webkit-box-flex: 100%;\n          flex: 100%;\n  min-height: 30px;\n}\n\n.star[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: auto;\n  fill: white;\n  stroke: #ccc;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  -webkit-transition: -webkit-transform 200ms ease-in-out;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n}\n\n.star[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  -webkit-transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;\n  transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;\n}\n\n.active[_ngcontent-%COMP%] {\n  fill: #ffbb00;\n  stroke: #cc9600;\n}\n\n*[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL2lucHV0LXN0YXJzL2lucHV0LXN0YXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaW5wdXQtc3RhcnMvaW5wdXQtc3RhcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtVQUFBLGFBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO1VBQUEsYUFBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO1VBQUEsVUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSx1REFBQTtFQUFBLCtDQUFBO0VBQUEsdUNBQUE7RUFBQSw0RUFBQTtBQ0NGOztBREFFO0VBQ0Usb0VBQUE7RUFBQSw0REFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lucHV0LXN0YXJzL2lucHV0LXN0YXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJzIHtcbiAgZmxleDogMCAwIDUwJTtcbn1cbi5zdGFyX19sYWJlbCB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1hcmdpbjogMDtcbn1cbi5zdGFyX19yYXRpbmdfX2luZm8ge1xuICBmbGV4OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uc3RhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcblxuICBmaWxsOiB3aGl0ZTtcbiAgc3Ryb2tlOiAjY2NjO1xuXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBwYXRoIHtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCBzdHJva2UgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLmFjdGl2ZSB7XG4gIGZpbGw6ICNmZmJiMDA7XG4gIHN0cm9rZTogZGFya2VuKCNmZmJiMDAsIDEwJSk7XG59XG5cbi8vIERFTU8gUFVSUE9TRVNcbioge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuIiwiLnN0YXJzIHtcbiAgZmxleDogMCAwIDUwJTtcbn1cblxuLnN0YXJfX2xhYmVsIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3Rhcl9fcmF0aW5nX19pbmZvIHtcbiAgZmxleDogMTAwJTtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cblxuLnN0YXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZpbGw6IHdoaXRlO1xuICBzdHJva2U6ICNjY2M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnN0YXIgcGF0aCB7XG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHN0cm9rZSAxMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmFjdGl2ZSB7XG4gIGZpbGw6ICNmZmJiMDA7XG4gIHN0cm9rZTogI2NjOTYwMDtcbn1cblxuKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputStarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-stars',
                templateUrl: './input-stars.component.html',
                styleUrls: ['./input-stars.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputStarsComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { stars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.addClass(document.body, 'loader-body');
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'loader-body');
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 16, vars: 0, consts: [[1, "body"], [1, "base"], [1, "face"], [1, "longfazers"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Redirecting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);\nh1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-family: \"Open Sans\";\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  left: 50%;\n  top: 58%;\n  margin-left: -20px;\n}\n.body[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  margin-left: -50px;\n  left: 50%;\n  -webkit-animation: speeder 0.4s linear infinite;\n          animation: speeder 0.4s linear infinite;\n}\n.body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 35px;\n  background: #000;\n  position: absolute;\n  top: -19px;\n  left: 60px;\n  border-radius: 2px 10px 1px 0;\n}\n.base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 6px solid transparent;\n  border-right: 100px solid #000;\n  border-bottom: 6px solid transparent;\n}\n.base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 22px;\n  width: 22px;\n  border-radius: 50%;\n  background: #000;\n  position: absolute;\n  right: -110px;\n  top: -16px;\n}\n.base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 0 solid transparent;\n  border-right: 55px solid #000;\n  border-bottom: 16px solid transparent;\n  top: -16px;\n  right: -98px;\n}\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 12px;\n  width: 20px;\n  background: #000;\n  border-radius: 20px 20px 0 0;\n  -webkit-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n  right: -125px;\n  top: -15px;\n}\n.face[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  background: #000;\n  right: 4px;\n  top: 7px;\n  position: absolute;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  border-radius: 0 0 0 2px;\n}\n.body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(1), .body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2), .body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(3), .body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(4) {\n  width: 30px;\n  height: 1px;\n  background: #000;\n  position: absolute;\n  -webkit-animation: fazer1 0.2s linear infinite;\n          animation: fazer1 0.2s linear infinite;\n}\n.body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 3px;\n  -webkit-animation: fazer2 0.4s linear infinite;\n          animation: fazer2 0.4s linear infinite;\n}\n.body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 1px;\n  -webkit-animation: fazer3 0.4s linear infinite;\n          animation: fazer3 0.4s linear infinite;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(4) {\n  top: 4px;\n  -webkit-animation: fazer4 1s linear infinite;\n          animation: fazer4 1s linear infinite;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n@-webkit-keyframes fazer1 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -80px;\n    opacity: 0;\n  }\n}\n@keyframes fazer1 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -80px;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fazer2 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100px;\n    opacity: 0;\n  }\n}\n@keyframes fazer2 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100px;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fazer3 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -50px;\n    opacity: 0;\n  }\n}\n@keyframes fazer3 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -50px;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fazer4 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -150px;\n    opacity: 0;\n  }\n}\n@keyframes fazer4 {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -150px;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes speeder {\n  0% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -3px) rotate(-1deg);\n            transform: translate(-1px, -3px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-2px, 0px) rotate(1deg);\n            transform: translate(-2px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 3px) rotate(-1deg);\n            transform: translate(-1px, 3px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-1px, 1px) rotate(0deg);\n            transform: translate(-1px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-2px, -1px) rotate(1deg);\n            transform: translate(-2px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n@keyframes speeder {\n  0% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -3px) rotate(-1deg);\n            transform: translate(-1px, -3px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-2px, 0px) rotate(1deg);\n            transform: translate(-2px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 3px) rotate(-1deg);\n            transform: translate(-1px, 3px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-1px, 1px) rotate(0deg);\n            transform: translate(-1px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-2px, -1px) rotate(1deg);\n            transform: translate(-2px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n.longfazers[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.longfazers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 2px;\n  width: 20%;\n  background: #000;\n}\n.longfazers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 20%;\n  -webkit-animation: lf 0.6s linear infinite;\n          animation: lf 0.6s linear infinite;\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s;\n}\n.longfazers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 40%;\n  -webkit-animation: lf2 0.8s linear infinite;\n          animation: lf2 0.8s linear infinite;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n.longfazers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 60%;\n  -webkit-animation: lf3 0.6s linear infinite;\n          animation: lf3 0.6s linear infinite;\n}\n.longfazers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  top: 80%;\n  -webkit-animation: lf4 0.5s linear infinite;\n          animation: lf4 0.5s linear infinite;\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n}\n@-webkit-keyframes lf {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -200%;\n    opacity: 0;\n  }\n}\n@keyframes lf {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -200%;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes lf2 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -200%;\n    opacity: 0;\n  }\n}\n@keyframes lf2 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -200%;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes lf3 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -100%;\n    opacity: 0;\n  }\n}\n@keyframes lf3 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -100%;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes lf4 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -100%;\n    opacity: 0;\n  }\n}\n@keyframes lf4 {\n  0% {\n    left: 200%;\n  }\n  100% {\n    left: -100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtFQUFBO0FBRVI7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNBRjtBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0FKO0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRk47QURLSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNITjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNMRjtBRE9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtBQ0xKO0FEU0E7Ozs7RUFJRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTkY7QURTQTtFQUNFLFFBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDTkY7QURTQTtFQUNFLFFBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ05GO0FEU0E7RUFDRSxRQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNORjtBRFNBO0VBQ0U7SUFDRSxPQUFBO0VDTkY7RURRQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDTkY7QUFDRjtBRERBO0VBQ0U7SUFDRSxPQUFBO0VDTkY7RURRQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDTkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxPQUFBO0VDUEY7RURTQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDUEY7QUFDRjtBREFBO0VBQ0U7SUFDRSxPQUFBO0VDUEY7RURTQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSxPQUFBO0VDUkY7RURVQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDUkY7QUFDRjtBRENBO0VBQ0U7SUFDRSxPQUFBO0VDUkY7RURVQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDUkY7QUFDRjtBRFdBO0VBQ0U7SUFDRSxPQUFBO0VDVEY7RURXQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjtBREVBO0VBQ0U7SUFDRSxPQUFBO0VDVEY7RURXQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjtBRFlBO0VBQ0U7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLHNEQUFBO1lBQUEsOENBQUE7RUNWRjtFRFlBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNWRjtFRFlBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDVkY7RURZQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNWRjtFRFlBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUNWRjtBQUNGO0FEdkJBO0VBQ0U7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLHNEQUFBO1lBQUEsOENBQUE7RUNWRjtFRFlBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNWRjtFRFlBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDVkY7RURZQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNWRjtFRFlBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFQ1ZGO0VEWUE7SUFDRSxtREFBQTtZQUFBLDJDQUFBO0VDVkY7RURZQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEY7QURhRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEYUk7RUFDRSxRQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNYTjtBRGNJO0VBQ0UsUUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDWk47QURlSTtFQUNFLFFBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDYk47QURnQkk7RUFDRSxRQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNkTjtBRG1CQTtFQUNFO0lBQ0UsVUFBQTtFQ2hCRjtFRGtCQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDaEJGO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsVUFBQTtFQ2hCRjtFRGtCQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDaEJGO0FBQ0Y7QURrQkE7RUFDRTtJQUNFLFVBQUE7RUNoQkY7RURrQkE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQ2hCRjtBQUNGO0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNoQkY7RURrQkE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQ2hCRjtBQUNGO0FEa0JBO0VBQ0U7SUFDRSxVQUFBO0VDaEJGO0VEa0JBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUNoQkY7QUFDRjtBRFNBO0VBQ0U7SUFDRSxVQUFBO0VDaEJGO0VEa0JBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUNoQkY7QUFDRjtBRGtCQTtFQUNFO0lBQ0UsVUFBQTtFQ2hCRjtFRGtCQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDaEJGO0FBQ0Y7QURTQTtFQUNFO0lBQ0UsVUFBQTtFQ2hCRjtFRGtCQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VDaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwKTtcblxuaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTglO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICBsZWZ0OiA1MCU7XG4gIGFuaW1hdGlvbjogc3BlZWRlciAuNHMgbGluZWFyIGluZmluaXRlO1xuXG4gID4gc3BhbiB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTlweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAxMHB4IDFweCAwO1xuICB9XG59XG5cbi5iYXNlIHtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMDBweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTExMHB4O1xuICAgICAgdG9wOiAtMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci10b3A6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDU1cHggc29saWQgIzAwMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0b3A6IC0xNnB4O1xuICAgICAgcmlnaHQ6IC05OHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZmFjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcbiAgcmlnaHQ6IC0xMjVweDtcbiAgdG9wOiAtMTVweDtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgdG9wOiA3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDJweDtcbiAgfVxufVxuXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCgxKSxcbi5ib2R5ID4gc3BhbiA+IHNwYW46bnRoLWNoaWxkKDIpLFxuLmJvZHkgPiBzcGFuID4gc3BhbjpudGgtY2hpbGQoMyksXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IGZhemVyMSAuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogM3B4O1xuICBhbmltYXRpb246IGZhemVyMiAuNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogMXB4O1xuICBhbmltYXRpb246IGZhemVyMyAuNHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuLmJvZHkgPiBzcGFuID4gc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDRweDtcbiAgYW5pbWF0aW9uOiBmYXplcjQgMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuQGtleWZyYW1lcyBmYXplcjEge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtODBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmF6ZXIyIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTEwMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYXplcjMge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmF6ZXI0IHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTE1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGVlZGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtM3B4KSByb3RhdGUoLTFkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMHB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAzcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbn1cblxuLmxvbmdmYXplcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgIHRvcDogMjAlO1xuICAgICAgYW5pbWF0aW9uOiBsZiAuNnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgdG9wOiA0MCU7XG4gICAgICBhbmltYXRpb246IGxmMiAuOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgdG9wOiA2MCU7XG4gICAgICBhbmltYXRpb246IGxmMyAuNnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgIHRvcDogODAlO1xuICAgICAgYW5pbWF0aW9uOiBsZjQgLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTNzO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxmIHtcbiAgMCUge1xuICAgIGxlZnQ6IDIwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTIwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsZjIge1xuICAwJSB7XG4gICAgbGVmdDogMjAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMjAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxmMyB7XG4gIDAlIHtcbiAgICBsZWZ0OiAyMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGY0IHtcbiAgMCUge1xuICAgIGxlZnQ6IDIwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDApO1xuaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1OCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLmJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGVlZGVyIDAuNHMgbGluZWFyIGluZmluaXRlO1xufVxuLmJvZHkgPiBzcGFuIHtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE5cHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAxMHB4IDFweCAwO1xufVxuXG4uYmFzZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTAwcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJhc2Ugc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMTBweDtcbiAgdG9wOiAtMTZweDtcbn1cbi5iYXNlIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNTVweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0b3A6IC0xNnB4O1xuICByaWdodDogLTk4cHg7XG59XG5cbi5mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICByaWdodDogLTEyNXB4O1xuICB0b3A6IC0xNXB4O1xufVxuLmZhY2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICByaWdodDogNHB4O1xuICB0b3A6IDdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDJweDtcbn1cblxuLmJvZHkgPiBzcGFuID4gc3BhbjpudGgtY2hpbGQoMSksXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCgyKSxcbi5ib2R5ID4gc3BhbiA+IHNwYW46bnRoLWNoaWxkKDMpLFxuLmJvZHkgPiBzcGFuID4gc3BhbjpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBmYXplcjEgMC4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5ib2R5ID4gc3BhbiA+IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgdG9wOiAzcHg7XG4gIGFuaW1hdGlvbjogZmF6ZXIyIDAuNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYm9keSA+IHNwYW4gPiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogMXB4O1xuICBhbmltYXRpb246IGZhemVyMyAwLjRzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbi5ib2R5ID4gc3BhbiA+IHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiA0cHg7XG4gIGFuaW1hdGlvbjogZmF6ZXI0IDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkBrZXlmcmFtZXMgZmF6ZXIxIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTgwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYXplcjIge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMTAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYXplcjMge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhemVyNCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC0xNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwZWVkZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0zcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDNweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxufVxuLmxvbmdmYXplcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9uZ2ZhemVycyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5sb25nZmF6ZXJzIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAyMCU7XG4gIGFuaW1hdGlvbjogbGYgMC42cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xufVxuLmxvbmdmYXplcnMgc3BhbjpudGgtY2hpbGQoMikge1xuICB0b3A6IDQwJTtcbiAgYW5pbWF0aW9uOiBsZjIgMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuLmxvbmdmYXplcnMgc3BhbjpudGgtY2hpbGQoMykge1xuICB0b3A6IDYwJTtcbiAgYW5pbWF0aW9uOiBsZjMgMC42cyBsaW5lYXIgaW5maW5pdGU7XG59XG4ubG9uZ2ZhemVycyBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogODAlO1xuICBhbmltYXRpb246IGxmNCAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XG59XG5cbkBrZXlmcmFtZXMgbGYge1xuICAwJSB7XG4gICAgbGVmdDogMjAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMjAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxmMiB7XG4gIDAlIHtcbiAgICBsZWZ0OiAyMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC0yMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGYzIHtcbiAgMCUge1xuICAgIGxlZnQ6IDIwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsZjQge1xuICAwJSB7XG4gICAgbGVmdDogMjAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar/gravatar.directive */ "./src/app/shared/avatar/gravatar.directive.ts");







function NavbarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_28_Template_a_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarKey", ctx_r71.currentUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r71.currentUser.firstName, " ", ctx_r71.currentUser.lastName, "");
} }
class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.status = false;
    }
    ngOnInit() {
        this.authService.currentUser$.subscribe((user) => {
            this.currentUser = user;
        }),
            (err) => {
                console.error(err);
            };
    }
    onSearch() {
        this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
    logout() {
        this.authService.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "nav-bg-color"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/questions/ask", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contribute", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/feedback", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar-nav"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "name", "search-box", "id", "search-box", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngClass", "ngModelChange", "keyup.enter", "blur", "click"], ["type", "submit", 1, "btn", "btn-hollow-color-yellow", "my-2", "my-sm-0", 3, "click"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], [1, "pl-2"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-circle", "mr-sm-2", "p-0", "m-0"], ["appGravatar", "", 1, "navbar-avatar", 3, "avatarKey"], [1, "dropdown-menu", "dropdown-menu-right", "mr-4"], ["type", "button", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "devnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ask a Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_23_listener($event) { return ctx.searchQuery = $event; })("keyup.enter", function NavbarComponent_Template_input_keyup_enter_23_listener($event) { return ctx.onSearch(); })("blur", function NavbarComponent_Template_input_blur_23_listener($event) { return ctx.status = false; })("click", function NavbarComponent_Template_input_click_23_listener($event) { return ctx.status = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_24_listener($event) { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_li_27_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_li_28_Template, 13, 3, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery)("ngClass", ctx.status ? "search-expand" : "search-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__["GravatarDirective"]], styles: [".nav-bg-color[_ngcontent-%COMP%] {\n  background-color: #101357c4;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n\n.search-expand[_ngcontent-%COMP%] {\n  width: 600px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.search-collapse[_ngcontent-%COMP%] {\n  width: 200px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.navbar-avatar[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  border-radius: 50%;\n  height: 36px;\n  width: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC91dGlsaXRpZXMvc2hhcmVkX3ZhcmlhYmxlcy5zY3NzXCI7XG4ubmF2LWJnLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMzU3YzQ7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5zZWFyY2gtZXhwYW5kIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNlYXJjaC1jb2xsYXBzZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXZiYXItYXZhdGFyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiAzNnB4O1xufSIsIi5uYXYtYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMzU3YzQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4uc2VhcmNoLWV4cGFuZCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2gtY29sbGFwc2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2YmFyLWF2YXRhciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDM2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/qna-editor/qna-editor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/qna-editor/qna-editor.component.ts ***!
  \***********************************************************/
/*! exports provided: QnaEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaEditorComponent", function() { return QnaEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utilities/constants/app.constants */ "./src/app/utilities/constants/app.constants.ts");
/* harmony import */ var src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/qna/question.service */ "./src/app/qna/question.service.ts");
/* harmony import */ var src_app_qna_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/qna/answer.service */ "./src/app/qna/answer.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");










function QnaEditorComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QnaEditorComponent_div_13_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.questionHeader = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r74.questionHeader);
} }
function QnaEditorComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "As you type, you can see the preview here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QnaEditorComponent_h3_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r76.questionHeader, " ");
} }
function QnaEditorComponent_markdown_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "markdown", 25);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r77.markdown);
} }
function QnaEditorComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r78.errMsg);
} }
function QnaEditorComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
} }
class QnaEditorComponent {
    constructor(questionService, answerService, sharedService, router) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.sharedService = sharedService;
        this.router = router;
        this.isEditorModeUpdate = false;
        this.isEditorTypeQuestion = true;
        this.questionHeader = '';
        this.loader = false;
        this.editorTypeEnum = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"];
        this.editorModeEnum = src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorMode"];
    }
    ngOnInit() {
        this.sharedService.currentQnaRequest$.subscribe(message => {
            this.qnaRequest = message;
            console.log("Recieved qnaObj: ", this.qnaRequest);
        });
        this.isEditorModeUpdate = this.editorMode === src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorMode"].UPDATE ? true : false;
        this.isEditorTypeQuestion = this.editorType === src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["EditorType"].QUESTION ? true : false;
        if (this.isEditorModeUpdate && (!this.qnaRequest || (Object.keys(this.qnaRequest).length === 0))) {
            this.router.navigate(['/questions/ask']);
        }
        if (this.isEditorTypeQuestion) {
            this.qnaBody = this.qnaRequest.questionBody;
            this.questionHeader = this.qnaRequest.questionHeader;
        }
        else {
            this.qnaBody = this.qnaRequest.answerBody;
        }
        this.markdown = this.qnaBody;
    }
    isSubmitDisabled() {
        if (this.isEditorTypeQuestion) {
            return !this.questionHeader || this.loader;
        }
        else {
            return !this.markdown || this.loader;
        }
    }
    submitClicked(questionHeader, qnaBody) {
        if (this.isEditorTypeQuestion) {
            this.submitQuestion(questionHeader, qnaBody);
        }
        else {
            this.submitAnswer(qnaBody);
        }
    }
    // submitAnswerClicked(questionId: string) {
    //   if (this.answerData.length >= this.charLimits.MIN_CHAR_LIMIT_ANSWER
    //     && this.answerData.length <= this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
    //     this.isAnsError = false;
    //     const answerBody: string = this.answerData;
    //     this.answerService.addAnswer({ answerBody }, questionId).subscribe((answerRes: Post) => {
    //       console.log('added ans response -> ', answerRes);
    //       if (answerRes) {
    //         window.location.reload();
    //       }
    //     });
    //   } else if (this.answerData.length > this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
    //     this.isAnsError = true;
    //     this.errMsg = 'Answer is too big !!!';
    //   } else if (this.answerData.length < this.charLimits.MIN_CHAR_LIMIT_ANSWER) {
    //     this.isAnsError = true;
    //     this.errMsg = 'Answer is too short !!!';
    //   }
    // }
    submitAnswer(answerBody) {
        if (answerBody.length >= src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["CharLimits"].MIN_CHAR_LIMIT_ANSWER
            && answerBody.length <= src_app_utilities_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["CharLimits"].MAX_CHAR_LIMIT_ANSWER) {
            this.loader = true;
            this.isQueError = false;
            this.errMsg = 'Submitting..';
            if (this.isEditorModeUpdate) {
                // UPDATE ANSWER MODE
                const currentAnswerId = this.qnaRequest.id;
                this.answerService.editAnswer({ answerBody }, currentAnswerId).subscribe((answerRes) => {
                    console.log('added ans response -> ', answerRes);
                    if (answerRes) {
                        window.location.reload();
                    }
                });
            }
            else {
                // ADD ANSWER MODE
                const answerForQuestionId = this.qnaRequest.questionId;
                this.answerService.addAnswer({ answerBody }, answerForQuestionId).subscribe((answerRes) => {
                    console.log('added ans response -> ', answerRes);
                    if (answerRes) {
                        window.location.reload();
                    }
                });
            }
        }
        else {
            this.loader = false;
            this.isQueError = true;
            this.errMsg = 'Content not enough, please add more.';
        }
    }
    submitQuestion(questionHeader, questionBody) {
        if (questionBody.length >= 100
            && questionBody.length <= 5000
            && questionHeader.length <= 130
        // && !questionBody.trim()
        // && !questionHeader.trim()
        ) {
            this.loader = true;
            this.isQueError = false;
            this.errMsg = 'Submitting..';
            if (this.isEditorModeUpdate) {
                // UPDATE QUESTION MODE
                this.questionService.editQuestion(this.qnaRequest.id, { questionHeader, questionBody }).subscribe((questionRes) => {
                    console.log(questionRes);
                    alert('Updated!!');
                    this.loader = false;
                    window.location.href = '/questions/' + questionRes.id + '/updated';
                });
            }
            else {
                // ADD QUESTION MODE
                this.questionService.addQuestion({ questionHeader, questionBody }).subscribe((questionRes) => {
                    console.log(questionRes);
                    alert('submitted!!');
                    this.loader = false;
                    window.location.href = '/questions/' + questionRes.id + '/new';
                });
            }
        }
        else {
            this.loader = false;
            this.isQueError = true;
            this.errMsg = 'Content not enough, please add more.';
        }
    }
    isConditionSatisfied() {
        if (this.isEditorTypeQuestion) {
            return this.questionHeader && this.markdown;
        }
        else {
            return this.markdown;
        }
    }
}
QnaEditorComponent.ɵfac = function QnaEditorComponent_Factory(t) { return new (t || QnaEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_qna_answer_service__WEBPACK_IMPORTED_MODULE_3__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
QnaEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QnaEditorComponent, selectors: [["app-qna-editor"]], inputs: { qnaRequest: "qnaRequest", editorMode: "editorMode", editorType: "editorType" }, decls: 30, vars: 9, consts: [[1, "form-group", "answer-body"], [1, "pull-right", "pr-1"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-edit-tab", "data-toggle", "tab", "href", "#nav-edit", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "active"], ["id", "nav-preview-tab", "data-toggle", "tab", "href", "#nav-preview", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-item", "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-edit", "role", "tabpanel", "aria-labelledby", "nav-edit-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card"], ["class", "card-header form-group", 4, "ngIf"], [1, "card-body", "form-group"], ["name", "qnaBody", "rows", "4", "placeholder", "Type here! (you can include code)", 1, "form-control", "variable-textarea", 3, "ngModel", "ngModelChange"], ["id", "nav-preview", "role", "tabpanel", "aria-labelledby", "nav-preview-tab", 1, "tab-pane", "fade"], [1, "card-header"], [1, "card-body", "word-warp"], ["class", "text-muted", 4, "ngIf"], [4, "ngIf"], ["class", "variable-binding", 3, "data", 4, "ngIf"], [1, "mr-2", "pull-left"], ["type", "submit", 1, "btn", "btn-color-green", "my-2", "my-sm-0", 3, "disabled", "click"], ["class", "alert alert-danger dn-alert-danger", 4, "ngIf"], ["class", "spinner-loader", 4, "ngIf"], [1, "card-header", "form-group"], ["for", "questionHeader"], ["type", "text", "name", "questionHeader", "aria-describedby", "qustionTitle", "placeholder", "Enter Title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-muted"], [1, "variable-binding", 3, "data"], [1, "alert", "alert-danger", "dn-alert-danger"], [1, "spinner-loader"]], template: function QnaEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QnaEditorComponent_div_13_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QnaEditorComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.markdown = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QnaEditorComponent_p_22_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QnaEditorComponent_h3_23_Template, 3, 1, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QnaEditorComponent_markdown_24_Template, 1, 1, "markdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaEditorComponent_Template_button_click_26_listener($event) { return ctx.submitClicked(ctx.questionHeader, ctx.markdown); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QnaEditorComponent_div_28_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, QnaEditorComponent_div_29_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Write your ", ctx.editorType, " here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editorType === ctx.editorTypeEnum.QUESTION);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.markdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConditionSatisfied());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditorTypeQuestion && ctx.isConditionSatisfied());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConditionSatisfied());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSubmitDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isQueError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownComponent"]], styles: [".word-warp[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.variable-textarea[_ngcontent-%COMP%] {\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL3FuYS1lZGl0b3IvcW5hLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3FuYS1lZGl0b3IvcW5hLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzRUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcW5hLWVkaXRvci9xbmEtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmQtd2FycCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi52YXJpYWJsZS10ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuIiwiLndvcmQtd2FycCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi52YXJpYWJsZS10ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qna-editor',
                templateUrl: './qna-editor.component.html',
                styleUrls: ['./qna-editor.component.scss']
            }]
    }], function () { return [{ type: src_app_qna_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] }, { type: src_app_qna_answer_service__WEBPACK_IMPORTED_MODULE_3__["AnswerService"] }, { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { qnaRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editorMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editorType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/question-list-view/question-list-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/question-list-view/question-list-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuestionListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListViewComponent", function() { return QuestionListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function QuestionListViewComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Answers Yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function QuestionListViewComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const questionObj_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questionObj_r83.noOfAnswers, " Answers ");
} }
function QuestionListViewComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestionListViewComponent_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionListViewComponent_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const questionObj_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questionObj_r83.vote.upVotes - questionObj_r83.vote.downVotes, " Votes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !questionObj_r83.noOfAnswers || questionObj_r83.noOfAnswers == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", questionObj_r83.noOfAnswers > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/questions/", questionObj_r83.id, "/", questionObj_r83.questionHeader, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questionObj_r83.questionHeader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questionObj_r83.questionBody.length > 250 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 10, questionObj_r83.questionBody, 0, 250) + "\u2026" : questionObj_r83.questionBody, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - Posted at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, questionObj_r83.postedAt), " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/users/", questionObj_r83.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questionObj_r83.username, " ");
} }
class QuestionListViewComponent {
    constructor() {
    }
    ngOnInit() {
        console.log('questionList: ', this.questionList);
        this.questionList.forEach(questionObj => {
            questionObj.questionBody = questionObj.questionBody.replace(/[^a-zA-Z ?.:,]/g, '');
        });
    }
}
QuestionListViewComponent.ɵfac = function QuestionListViewComponent_Factory(t) { return new (t || QuestionListViewComponent)(); };
QuestionListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionListViewComponent, selectors: [["app-question-list-view"]], inputs: { questionList: "questionList" }, decls: 2, vars: 1, consts: [[1, "col"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "badge", "badge-vote-count", "p-2", "mr-1", "mb-2"], [1, "badge", "badge-answers-count", "p-2", "ml-1", "mb-2"], [4, "ngIf"], [1, "question-header"], [3, "routerLink"], [1, "question-body"], [2, "text-align", "right"]], template: function QuestionListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionListViewComponent_ng_container_1_Template, 21, 16, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".badge-vote-count[_ngcontent-%COMP%] {\n  background-color: #fbaf0760;\n}\n\n.badge-answers-count[_ngcontent-%COMP%] {\n  background-color: #12b97960;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWxpc3Qtdmlldy9xdWVzdGlvbi1saXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9jb2Rlc3BhY2Uvd29ya3NwYWNlL2Rldm5ldEFwcC9zcmMvYXBwL3V0aWxpdGllcy9zaGFyZWRfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1saXN0LXZpZXcvcXVlc3Rpb24tbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksMkJDRmE7QUNGakI7O0FGT0E7RUFDSSwyQkNKWTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1saXN0LXZpZXcvcXVlc3Rpb24tbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3V0aWxpdGllcy9zaGFyZWRfdmFyaWFibGVzLnNjc3NcIjtcblxuLmJhZGdlIHtcbn1cblxuLmJhZGdlLXZvdGUtY291bnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkbi15ZWxsb3ctZmFkZTtcbn1cblxuLmJhZGdlLWFuc3dlcnMtY291bnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkbi1ncmVlbi1mYWRlO1xufSIsIiRkbi1kYXJrLWJsdWU6ICMxMDEzNTc7XG4kZG4tZGFyay1ibHVlLTc1OiAjMTAxMzU3YzQ7XG4kZG4tbGlnaHQtYmx1ZTogIzAwYTBhMDtcbiRkbi15ZWxsb3c6ICNmYmFmMDc7XG4kZG4teWVsbG93LWZhZGU6ICNmYmFmMDc2MDtcbiRkbi1ncmVlbjogIzAwN2Y0ZjtcbiRkbi1ncmVlbi1mYWRlOiAjMTJiOTc5NjA7XG4kZG4tcGluazogI2ZkYTQ5ZjsiLCIuYmFkZ2Utdm90ZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmFmMDc2MDtcbn1cblxuLmJhZGdlLWFuc3dlcnMtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJiOTc5NjA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-list-view',
                templateUrl: './question-list-view.component.html',
                styleUrls: ['./question-list-view.component.scss']
            }]
    }], function () { return []; }, { questionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar/gravatar.directive */ "./src/app/shared/avatar/gravatar.directive.ts");
/* harmony import */ var _input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-stars/input-stars.component */ "./src/app/shared/input-stars/input-stars.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qna-editor/qna-editor.component */ "./src/app/shared/qna-editor/qna-editor.component.ts");
/* harmony import */ var _question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question-list-view/question-list-view.component */ "./src/app/shared/question-list-view/question-list-view.component.ts");
/* harmony import */ var _vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vote-badge/vote-badge.component */ "./src/app/shared/vote-badge/vote-badge.component.ts");














class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_11__["VoteBadgeComponent"],
        _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__["GravatarDirective"],
        _question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListViewComponent"],
        _qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_9__["QnaEditorComponent"],
        _input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_6__["InputStarsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]], exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_11__["VoteBadgeComponent"],
        _question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListViewComponent"],
        _qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_9__["QnaEditorComponent"],
        _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__["GravatarDirective"],
        _input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_6__["InputStarsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_11__["VoteBadgeComponent"],
                    _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__["GravatarDirective"],
                    _question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListViewComponent"],
                    _qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_9__["QnaEditorComponent"],
                    _input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_6__["InputStarsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(),
                ],
                exports: [
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _vote_badge_vote_badge_component__WEBPACK_IMPORTED_MODULE_11__["VoteBadgeComponent"],
                    _question_list_view_question_list_view_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListViewComponent"],
                    _qna_editor_qna_editor_component__WEBPACK_IMPORTED_MODULE_9__["QnaEditorComponent"],
                    _avatar_gravatar_directive__WEBPACK_IMPORTED_MODULE_5__["GravatarDirective"],
                    _input_stars_input_stars_component__WEBPACK_IMPORTED_MODULE_6__["InputStarsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/vote-badge/vote-badge.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/vote-badge/vote-badge.component.ts ***!
  \***********************************************************/
/*! exports provided: VoteBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteBadgeComponent", function() { return VoteBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_qna_vote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/qna/vote.service */ "./src/app/qna/vote.service.ts");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0, a1, a2) { return { "alert-dark": a0, "alert-success voter-upvoted": a1, "alert-danger voter-downvoted": a2 }; };
function VoteBadgeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteBadgeComponent_ng_container_0_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.upvoteClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteBadgeComponent_ng_container_0_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.downvoteClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r87.vote == "default", ctx_r87.vote == "upvote", ctx_r87.vote == "downvote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r87.totalVoteCount);
} }
function VoteBadgeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoteBadgeComponent_ng_container_1_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.upvoteClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r88.vote == "default", ctx_r88.vote == "upvote", ctx_r88.vote == "downvote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r88.totalVoteCount);
} }
class VoteBadgeComponent {
    constructor(voteService, authService) {
        this.voteService = voteService;
        this.authService = authService;
        this.isComment = false;
        this.voteIdToTypeMap = ["default", "downvote", "upvote"];
        this.vote = 'default';
    }
    ngOnInit() {
        this.totalVoteCount = this.currentUpvotes - this.currentDownvotes;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.commentId)) {
            this.isComment = true;
        }
        this.setInteractedVotes();
    }
    setInteractedVotes() {
        let currentUsername = this.getCurrentUser(); //take it to common shared component
        let currentVoteId = +this.usersInteracted[currentUsername];
        if (!isNaN(currentVoteId)) {
            this.vote = this.voteIdToTypeMap[currentVoteId];
        }
    }
    getCurrentUser() {
        this.currentUserSubj = this.authService.currentUser;
        return this.currentUserSubj.value.username;
    }
    upvoteClicked() {
        if (this.vote == 'upvote') { //Un-Doing Upvote
            this.vote = 'default';
            this.totalVoteCount -= 1;
            this.sendVoteToService("0");
        }
        else if (this.vote == 'downvote') {
            this.vote = 'upvote';
            this.totalVoteCount += 2;
            //upvote Request
            this.sendVoteToService("2");
        }
        else {
            this.vote = 'upvote';
            this.totalVoteCount += 1;
            //upvote Request
            this.sendVoteToService("2");
        }
    }
    downvoteClicked() {
        if (this.vote == 'downvote') {
            this.vote = 'default';
            this.totalVoteCount += 1;
            this.sendVoteToService("0");
        }
        else if (this.vote == 'upvote') {
            this.vote = 'downvote';
            this.totalVoteCount -= 2;
            //downvote Request
            this.sendVoteToService("1");
        }
        else {
            this.vote = 'downvote';
            this.totalVoteCount -= 1;
            //downvote Request
            this.sendVoteToService("1");
        }
    }
    sendVoteToService(voteId) {
        this.voteService.sendVote(voteId, this.postId, this.commentId).subscribe(voteResp => {
            console.log(voteResp);
        });
    }
}
VoteBadgeComponent.ɵfac = function VoteBadgeComponent_Factory(t) { return new (t || VoteBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_qna_vote_service__WEBPACK_IMPORTED_MODULE_2__["VoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
VoteBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoteBadgeComponent, selectors: [["app-vote-badge"]], inputs: { currentUpvotes: "currentUpvotes", currentDownvotes: "currentDownvotes", currentVoteStatus: "currentVoteStatus", postId: "postId", commentId: "commentId", usersInteracted: "usersInteracted" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "col", "m-0", "p-0", 2, "height", "fit-content", "text-align", "center", "width", "min-content", "min-width", "45px"], [1, "alert", "p-0", "border", 3, "ngClass"], [1, "px-2", "py-0"], [1, "vote-btn", 3, "click"], [1, "fas", "fa-caret-up", "vote-icon"], [1, "py-0", "my-0"], [1, "fas", "fa-caret-down", "vote-icon"], [1, "col", "m-0", "p-0", 2, "height", "fit-content", "text-align", "center", "width", "min-content", "min-width", "16px"], [1, "alert", "px-2", "py-0", "my-2", "border", 3, "ngClass"], [1, "p-0"], [1, "vote-btn", "pull-left", 3, "click"], [1, "fas", "fa-caret-up", "vote-icon-comment"]], template: function VoteBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoteBadgeComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoteBadgeComponent_ng_container_1_Template, 8, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isComment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".vote-btn[_ngcontent-%COMP%] {\n  color: inherit;\n  cursor: pointer;\n}\n\n.pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.vote-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  -webkit-transition: font-size 0.2s ease;\n  transition: font-size 0.2s ease;\n}\n\n.vote-icon[_ngcontent-%COMP%]:hover {\n  font-size: 2.2rem;\n  -webkit-transition: font-size 0.2s ease;\n  transition: font-size 0.2s ease;\n}\n\n.vote-icon-comment[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  -webkit-transition: font-size 0.2s ease;\n  transition: font-size 0.2s ease;\n}\n\n.vote-icon-comment[_ngcontent-%COMP%]:hover {\n  font-size: 1rem;\n  -webkit-transition: font-size 0.2s ease;\n  transition: font-size 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVzcGFjZS93b3Jrc3BhY2UvZGV2bmV0QXBwL3NyYy9hcHAvc2hhcmVkL3ZvdGUtYmFkZ2Uvdm90ZS1iYWRnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3ZvdGUtYmFkZ2Uvdm90ZS1iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsdUNBQUE7RUFBQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdm90ZS1iYWRnZS92b3RlLWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvdGUtYnRuIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wdWxsLWxlZnQge1xuICAgIGZsb2F0OmxlZnQ7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi52b3RlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycyBlYXNlO1xufVxuXG4udm90ZS1pY29uOmhvdmVye1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzIGVhc2U7XG59XG5cbi52b3RlLWljb24tY29tbWVudCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMnMgZWFzZTtcbn1cblxuLnZvdGUtaWNvbi1jb21tZW50OmhvdmVye1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycyBlYXNlO1xufVxuXG4iLCIudm90ZS1idG4ge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udm90ZS1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycyBlYXNlO1xufVxuXG4udm90ZS1pY29uOmhvdmVyIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzIGVhc2U7XG59XG5cbi52b3RlLWljb24tY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycyBlYXNlO1xufVxuXG4udm90ZS1pY29uLWNvbW1lbnQ6aG92ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzIGVhc2U7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoteBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vote-badge',
                templateUrl: './vote-badge.component.html',
                styleUrls: ['./vote-badge.component.scss']
            }]
    }], function () { return [{ type: src_app_qna_vote_service__WEBPACK_IMPORTED_MODULE_2__["VoteService"] }, { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { currentUpvotes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentDownvotes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentVoteStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], commentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usersInteracted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/utilities/constants/app.constants.ts":
/*!******************************************************!*\
  !*** ./src/app/utilities/constants/app.constants.ts ***!
  \******************************************************/
/*! exports provided: CharLimits, ResponseTypes, User, Comment, Vote, QnaRequest, Post, QuestionWithAnswers, EditorMode, EditorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharLimits", function() { return CharLimits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTypes", function() { return ResponseTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaRequest", function() { return QnaRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionWithAnswers", function() { return QuestionWithAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorMode", function() { return EditorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorType", function() { return EditorType; });
var CharLimits;
(function (CharLimits) {
    CharLimits[CharLimits["MIN_CHAR_LIMIT_COMMENT"] = 10] = "MIN_CHAR_LIMIT_COMMENT";
    CharLimits[CharLimits["MAX_CHAR_LIMIT_COMMENT"] = 300] = "MAX_CHAR_LIMIT_COMMENT";
    CharLimits[CharLimits["MIN_CHAR_LIMIT_ANSWER"] = 50] = "MIN_CHAR_LIMIT_ANSWER";
    CharLimits[CharLimits["MAX_CHAR_LIMIT_ANSWER"] = 80000] = "MAX_CHAR_LIMIT_ANSWER";
})(CharLimits || (CharLimits = {}));
class ResponseTypes {
}
ResponseTypes.SUCCESS = 'SUCCESS';
ResponseTypes.FAILED = 'FAILED';
class User {
}
class Comment {
}
class Vote {
}
class QnaRequest {
}
class Post {
}
class QuestionWithAnswers {
}
var EditorMode;
(function (EditorMode) {
    EditorMode["UPDATE"] = "UPDATE";
    EditorMode["ADD"] = "ADD";
})(EditorMode || (EditorMode = {}));
var EditorType;
(function (EditorType) {
    EditorType["ANSWER"] = "Answer";
    EditorType["QUESTION"] = "Question";
})(EditorType || (EditorType = {}));


/***/ }),

/***/ "./src/app/utilities/constants/feedback.constants.ts":
/*!***********************************************************!*\
  !*** ./src/app/utilities/constants/feedback.constants.ts ***!
  \***********************************************************/
/*! exports provided: FORM_URL, FB_TEXT_PARAM, FB_RATE_PARAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_URL", function() { return FORM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_TEXT_PARAM", function() { return FB_TEXT_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_RATE_PARAM", function() { return FB_RATE_PARAM; });
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeZAJANt-e-TDj-d8p5SUokl9Vb5zeoXKGBHOlkw-JRl2P6pw/formResponse';
const FB_TEXT_PARAM = 'entry.265712092';
const FB_RATE_PARAM = 'entry.832823617';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'http://localhost:8080'
    apiUrl: 'https://devnet-pp.herokuapp.com/v1',
    authUrl: 'https://devnet-pp.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codespace/workspace/devnetApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map