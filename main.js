(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _blink_blink_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blink/blink.component */ "./src/app/blink/blink.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fresher/fresher.component */ "./src/app/fresher/fresher.component.ts");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canhead/canhead.component */ "./src/app/canhead/canhead.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mservices/mservices.component */ "./src/app/mservices/mservices.component.ts");
/* harmony import */ var _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonails/testimonails.component */ "./src/app/testimonails/testimonails.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _trail_trail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trail/trail.component */ "./src/app/trail/trail.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./namescroll/namescroll.component */ "./src/app/namescroll/namescroll.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scrollcandidates/scrollcandidates.component */ "./src/app/scrollcandidates/scrollcandidates.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./freshandexp/freshandexp.component */ "./src/app/freshandexp/freshandexp.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./jobseeker/jobseeker.component */ "./src/app/jobseeker/jobseeker.component.ts");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home1/home1.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _jobslocation_jobslocation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./jobslocation/jobslocation.component */ "./src/app/jobslocation/jobslocation.component.ts");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/sample/sample.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _videos2_videos2_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./videos2/videos2.component */ "./src/app/videos2/videos2.component.ts");
/* harmony import */ var _sample1_sample1_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sample1/sample1.component */ "./src/app/sample1/sample1.component.ts");
/* harmony import */ var _side1_side1_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./side1/side1.component */ "./src/app/side1/side1.component.ts");
/* harmony import */ var _referal_referal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./referal/referal.component */ "./src/app/referal/referal.component.ts");
/* harmony import */ var _referalreg_referalreg_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./referalreg/referalreg.component */ "./src/app/referalreg/referalreg.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");






































var routes = [
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'blink', component: _blink_blink_component__WEBPACK_IMPORTED_MODULE_7__["BlinkComponent"] },
    { path: 'side', component: _side_side_component__WEBPACK_IMPORTED_MODULE_8__["SideComponent"] },
    { path: 'fresher', component: _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_9__["FresherComponent"] },
    { path: 'candidate', component: _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_10__["CandidateComponent"] },
    { path: 'canhead', component: _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_11__["CanheadComponent"] },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"] },
    { path: 'mservices', component: _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_14__["MservicesComponent"] },
    { path: 'testimonails', component: _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_15__["TestimonailsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] },
    { path: 'trail', component: _trail_trail_component__WEBPACK_IMPORTED_MODULE_17__["TrailComponent"] },
    { path: 'editprofile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_18__["EditprofileComponent"] },
    { path: 'namescroll', component: _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_19__["NamescrollComponent"] },
    { path: 'searchbar', component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_20__["SearchbarComponent"] },
    { path: 'scrollcandidates', component: _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_21__["ScrollcandidatesComponent"] },
    { path: 'password', component: _password_password_component__WEBPACK_IMPORTED_MODULE_22__["PasswordComponent"] },
    { path: 'freshandexp', component: _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_23__["FreshandexpComponent"] },
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"] },
    { path: 'jobseeker', component: _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_25__["JobseekerComponent"] },
    /*
    {
      path: 'home1',redirectTo: 'home1',pathMatch: 'full',
     
    }
    */
    { path: 'home1', component: _home1_home1_component__WEBPACK_IMPORTED_MODULE_26__["Home1Component"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"] },
    { path: 'test1', component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_28__["Test1Component"] },
    { path: 'jobslocation', component: _jobslocation_jobslocation_component__WEBPACK_IMPORTED_MODULE_29__["JobslocationComponent"] },
    { path: 'sample', component: _sample_sample_component__WEBPACK_IMPORTED_MODULE_30__["SampleComponent"] },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_31__["VideosComponent"] },
    { path: 'videos2', component: _videos2_videos2_component__WEBPACK_IMPORTED_MODULE_32__["Videos2Component"] },
    { path: 'sample1', component: _sample1_sample1_component__WEBPACK_IMPORTED_MODULE_33__["Sample1Component"] },
    { path: 'side1', component: _side1_side1_component__WEBPACK_IMPORTED_MODULE_34__["Side1Component"] },
    { path: 'referal', component: _referal_referal_component__WEBPACK_IMPORTED_MODULE_35__["ReferalComponent"] },
    { path: 'referalreg', component: _referalreg_referalreg_component__WEBPACK_IMPORTED_MODULE_36__["ReferalregComponent"] },
    { path: 'tables', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_37__["TablesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    /*---navigation bar------*/\r\n    #nav-bar{\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        top: 0;\r\n        z-index: 10;\r\n    \r\n       }\r\n    .navbar-brand img{\r\n       \r\n          height: 50px;\r\n          padding-left: 30px;\r\n       \r\n       }\r\n    .navbar-nav li{\r\n          padding: 0 10px;\r\n          \r\n       }\r\n    .navbar-nav li a{\r\n          float: right;\r\n          text-align: left;\r\n          color: white;\r\n        }\r\n    .navbar-toggler{\r\n            border: none!important;\r\n        }\r\n    .nav-link{\r\n            color: white;\r\n            font-weight: 600;\r\n            font-size: 16px;\r\n        }\r\n    /*-----------------------------------------------------------*/\r\n        \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLDJCQUEyQjtJQUMzQjtRQUNJLHlCQUFpQjtRQUFqQixpQkFBaUI7UUFDakIsT0FBTztRQUNQLFlBQVk7O1FBRVo7SUFDRDs7VUFFRyxhQUFhO1VBQ2IsbUJBQW1COztRQUVyQjtJQUNEO1VBQ0csZ0JBQWdCOztRQUVsQjtJQUNEO1VBQ0csYUFBYTtVQUNiLGlCQUFpQjtVQUNqQixhQUFhO1NBQ2Q7SUFHRDtZQUNJLHVCQUF1QjtTQUMxQjtJQUNEO1lBQ0ksYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixnQkFBZ0I7U0FDbkI7SUFFRCwrREFBK0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLyotLS1uYXZpZ2F0aW9uIGJhci0tLS0tLSovXHJcbiAgICAjbmF2LWJhcntcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICAgICBcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLm5hdmJhci1uYXYgbGl7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgICAgIC5uYXZiYXItbmF2IGxpIGF7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5re1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------------------------------------------------\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">SahiUdhyog</a>\n      </div>\n      <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n       <li *ngIf=\"!isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"auth/login\" href=\"#\"><b>Login</b></a>\n      </li>\n    </ul>\n  \n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n       <div class=\"btn-group mr-3\" *ngIf=\"isLoggedIn\">\n        <button type=\"button\" class=\"btn btn-primary\"><b>Welcome</b></button>\n        <button routerLink='/jobseeker' class=\"dropdown-item\">Profile</button>\n       <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home1\"><b>Logout</b></a></li>\n      </div>\n    </ul> \n       \n    </div>\n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n\n    ------------------------------------>\n  \n  <router-outlet></router-outlet>\n "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _blink_blink_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blink/blink.component */ "./src/app/blink/blink.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fresher/fresher.component */ "./src/app/fresher/fresher.component.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./candidate/candidate.component */ "./src/app/candidate/candidate.component.ts");
/* harmony import */ var _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./canhead/canhead.component */ "./src/app/canhead/canhead.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mservices/mservices.component */ "./src/app/mservices/mservices.component.ts");
/* harmony import */ var _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonails/testimonails.component */ "./src/app/testimonails/testimonails.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trail_trail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trail/trail.component */ "./src/app/trail/trail.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./namescroll/namescroll.component */ "./src/app/namescroll/namescroll.component.ts");
/* harmony import */ var _subfooter_subfooter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./subfooter/subfooter.component */ "./src/app/subfooter/subfooter.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scrollcandidates/scrollcandidates.component */ "./src/app/scrollcandidates/scrollcandidates.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./password/password.component */ "./src/app/password/password.component.ts");
/* harmony import */ var _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./freshandexp/freshandexp.component */ "./src/app/freshandexp/freshandexp.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./jobseeker/jobseeker.component */ "./src/app/jobseeker/jobseeker.component.ts");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home1/home1.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _jobslocation_jobslocation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./jobslocation/jobslocation.component */ "./src/app/jobslocation/jobslocation.component.ts");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/sample/sample.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _videos2_videos2_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./videos2/videos2.component */ "./src/app/videos2/videos2.component.ts");
/* harmony import */ var _sample1_sample1_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sample1/sample1.component */ "./src/app/sample1/sample1.component.ts");
/* harmony import */ var _side1_side1_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./side1/side1.component */ "./src/app/side1/side1.component.ts");
/* harmony import */ var _referal_referal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./referal/referal.component */ "./src/app/referal/referal.component.ts");
/* harmony import */ var _referalreg_referalreg_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./referalreg/referalreg.component */ "./src/app/referalreg/referalreg.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/tables/tables.component.ts");















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _blink_blink_component__WEBPACK_IMPORTED_MODULE_10__["BlinkComponent"],
                _side_side_component__WEBPACK_IMPORTED_MODULE_11__["SideComponent"],
                _fresher_fresher_component__WEBPACK_IMPORTED_MODULE_12__["FresherComponent"],
                _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_13__["CompareValidatorDirective"],
                _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_15__["CandidateComponent"],
                _canhead_canhead_component__WEBPACK_IMPORTED_MODULE_16__["CanheadComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_17__["ForgotComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_18__["ExperienceComponent"],
                _mservices_mservices_component__WEBPACK_IMPORTED_MODULE_19__["MservicesComponent"],
                _testimonails_testimonails_component__WEBPACK_IMPORTED_MODULE_20__["TestimonailsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _trail_trail_component__WEBPACK_IMPORTED_MODULE_23__["TrailComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_24__["EditprofileComponent"],
                _namescroll_namescroll_component__WEBPACK_IMPORTED_MODULE_25__["NamescrollComponent"],
                _subfooter_subfooter_component__WEBPACK_IMPORTED_MODULE_26__["SubfooterComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_27__["SearchbarComponent"],
                _scrollcandidates_scrollcandidates_component__WEBPACK_IMPORTED_MODULE_28__["ScrollcandidatesComponent"],
                _password_password_component__WEBPACK_IMPORTED_MODULE_29__["PasswordComponent"],
                _freshandexp_freshandexp_component__WEBPACK_IMPORTED_MODULE_30__["FreshandexpComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
                _jobseeker_jobseeker_component__WEBPACK_IMPORTED_MODULE_33__["JobseekerComponent"],
                _home1_home1_component__WEBPACK_IMPORTED_MODULE_34__["Home1Component"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_35__["TestComponent"],
                _test1_test1_component__WEBPACK_IMPORTED_MODULE_36__["Test1Component"],
                _jobslocation_jobslocation_component__WEBPACK_IMPORTED_MODULE_37__["JobslocationComponent"],
                _sample_sample_component__WEBPACK_IMPORTED_MODULE_38__["SampleComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_39__["VideosComponent"],
                _videos2_videos2_component__WEBPACK_IMPORTED_MODULE_40__["Videos2Component"],
                _sample1_sample1_component__WEBPACK_IMPORTED_MODULE_41__["Sample1Component"],
                _side1_side1_component__WEBPACK_IMPORTED_MODULE_42__["Side1Component"],
                _referal_referal_component__WEBPACK_IMPORTED_MODULE_43__["ReferalComponent"],
                _referalreg_referalreg_component__WEBPACK_IMPORTED_MODULE_44__["ReferalregComponent"],
                _tables_tables_component__WEBPACK_IMPORTED_MODULE_45__["TablesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbAlertModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_31__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = 'http://192.168.43.141:3005/jobseeker/signin';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    //private roles: Array<string> = [];
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.removeToken = function () {
        return localStorage.removeItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        //this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY));
        }
        //  return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/blink/blink.component.css":
/*!*******************************************!*\
  !*** ./src/app/blink/blink.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    /* background: #3ab1cf; */\r\n     /* margin-top: 20px;\r\n     margin-bottom: 20px; */\r\n     margin-left: 0px;  \r\n     min-width: 215.5vh;\r\n     /* background-color: whitesmoke; */\r\n     \r\n }\r\nimg{\r\n    width: 150vh;\r\n    height: 77px;\r\n    margin-top: 2px;\r\n    margin-bottom: 9px;\r\n    margin-left: 10px;\r\n}\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxpbmsvYmxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtLQUN6Qjs0QkFDdUI7S0FDdkIsaUJBQWlCO0tBQ2pCLG1CQUFtQjtLQUNuQixtQ0FBbUM7O0VBRXRDO0FBQ0Y7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFFOUMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBTUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmxpbmsvYmxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjM2FiMWNmOyAqL1xyXG4gICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cclxuICAgICBtYXJnaW4tbGVmdDogMHB4OyAgXHJcbiAgICAgbWluLXdpZHRoOiAyMTUuNXZoO1xyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7ICovXHJcbiAgICAgXHJcbiB9XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxNTB2aDtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5ibGlua3tcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blink/blink.component.html":
/*!********************************************!*\
  !*** ./src/app/blink/blink.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                <div class=\"carousel-inner\">\n\n<table>\n    <tr>\n<!--------------------------\n<span class=\"blink\">\n ---------------------------->   \n  <td>\n            <div class=\"carousel-item active\">\n         <img src=\"assets/bha.png\" class=\"d-block w-100\"> \n            </div> \n        \n    </td> \n    \n\n     <td>\n            <div class=\"carousel-item active\">\n         <img src=\"assets/info.jpg\" class=\"d-block w-100\">\n         </div>\n    </td>\n\n\n      <td>\n            <div class=\"carousel-item active\">\n          <img src=\"assets/lti.png\" class=\"d-block w-100\">\n        </div>\n        </td>\n\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/meg.jpg\" class=\"d-block w-100\">\n           </div>\n    </td>\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/ora.png\" class=\"d-block w-100\">\n            </div>\n    </td>\n\n      <td>\n            <div class=\"carousel-item active\">\n        <img src=\"assets/vir.png\" class=\"d-block w-100\">\n             </div>\n    </td>\n\n    <td>\n      <div class=\"carousel-item active\">\n  <img src=\"assets/wip.png\" class=\"d-block w-100\">\n       </div>\n</td>\n\n<!-- \n<td>\n  <div class=\"carousel-item active\">\n<img src=\"assets/tcs.jpg\" class=\"d-block w-100\">\n   </div>\n</td> -->\n\n<!--------------\n     </span>\n    ------------>\n    </tr>\n    </table> \n\n\n\n    </div>\n\n\n\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n    \n\n            </div>\n\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/blink/blink.component.ts":
/*!******************************************!*\
  !*** ./src/app/blink/blink.component.ts ***!
  \******************************************/
/*! exports provided: BlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlinkComponent", function() { return BlinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlinkComponent = /** @class */ (function () {
    function BlinkComponent() {
    }
    BlinkComponent.prototype.ngOnInit = function () {
    };
    BlinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blink',
            template: __webpack_require__(/*! ./blink.component.html */ "./src/app/blink/blink.component.html"),
            styles: [__webpack_require__(/*! ./blink.component.css */ "./src/app/blink/blink.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlinkComponent);
    return BlinkComponent;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.component.css":
/*!***************************************************!*\
  !*** ./src/app/candidate/candidate.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.total{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n    height: 100vh;\r\n    min-width: 100%;\r\n   background-position: center;\r\n       background-size: cover;\r\n       background-repeat: no-repeat;\r\n       padding-top: 40px;\r\n}\r\n\r\n*/\r\n\r\n.searchbar{\r\n        margin-bottom: auto;\r\n        margin-top: auto;\r\n        height: 60px;\r\n        background-color: blue;\r\n        border-radius: 30px;\r\n        padding: 10px;\r\n        \r\n        }\r\n\r\n.search_input{\r\n        color: white;\r\n        border: 0;\r\n        outline: 0;\r\n        background: none;\r\n        width: 0;\r\n        caret-color:transparent;\r\n        line-height: 40px;\r\n        transition: width 0.4s linear;\r\n        }\r\n\r\n.searchbar:hover > .search_input{\r\n        padding: 0 10px;\r\n        width: 450px;\r\n        caret-color:red;\r\n        transition: width 0.4s linear;\r\n        }\r\n\r\n.searchbar:hover > .search_icon{\r\n        background: white;\r\n        color: #e74c3c;\r\n        }\r\n\r\n.search_icon{\r\n        height: 40px;\r\n        width: 40px;\r\n        float: right;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 50%;\r\n        color:white;\r\n        }\r\n\r\n/*--------------------------------\r\n    .active-purple input[type=text] {\r\n   \r\n    box-shadow: 0 1px 0 0 #ce93d8;\r\n    width: 500px;\r\n    margin-left: 250px;\r\n    -webkit-transition: width 0.4s ease-in-out;\r\n    transition: width 0.4s ease-in-out;\r\n    }\r\n\r\n--------------------------------*/\r\n\r\n.container{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n    height: 100vh;\r\n    min-width: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    padding-top: 40px;\r\n}\r\n\r\n.row{  \r\n    width: 1000px;\r\n    height: 300px;\r\n    padding: 50px 50px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 40%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);  \r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n}\r\n\r\n.row a{\r\n    margin-right: inherit;\r\n    font-size: 20px;\r\n    padding-top: inherit;\r\n    color: black;\r\n}\r\n\r\n.row i{\r\n    width: 26px;\r\n    float: left;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n\r\n  }\r\n\r\n.btn{\r\n    width: 150px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n#dropdownMenuButton{\r\n    width: 150px;\r\n    height: 52px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n\r\n.job{\r\n    padding-right: 55px;\r\n}\r\n\r\n#dropdownMenuButton i{\r\n    color: aliceblue;\r\n   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFOztBQUVGO1FBQ1Esb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixjQUFjOztTQUViOztBQUVUO1FBQ1EsYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLDhCQUE4QjtTQUM3Qjs7QUFFVDtRQUNRLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtTQUM3Qjs7QUFFVDtRQUNRLGtCQUFrQjtRQUNsQixlQUFlO1NBQ2Q7O0FBRVQ7UUFDUSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsWUFBWTtTQUNYOztBQUdMOzs7Ozs7Ozs7O2tDQVU4Qjs7QUFJbEM7SUFDSSw4R0FBOEc7SUFDOUcsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixrQkFBa0I7Q0FDckI7O0FBR0Q7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCOztHQUVsQjs7QUFFSDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxpQkFBaUI7O0NBRXBCIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLnRvdGFse1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSksdXJsKFwiL2Fzc2V0cy9iYWcuanBnXCIpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuKi9cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuLnNlYXJjaF9pbnB1dHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgICAgICB9XHJcbiAgICBcclxuLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBjYXJldC1jb2xvcjpyZWQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbi5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbi5zZWFyY2hfaWNvbntcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgfSAgXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLmFjdGl2ZS1wdXJwbGUgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgIFxyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNjZTkzZDg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSksdXJsKFwiL2Fzc2V0cy9iYWcuanBnXCIpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4ucm93eyAgXHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJvdyBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnJvdyBpe1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIH1cclxuICBcclxuLmJ0bntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiNkcm9wZG93bk1lbnVCdXR0b257XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uam9ie1xyXG4gICAgcGFkZGluZy1yaWdodDogNTVweDtcclxufVxyXG4jZHJvcGRvd25NZW51QnV0dG9uIGl7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/candidate/candidate.component.html":
/*!****************************************************!*\
  !*** ./src/app/candidate/candidate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-canhead></app-canhead>\n\n<!-----------------------\n<body>\n  \n      <div class=\"container h-100\">\n        \n        <div class=\"d-flex justify-content-center h-100\">\n          <div class=\"searchbar\">\n             \n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Key Skills Search here...\">\n            <a href=\"#\" class=\"search_icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n          \n          </div>\n        </div>\n        \n      </div>\n\n\n</body>\n------------>\n\n<!-----------------------------------------\n  <app-namescroll></app-namescroll>\n\n\n----------->\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3 bg\">\n\n      <button class=\"btn btn-primary\">\n        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n        <a routerLink=\"/editprofile\" routerLinkActive=\"active\">Edit Profile</a> </button> <br><br>\n\n\n      <button class=\"btn btn-primary\">\n        <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n        <a [routerLink]=\"['Chatterbox']\">Chatter Box</a> </button> <br><br>\n\n      <button class=\"btn btn-primary\">\n        <i class=\"fa fa-hand-o-right\" aria-hidden=\"true\"></i>\n        <a class=\"job\" [routerLink]=\"['jobs']\"> Jobs </a> </button><br> <br>\n\n\n\n      <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" ngbDropdownToggle>\n          <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n          Settings</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n          <button class=\"dropdown-item\">Change To Premium</button>\n          <button class=\"dropdown-item\">Change Password</button>\n          <button class=\"dropdown-item\">Logout</button>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n\n\n<app-subfooter></app-subfooter>"

/***/ }),

/***/ "./src/app/candidate/candidate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/candidate/candidate.component.ts ***!
  \**************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CandidateComponent = /** @class */ (function () {
    function CandidateComponent() {
    }
    CandidateComponent.prototype.ngOnInit = function () {
    };
    CandidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate',
            template: __webpack_require__(/*! ./candidate.component.html */ "./src/app/candidate/candidate.component.html"),
            styles: [__webpack_require__(/*! ./candidate.component.css */ "./src/app/candidate/candidate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CandidateComponent);
    return CandidateComponent;
}());



/***/ }),

/***/ "./src/app/canhead/canhead.component.css":
/*!***********************************************!*\
  !*** ./src/app/canhead/canhead.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen {\r\n  .dropdown:hover .dropdown-menu {\r\n    display: block;\r\n  }\r\n}\r\n.dropdown-menu{\r\n  max-width: 182px;\r\n}\r\n#ma i{\r\n  width: 26px;\r\n  float: left;\r\n  text-align: center;\r\n  margin-bottom: -35px;\r\n  margin-top: 8px;\r\n  color:blue;\r\n}\r\n/*---navigation bar------*/\r\n#nav-bar{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 10;\r\n\r\n   }\r\n.navbar-brand img{\r\n    border-radius: 50%;\r\n      height: 50px;\r\n      padding-left: 30px;\r\n   \r\n   }\r\n.navbar-nav li{\r\n      padding: 0 10px;\r\n      \r\n   }\r\n.navbar-nav li a{\r\n      float: right;\r\n      text-align: left;\r\n      color: white;\r\n    }\r\n.navbar-nav li i{\r\n      width: 26px;\r\n      float: left;\r\n      text-align: center;\r\n      margin-top: 10px;\r\n  \r\n    }\r\n.navbar-toggler{\r\n        border: none!important;\r\n    }\r\n.nav-link{\r\n        color: white;\r\n        font-weight: 600;\r\n        font-size: 16px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuaGVhZC9jYW5oZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWjtBQUlDLDJCQUEyQjtBQUMzQjtJQUNFLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFlBQVk7O0lBRVo7QUFDRDtJQUNDLG1CQUFtQjtNQUNqQixhQUFhO01BQ2IsbUJBQW1COztJQUVyQjtBQUlEO01BQ0csZ0JBQWdCOztJQUVsQjtBQUNEO01BQ0csYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixhQUFhO0tBQ2Q7QUFDRDtNQUNFLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLGlCQUFpQjs7S0FFbEI7QUFJRDtRQUNJLHVCQUF1QjtLQUMxQjtBQUNEO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixnQkFBZ0I7S0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jYW5oZWFkL2NhbmhlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiB7XHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICBtYXgtd2lkdGg6IDE4MnB4O1xyXG59XHJcbiNtYSBpe1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAtMzVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuICBcclxuICBcclxuICAvKi0tLW5hdmlnYXRpb24gYmFyLS0tLS0tKi9cclxuICAjbmF2LWJhcntcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgIH1cclxuICAgLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICBcclxuICAgfVxyXG5cclxuICAgXHJcbiAgIFxyXG4gICAubmF2YmFyLW5hdiBsaXtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBcclxuICAgfVxyXG4gICAubmF2YmFyLW5hdiBsaSBhe1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IGxpIGl7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/canhead/canhead.component.html":
/*!************************************************!*\
  !*** ./src/app/canhead/canhead.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-primary \">\n      <a class=\"navbar-brand\" href=\"#\"> <img src=\"/assets/logoo.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n          <li class=\"nav-item\">\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <a class=\"nav-link\" href=\"#contactus\">Contact Us </a>\n          </li>\n         \n            <li class=\"nav-item\">\n                <i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n              <a class=\"nav-link\"  href=\"#jobskills\">Job Skills</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                <a class=\"nav-link\"  href=\"#notifications\"> Notifications </a>\n              </li>\n\n\n              <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                  Arjun Reddy</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\" id=\"ma\">\n                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                  <button routerLink='/candidate' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\">Profile</button>\n                  <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n                  <button routerLink='/accountsettings' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\">Account Settings</button>\n                  <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                  <button routerLink='/home1' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\" >Logout</button>\n      \n                </div>\n              </div>\n\n           \n        </ul>\n      </div>\n     </nav>  \n  </section>\n  <!-------------------------------------------------------------------------------------------->\n\n\n "

/***/ }),

/***/ "./src/app/canhead/canhead.component.ts":
/*!**********************************************!*\
  !*** ./src/app/canhead/canhead.component.ts ***!
  \**********************************************/
/*! exports provided: CanheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanheadComponent", function() { return CanheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanheadComponent = /** @class */ (function () {
    function CanheadComponent() {
    }
    CanheadComponent.prototype.ngOnInit = function () {
    };
    CanheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canhead',
            template: __webpack_require__(/*! ./canhead.component.html */ "./src/app/canhead/canhead.component.html"),
            styles: [__webpack_require__(/*! ./canhead.component.css */ "./src/app/canhead/canhead.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanheadComponent);
    return CanheadComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------------Get In Touch----------*/\r\n.container{\r\n    margin-bottom: 30px;\r\n    /* background: -webkit-linear-gradient(left, #746dd6, #00c6ff); */\r\n    margin-left: 25px;\r\n    min-width: 210vh;\r\n    background-color: whitesmoke;\r\n    padding: 40px;\r\n}\r\n#contact{\r\n    background: -webkit-linear-gradient(left, #746dd6, #00c6ff);\r\n    padding-top: 80px;\r\n    padding-bottom: 30px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    color: #777;   \r\n}\r\n#contact h3{\r\n    color: white;\r\n}\r\n.contact-form{\r\n    padding: 15px;\r\n}\r\n.form-control{\r\n    border-radius: 0 !important;\r\n    border: none !important;\r\n}\r\n::-webkit-input-placeholder{\r\n    color: #999 !important;\r\n}\r\n::-ms-input-placeholder{\r\n    color: #999 !important;\r\n}\r\n::placeholder{\r\n    color: #999 !important;\r\n}\r\n.follow{\r\n         background: #fff;\r\n          padding: 10px;\r\n          margin: 15px;\r\n}\r\n.contact-info .fa{\r\n    margin: 10px;\r\n    color: #007bff;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0lBQ0ksb0JBQW9CO0lBQ3BCLGtFQUFrRTtJQUNsRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRkQ7SUFDSSx1QkFBdUI7Q0FDMUI7QUFGRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUNEO1NBQ1MsaUJBQWlCO1VBQ2hCLGNBQWM7VUFDZCxhQUFhO0NBQ3RCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tR2V0IEluIFRvdWNoLS0tLS0tLS0tLSovXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzc0NmRkNiwgIzAwYzZmZik7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1pbi13aWR0aDogMjEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG4jY29udGFjdHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICM3NDZkZDYsICMwMGM2ZmYpO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzc3NzsgICBcclxufVxyXG4jY29udGFjdCBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGFjdC1mb3Jte1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbGxvd3tcclxuICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyAuZmF7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------Get in Touch------------------------------>\n\n<div class=\"container\">\n<section id=\"contact\">\n    \n       <h3> Get In Touch</h3>\n       <div class=\"row\">\n         <div class=\"col-md-6\">\n            <form class=\"contact-form\"  #f=\"ngForm\" novalidate>\n              <div class=\"form-group\">\n                 \n                  <input type=\"text\" placeholder=\"Enter Your  Name\" class=\"form-control\"\n                    [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':f.submitted && firstName.invalid}\" name=\"firstName\" required />\n                  <div class=\"invalid-feedback\">\n                    <div>Your Name is Required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  \n                  <input type=\"number\" placeholder=\"Enter Your Mobile Number\" class=\"form-control\"\n                    [(ngModel)]=\"model.number\" #number=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':f.submitted && number.invalid}\" name=\"number\" required />\n                  <div class=\"invalid-feedback\">\n                    <div>Mobile Number is Required</div>\n                  </div>\n             </div>\n             <div class=\"form-group\">\n                \n                <input type=\"text\" placeholder=\"Enter Your Email\" class=\"form-control\" [(ngModel)]=\"model.email\"\n                  #email=\"ngModel\" [ngClass]=\"{'is-invalid':f.submitted && email.invalid}\" name=\"email\" required\n                  email />\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"email.errors.required\">Email is Required</div>\n                  <div *ngIf=\"email.errors.email\">Email must be a valid email adress</div>\n                </div>\n             </div>\n             <div class=\"form-group\">\n               <textarea class=\"form-control\" rows=\"4\" placeholder=\"Message\"></textarea>\n             </div>\n             <button type=\"submit\" class=\"btn btn-success\">Send Message</button>\n            </form>\n         </div>\n         <div class=\"col-md-6 contact-info\">\n\n            <div class=\"follow\">\n              <b>Address:</b><i class=\"fa fa-map-marker\"></i>\n             <!-----------------------------------\n               <pre class=\" text-info\">\n\n              Letsgettin - E-city Phase-2 ;\n                 17-B,2nd Floor,SBI Bank,\n                 Opp Tata power Solar,\n                 Hosur Road, Electronic city Phase-2 \n                  Bangalore : 560100.\n----------> \n\n\n                  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15560.220079494873!2d77.6617524!3d12.8397212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf08d1f3e2bf90da8!2sLetsgettin+Pvt.+Ltd!5e0!3m2!1sen!2sin!4v1554100697145!5m2!1sen!2sin\" width=\"500\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n<!------------\n  </pre>\n------------>\n\n  </div>\n           <div class=\"follow\"><b>Phone:</b><i class=\"fa fa-phone\"></i>+91-9876543210</div>  \n         <div class=\"follow\"><b>Email:</b><i class=\"fa fa-envelope-o\"></i>letsgettin@qubarter.com</div>\n         <div class=\"follow\"><label><b>Get Social:</b></label>\n           <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-youtube-play\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n           <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n       </div>\n         </div>\n       </div>\n   \n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register1{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n   \r\n}\r\n\r\n.register2{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n   \r\n}\r\n\r\n.register3{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n   \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDREQUE0RDs7SUFFNUQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCOztDQUVyQjs7QUFFRDtJQUNJLDREQUE0RDs7SUFFNUQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCOztDQUVyQjs7QUFFRDtJQUNJLDREQUE0RDs7SUFFNUQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCOztDQUVyQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIxe1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTl2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgIFxyXG59XHJcblxyXG4ucmVnaXN0ZXIye1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTl2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgIFxyXG59XHJcblxyXG4ucmVnaXN0ZXIze1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTl2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgIFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register1\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row1\">\n              <div class=\"col-md-12\">\n\n                <div class=\"row register1-form\">   \n                \n                <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Change Your Name\" name=\"name\"\n                    formControlName=\"name\">\n\n                  <div\n                    *ngIf=\"reactiveForm.controls.name.errors && (reactiveForm.controls.name.touched || reactiveForm.controls.name.dirty)\"\n                    style=\"color: blue\">\n                    <div *ngIf=\"reactiveForm.hasError('pattern','name')\"> Name is invalid</div>\n                    <div *ngIf=\"reactiveForm.hasError('minlength','name')\"> Name is must be 3 min</div>\n\n                  </div>\n                </div>\n\n              </div>\n\n\n\n\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"address\">Address</label>\n                  <input type=\"text\" id=\"address\" name=\"address\" class=\"form-control\" placeholder=\"Change Your address\"\n                    formControlName=\"address\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.touched)\"\n                    style=\"color:blue\">\n                  </div>\n\n                </div>\n\n              </div>\n     \n\n             <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"phoneNumber\">Phone Number</label>\n                  <input type=\"Text\" id=\"phoneNumber\" class=\"form-control\" name=\"phoneNumber\"\n                    placeholder=\"Change Your Number\" formControlName=\"phoneNumber\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                    style=\"color:blue\">\n                    <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n\n                  </div>\n\n                </div>\n             </div>\n\n                </div>\n\n                <div class=\"row register2-form\">\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"anydegree\" style=\"color:rgb(240, 15, 191)\">\n                    <label>Any PostGraduation *</label>\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"ugCourse\"> Course:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\"\n                      formControlName=\"ugCourse\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                        Course is Invalid Format\n                      </div>\n\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label for=\"ugSpecialization\"> Speciliazation:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                      formControlName=\"ugSpecialization\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                        Speciliazation is Invalid Format\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label for=\"university_or_institute\"> University:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"university_or_institute\" name=\"university_or_institute\"\n                      formControlName=\"university_or_institute\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                        university is Invalid Format\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n\n                  <div class=\"form-group\">\n                    <label> courseType * </label> <br>\n                    <label for=\"courseType\">Full Time</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                    <label for=\"courseType\">Part Time</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                    <label for=\"courseType\">Correspondece</label>\n                    <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                  </div>\n\n\n\n                </div>\n\n\n\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"passed_out_year\"> Passed Out year:</label>\n                    <input type=\"number\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                      formControlName=\"passed_out_year\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                      style=\"color:red\">\n\n                      <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                        university is Invalid Format\n                      </div>\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"col-md-4\">\n\n                  <div class=\"form-group\">\n                    <label>Grading System *</label><br>\n                    <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                      <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"marks\"> Marks:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                      style=\"color:red\">\n                      <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                        Marks is Invalid Format\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\" id=\"sa\">\n                    <label for=\"file\">Upload Certificate</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                      style=\"height:100%\">\n                  </div>\n\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label> Skills </label> <br>\n                    <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\"\n                      formControlName=\"skills\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                      style=\"color:red\">\n                    </div>\n\n                  </div>\n                </div>\n\n\n\n\n\n\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label for=\"file\">Upload Skills Certificate</label>\n                    <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSkills($event)\" style=\"height:100%\">\n                  </div>\n\n                </div>\n\n                </div>\n\n\n                <p>\n                  <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                </p>\n\n\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n\n\n\n\n\n\n\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Proffesional Details</ng-template>\n      <ng-template ngbTabContent>\n\n\n\n\n        <div class=\"container register2\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n\n                  <div class=\"row register2-form\">\n\n                    <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"experience_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label>Experience *</label>\n                    </div>\n                    </div>\n\n                    <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <input type=\"number\" id=\"total_experience_in_years\" name=\"total_experience_in_years\"\n                            class=\"form-control\" placeholder=\"Years\" formControlName=\"total_experience_in_years\">\n    \n    \n                          <div\n                            *ngIf=\"reactiveForm.controls.total_experience_in_years.errors && \n                                  (reactiveForm.controls.total_experience_in_years.touched || reactiveForm.controls.total_experience_in_years.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_years')\">required</div>\n    \n                          </div>\n                        </div>\n                      </div>\n    \n                \n    \n                      <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <input type=\"number\" id=\"total_experience_in_months\" name=\"total_experience_in_months\"\n                            class=\"form-control\" placeholder=\"Total Months\" formControlName=\"total_experience_in_months\">\n                          <div\n                            *ngIf=\"reactiveForm.controls.total_experience_in_months.errors && \n                               (reactiveForm.controls.total_experience_in_months.touched || reactiveForm.controls.total_experience_in_months.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_months')\">Required</div>\n                          </div>\n    \n                        </div>\n                      </div>\n\n\n\n\n\n                      <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                             <input type=\"number\" id=\"relevant_experience_in_years\" name=\"relevant_experience_in_years\"\n                                     class=\"form-control\" placeholder=\"relevant_experience_in_years\" formControlName=\"relevant_experience_in_years\">\n                                     <div\n                                     *ngIf=\"reactiveForm.controls.relevant_experience_in_years.errors && \n                                        (reactiveForm.controls.relevant_experience_in_years.touched || reactiveForm.controls.relevant_experience_in_years.dirty)\">\n                                     <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_years')\"> Required</div>\n                                   </div>\n         \n                          </div>\n                        </div>\n         \n         \n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <input type=\"number\" id=\"relevant_experience_in_months\" name=\"relevant_experience_in_months\" class=\"form-control\"\n                            placeholder=\"relevant_experience_in_months\" formControlName=\"relevant_experience_in_months\">\n                            <div *ngIf=\"reactiveForm.controls.relevant_experience_in_months.errors && \n                            (reactiveForm.controls.relevant_experience_in_months.touched || reactiveForm.controls.relevant_experience_in_months.dirty)\">\n                            <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_months')\">Required</div>\n         \n                            </div>\n         \n                          </div>\n                        </div>\n\n\n\n\n                        <div class=\"col-md-5\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"current_ctc\" name=\"current_ctc\" class=\"form-control\" placeholder=\"current_ctc\"\n                              formControlName=\"current_ctc\">\n                              <div *ngIf=\"reactiveForm.controls.current_ctc.errors && \n                              (reactiveForm.controls.current_ctc.touched || reactiveForm.controls.current_ctc.dirty)\">\n                                <div *ngIf=\"reactiveForm.hasError('required','current_ctc')\"> Required </div>\n                              </div>\n    \n                            </div>\n                          </div>\n    \n                          <div class=\"col-md-5\">\n                            <div class=\"form-group\">\n                              <input type=\"text\" id=\"noticePeriod_in_days\" name=\"noticePeriod_in_days\" class=\"form-control\" placeholder=\"noticePeriod_in_days\"\n                              formControlName=\"noticePeriod_in_days\">\n                              <div *ngIf=\"reactiveForm.controls.noticePeriod_in_days.errors && \n                              (reactiveForm.controls.noticePeriod_in_days.touched || reactiveForm.controls.noticePeriod_in_days.dirty)\">\n                              <div *ngIf=\"reactiveForm.hasError('required','noticePeriod_in_days')\"> Required</div>\n    \n                              </div>\n    \n                            </div>\n                          </div>\n    \n\n             </div>\n\n              </div>\n\n              \n              <p>\n                <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n              </p>\n      \n              <p>\n                <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid3')\">Next</button>\n              </p>\n\n\n            </div>\n          </form>\n        </div>\n\n\n      </ng-template>\n\n    </ngb-tab>\n\n    <ngb-tab id=\"tab-selectbyid3\">\n      <ng-template ngbTabTitle>Updated Resume</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register3\">\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row1\">\n              <div class=\"col-md-12\">\n\n\n                  <div class=\"form-group\">\n                      <label for=\"file\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n\n\n\n                </div>\n\n                <p>\n                  <button class=\"btn btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Previous</button>\n                </p>\n                \n                </div>\n                </form>\n                </div>\n\n      \n\n      </ng-template>\n    </ngb-tab>\n\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(fb) {
        this.fb = fb;
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        this.userFile = File;
        this.userFiles = FileList;
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
    }
    EditprofileComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    EditprofileComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files;
        this.userFiles = file;
    };
    EditprofileComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    EditprofileComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            total_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            relevant_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            relevant_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            current_ctc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            noticePeriod_in_days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
        });
    };
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/experience.service.ts":
/*!***************************************!*\
  !*** ./src/app/experience.service.ts ***!
  \***************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
        this.url = "http://192.168.43.141:3005/jobseeker/experience/check";
        this.http = http;
    }
    ExperienceService.prototype.registerFresher = function (formData) {
        return this.http.post(this.url, formData);
        /* return this.http.post(this.url,{
           "firstName": firstname,
           "lastName":lastname
         })*/
    };
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    /* margin-left: 40px; */\r\n    min-width: 205vh;\r\n}\r\n.register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    min-height: 99vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n.register-right{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n  background-image: no-repeat;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n.register .register-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: 2%;   \r\n}\r\n.register .register1-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: -12%;\r\n    margin-bottom: -15%;\r\n}\r\n.register .register2-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;   \r\n}\r\n.register .register8-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;  \r\n    padding-top: 1px;    \r\n}\r\n.reactiveform{\r\n    padding: 20px;\r\n    margin-left: 70px;\r\n    margin-top: 0px;\r\n    padding-top: 0%;\r\n    margin-bottom: 10px;\r\n}\r\n.reactiveform .btn{\r\n    margin-left: 200px;\r\n    width: 10%;\r\n    height: 35px;    \r\n}\r\n.radio{\r\n    /*------------gender radio button-----------*/\r\n    margin-left: 3px;\r\n}\r\n.radio1{\r\n    /*------------course type-----------*/\r\n    margin-left: 3px;\r\n}\r\n.reactiveform .btnd{\r\n    /*------------btnd is a class of grading system-----------*/\r\n    height: 38px;\r\n    width: 65%;\r\n   \r\n}\r\n#board1{\r\n     /*---------------- ssc board label ---------------------------*/\r\n    margin-top: -34Px;\r\n    margin-bottom: 40px;\r\n}\r\n#board{\r\n    /*---------------- ssc board ---------------------------*/\r\n   margin-top: -35Px;\r\n   margin-bottom: 40px;\r\n}\r\n#inter_category1{\r\n    /*---------------- category for ipe ---------------------------*/\r\n  margin-bottom: 1px;\r\n}\r\n#inter_category{\r\n      /*---------------- inter categeory---------------------------*/\r\n   margin-top: -1Px;\r\n   margin-bottom: 40px;\r\n}\r\n#ipeupload{\r\n    /*----------------IPE/DIP Upload Certificate---------------------------*/\r\n   margin-top: -36px;\r\n}\r\n#ssc_percentage{\r\n     /*----------------ssc %---------------------------*/\r\n    margin-top: -34Px;\r\n   \r\n}\r\n#ssc_school{\r\n    /*----------------ssc school---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n#ssc_school_location{\r\n    /*----------------ssc location---------------------------*/\r\n   margin-top: -34Px;\r\n  \r\n}\r\n#sscupload{\r\n    /*----------------ssc Upload Certificate---------------------------*/\r\n   margin-top: -36px;\r\n}\r\n.btnc{\r\n    /*----------------btnc is a class of grading system dropdown---------------------------*/\r\n    height: 38px;\r\n    margin-bottom:13%; \r\n}\r\n.reactiveform.form-group{\r\n    padding: 20%;\r\n}\r\n#sa{\r\n   /*-------------this sa id is for upload certificate----------------------*/\r\n   color: blue;\r\n    padding-top: 4px;\r\n    margin-bottom: 25px;\r\n}\r\n.btnm{\r\n    /*---------------------this is for next button------------------------------------*/\r\n    border-radius: 100%;\r\n    margin-left: 200px;\r\n    width: 30%;\r\n    height: 35px;\r\n    margin-top: 10%;\r\n    \r\n}\r\n.btnm1{\r\n    /*---------------------this is for next button in educational details------------------------------------*/\r\n   margin-left: 500px;\r\n    width: 15%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border-radius: 100%;    \r\n}\r\n.btnp{\r\n    /*---------------------this is for previous button in educational details------------------------------------*/\r\n   margin-left: 100px;\r\n   border-radius: 100%;\r\n   width: 15%;\r\n   margin-top: 0%;\r\n  \r\n}\r\n.btnp1{\r\n    /*---------------------this is for previous button in experience details------------------------------------*/\r\n   margin-left: -360px;\r\n   border-radius: 100%;\r\n   width: 18%;\r\n   margin-top: 0%;\r\n   height: 40px;\r\n  \r\n}\r\n#anydegree{\r\n    margin-top: 20px;\r\n    margin-bottom: 3px;\r\n}\r\n.btn1{\r\n    /*--------------------This is for submit--------------------------*/\r\n    margin-left: 400px;\r\n    width:15%;\r\n    height: 43px;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n/*\r\n.close-icon{\r\n    display:block;\r\n    box-sizing: border-box;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-style: solid;\r\n    border-color: blue;\r\n    border-radius: 100%;\r\n    background: -webkit-linear-gradient(-45deg,transparent 0% transparent 0% transparent 46%\r\n    white 46% white 56% transparent 56% transparent 100%);\r\n    background-color: blue;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\r\n    transition:all 0.3s ease;\r\n    float: right;\r\n}\r\n*/\r\n.row .register3-form{\r\n    \r\n    padding-left: 76px;\r\n    margin-top: -3%;\r\n   \r\n}\r\n#experience_category1{\r\n    /*---------------- experience_category1  label ---------------------------*/\r\n  margin-left: -17px;\r\n  margin-top: 65px;\r\n}\r\n#companydetails{\r\n    /*---------------- companydaetails  label ---------------------------*/\r\n  margin-left: 40px;\r\n  \r\n}\r\n.btnadd{\r\n    /*-------------------------Add company Button----------------------------------*/\r\n    margin-left: 450px;\r\n    margin-bottom: 20px;\r\n}\r\n.row .register4-form{\r\n    margin-left: 60px;\r\n    margin-bottom: 25px;\r\n}\r\n.row .register5-form{\r\n    margin-left: 60px; \r\n}\r\n.row .register6-form{\r\n    margin-left: 60px;\r\n    margin-bottom: 25px; \r\n   \r\n}\r\n.row .register7-form{\r\n    margin-left: 60px; \r\n    margin-bottom: 25px;\r\n}\r\n#relaventcompanydetails{\r\n/*----------------Relavent companydaetails  label ---------------------------*/\r\nmargin-left: 40px;\r\n}\r\n.btnrel{\r\n    /*-------------------------Add Relaventcompany Button----------------------------------*/\r\n    margin-left: 450px;\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n/*----------------------------------------------\r\n.container{\r\n    background-position: center;\r\n     background-size: cover;\r\n     background-repeat: no-repeat;\r\n     }\r\nh2{\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n.register{\r\n width: 500px;\r\n  margin: 10px 0px 10px 250px;\r\n   font-size: 15px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    \r\n}\r\n#register{\r\n    margin-left: 50px;\r\n}\r\nlabel{\r\n\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    \r\n}\r\n#name{\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    outline: 0;\r\n    padding: 3px;\r\n}\r\n.register input{\r\n    font-size: 12px;\r\n    color: rgb(10, 147, 238);\r\n}\r\n#sub{\r\n    width: 50%;\r\n    background: lightblue;\r\n    padding: 5px;\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n    margin-right:10px;\r\n    }\r\n----------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksOEdBQThHO0VBQ2hILDRCQUE0QjtJQUMxQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0NBQ3RDO0FBR0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0NBQXdDO0NBQzNDO0FBQ0Q7SUFDSSxLQUFLLGlDQUF5QixDQUF6Qix5QkFBeUIsRUFBRTtJQUNoQyxPQUFPLHFDQUE2QixDQUE3Qiw2QkFBNkIsRUFBRTtDQUN6QztBQUNEO0lBQ0ksS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLEVBQUU7SUFDaEMsT0FBTyxxQ0FBNkIsQ0FBN0IsNkJBQTZCLEVBQUU7Q0FDekM7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBR0Q7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLFdBQVc7O0NBRWQ7QUFDRDtLQUNLLGdFQUFnRTtJQUNqRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwREFBMEQ7R0FDM0Qsa0JBQWtCO0dBQ2xCLG9CQUFvQjtDQUN0QjtBQUNEO0lBQ0ksaUVBQWlFO0VBQ25FLG1CQUFtQjtDQUNwQjtBQUVEO01BQ00sK0RBQStEO0dBQ2xFLGlCQUFpQjtHQUNqQixvQkFBb0I7Q0FDdEI7QUFDRDtJQUNJLHlFQUF5RTtHQUMxRSxrQkFBa0I7Q0FDcEI7QUFHRDtLQUNLLG9EQUFvRDtJQUNyRCxrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSx5REFBeUQ7R0FDMUQsa0JBQWtCOztDQUVwQjtBQUNEO0lBQ0ksMkRBQTJEO0dBQzVELGtCQUFrQjs7Q0FFcEI7QUFDRDtJQUNJLHFFQUFxRTtHQUN0RSxrQkFBa0I7Q0FDcEI7QUFHRDtJQUNJLHlGQUF5RjtJQUN6RixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7R0FDRywyRUFBMkU7R0FDM0UsWUFBWTtJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9GQUFvRjtJQUNwRixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCOztDQUVuQjtBQUNEO0lBQ0ksMkdBQTJHO0dBQzVHLG1CQUFtQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLCtHQUErRztHQUNoSCxtQkFBbUI7R0FDbkIsb0JBQW9CO0dBQ3BCLFdBQVc7R0FDWCxlQUFlOztDQUVqQjtBQUNEO0lBQ0ksOEdBQThHO0dBQy9HLG9CQUFvQjtHQUNwQixvQkFBb0I7R0FDcEIsV0FBVztHQUNYLGVBQWU7R0FDZixhQUFhOztDQUVmO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxvRUFBb0U7SUFDcEUsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9COztDQUV2QjtBQU1EOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBRUY7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLDRFQUE0RTtFQUM5RSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7SUFDSSx1RUFBdUU7RUFDekUsa0JBQWtCOztDQUVuQjtBQUNEO0lBQ0ksaUZBQWlGO0lBQ2pGLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjs7Q0FFdkI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFFRDtBQUNBLCtFQUErRTtBQUMvRSxrQkFBa0I7Q0FDakI7QUFFRDtJQUNJLHlGQUF5RjtJQUN6RixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjtBQXdCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBK0NvQyIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA0MHB4OyAqL1xyXG4gICAgbWluLXdpZHRoOiAyMDV2aDtcclxufVxyXG4ucmVnaXN0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxuICAgIG1pbi1oZWlnaHQ6IDk5dmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbGVmdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzM4M2Q0MTtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3Rlci1yaWdodHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuMTApLHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkpLHVybChcIi9hc3NldHMvYmFnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcclxufVxyXG5cclxuXHJcbi5yZWdpc3Rlci1sZWZ0IGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbi5yZWdpc3Rlci1sZWZ0IHB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHBhZGRpbmc6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxufVxyXG5cclxuXHJcbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTsgICBcclxufVxyXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyMS1mb3Jte1xyXG4gICAgcGFkZGluZzogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXIyLWZvcm17XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTclOyAgIFxyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXI4LWZvcm17XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTclOyAgXHJcbiAgICBwYWRkaW5nLXRvcDogMXB4OyAgICBcclxufVxyXG4ucmVhY3RpdmVmb3Jte1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucmVhY3RpdmVmb3JtIC5idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4OyAgICBcclxufVxyXG4ucmFkaW97XHJcbiAgICAvKi0tLS0tLS0tLS0tLWdlbmRlciByYWRpbyBidXR0b24tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5yYWRpbzF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLWNvdXJzZSB0eXBlLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4ucmVhY3RpdmVmb3JtIC5idG5ke1xyXG4gICAgLyotLS0tLS0tLS0tLS1idG5kIGlzIGEgY2xhc3Mgb2YgZ3JhZGluZyBzeXN0ZW0tLS0tLS0tLS0tLSovXHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICBcclxufVxyXG4jYm9hcmQxe1xyXG4gICAgIC8qLS0tLS0tLS0tLS0tLS0tLSBzc2MgYm9hcmQgbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi10b3A6IC0zNFB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4jYm9hcmR7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0gc3NjIGJvYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi10b3A6IC0zNVB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiNpbnRlcl9jYXRlZ29yeTF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0gY2F0ZWdvcnkgZm9yIGlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5cclxuI2ludGVyX2NhdGVnb3J5e1xyXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0gaW50ZXIgY2F0ZWdlb3J5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTFQeDtcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4jaXBldXBsb2Fke1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tSVBFL0RJUCBVcGxvYWQgQ2VydGlmaWNhdGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzZweDtcclxufVxyXG5cclxuXHJcbiNzc2NfcGVyY2VudGFnZXtcclxuICAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2MgJS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICAgXHJcbn1cclxuI3NzY19zY2hvb2x7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2Mgc2Nob29sLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTM0UHg7XHJcbiAgXHJcbn1cclxuI3NzY19zY2hvb2xfbG9jYXRpb257XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2MgbG9jYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICBcclxufVxyXG4jc3NjdXBsb2Fke1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tc3NjIFVwbG9hZCBDZXJ0aWZpY2F0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi10b3A6IC0zNnB4O1xyXG59XHJcblxyXG5cclxuLmJ0bmN7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1idG5jIGlzIGEgY2xhc3Mgb2YgZ3JhZGluZyBzeXN0ZW0gZHJvcGRvd24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMyU7IFxyXG59XHJcbi5yZWFjdGl2ZWZvcm0uZm9ybS1ncm91cHtcclxuICAgIHBhZGRpbmc6IDIwJTtcclxufVxyXG5cclxuI3Nhe1xyXG4gICAvKi0tLS0tLS0tLS0tLS10aGlzIHNhIGlkIGlzIGZvciB1cGxvYWQgY2VydGlmaWNhdGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4uYnRubXtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGhpcyBpcyBmb3IgbmV4dCBidXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBcclxufVxyXG4uYnRubTF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMgaXMgZm9yIG5leHQgYnV0dG9uIGluIGVkdWNhdGlvbmFsIGRldGFpbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgICBcclxufVxyXG4uYnRucHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGhpcyBpcyBmb3IgcHJldmlvdXMgYnV0dG9uIGluIGVkdWNhdGlvbmFsIGRldGFpbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIHdpZHRoOiAxNSU7XHJcbiAgIG1hcmdpbi10b3A6IDAlO1xyXG4gIFxyXG59XHJcbi5idG5wMXtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGhpcyBpcyBmb3IgcHJldmlvdXMgYnV0dG9uIGluIGV4cGVyaWVuY2UgZGV0YWlscy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgIG1hcmdpbi1sZWZ0OiAtMzYwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIHdpZHRoOiAxOCU7XHJcbiAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICBoZWlnaHQ6IDQwcHg7XHJcbiAgXHJcbn1cclxuI2FueWRlZ3JlZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLmJ0bjF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tVGhpcyBpcyBmb3Igc3VibWl0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6MTUlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG4uY2xvc2UtaWNvbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCAwJSB0cmFuc3BhcmVudCA0NiVcclxuICAgIHdoaXRlIDQ2JSB3aGl0ZSA1NiUgdHJhbnNwYXJlbnQgNTYlIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuKi9cclxuXHJcbi5yb3cgLnJlZ2lzdGVyMy1mb3Jte1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDc2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgIFxyXG59XHJcbiNleHBlcmllbmNlX2NhdGVnb3J5MXtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLSBleHBlcmllbmNlX2NhdGVnb3J5MSAgbGFiZWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG4jY29tcGFueWRldGFpbHN7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0gY29tcGFueWRhZXRhaWxzICBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIFxyXG59XHJcbi5idG5hZGR7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgY29tcGFueSBCdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cgLnJlZ2lzdGVyNC1mb3Jte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ucm93IC5yZWdpc3RlcjUtZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4OyBcclxufVxyXG4ucm93IC5yZWdpc3RlcjYtZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgXHJcbiAgIFxyXG59XHJcblxyXG4ucm93IC5yZWdpc3RlcjctZm9ybXtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbiNyZWxhdmVudGNvbXBhbnlkZXRhaWxze1xyXG4vKi0tLS0tLS0tLS0tLS0tLS1SZWxhdmVudCBjb21wYW55ZGFldGFpbHMgIGxhYmVsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbm1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRucmVse1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQWRkIFJlbGF2ZW50Y29tcGFueSBCdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgIH1cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnJlZ2lzdGVye1xyXG4gd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAyNTBweDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxufVxyXG4jcmVnaXN0ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5sYWJlbHtcclxuXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG59XHJcbiNuYW1le1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4ucmVnaXN0ZXIgaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxNDcsIDIzOCk7XHJcbn1cclxuI3N1YntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIH1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIl19 */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------------------------------------->\n<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register-form\">\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label for=\"firstName\" style=\"color:blue\"> First Name * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter Your First Name\"\n                        name=\"firstName\" formControlName=\"firstName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.firstName.errors && (reactiveForm.controls.firstName.touched || reactiveForm.controls.firstName.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','firstName')\"> FirstName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','firstName')\"> FirstName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','firstName')\"> FirstName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"lastName\" style=\"color:blue\"> LastName * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Your astName\"\n                        name=\"lastName\" formControlName=\"lastName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.lastName.errors && (reactiveForm.controls.lastName.touched || reactiveForm.controls.lastName.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','lastName')\"> LastName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','lastName')\"> LastName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','lastName')\"> LastName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"username\" style=\"color:blue\"> email * </label>\n                      <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Enter Your email\"\n                        name=\"username\" formControlName=\"username\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.username.errors && (reactiveForm.controls.username.touched || reactiveForm.controls.username.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','username')\"> email is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','username')\"> email is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"password\" style=\"color:blue\"> password * </label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your password\"\n                        name=\"password\" formControlName=\"password\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.password.errors && (reactiveForm.controls.password.touched || reactiveForm.controls.password.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','password')\"> password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','password')\"> password is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','password')\"> password is must be 6 min</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','password')\"> password is must be 10 max</div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> Gender * </label> <br>\n                      <label for=\"gender\" style=\"color:blue\">Male</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Male\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Female</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Female\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Others</label>\n                      <input class=\"radio\" type=\"radio\" value=\"Others\" formControlName=\"gender\">\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"address\" style=\"color:blue\"> address * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Enter Your address\"\n                        name=\"address\" formControlName=\"address\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','address')\"> address is Required</div>\n\n                        <div *ngIf=\"reactiveForm.hasError('minlength','address')\"> address is must be 10 cha min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"phoneNumber\" style=\"color:blue\"> phoneNumber * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"Enter Your phoneNumber\"\n                        name=\"phoneNumber\" formControlName=\"phoneNumber\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','phoneNumber')\"> phoneNumber is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n\n                    <p>\n                      <button class=\"btnm btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                    </p>\n\n\n\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Educational Details</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-2 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-10 register-right\">\n\n\n\n                <div class=\"row register-form\">\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"board1\" style=\"color:blue\">\n                      <label>SSC Board *</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n\n                      <select class=\"form-control\" id=\"board\" formControlName=\"board\">\n                        <option *ngFor=\"let board of boards\" [value]=\"board.id\">{{board.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_percentage\" placeholder=\"ssc%\"\n                        name=\"ssc_percentage\" formControlName=\"ssc_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_percentage.errors && (reactiveForm.controls.ssc_percentage.touched || reactiveForm.controls.ssc_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_percentage')\"> ssc% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_percentage')\"> ssc% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_percentage')\"> ssc% is must be 3max</div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school\" placeholder=\"schoolName\" name=\"ssc_school\"\n                        formControlName=\"ssc_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school.errors && (reactiveForm.controls.ssc_school.touched || reactiveForm.controls.ssc_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school')\"> schoolName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school')\"> schoolName is invalid</div>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school_location\" placeholder=\"location\"\n                        name=\"ssc_school_location\" formControlName=\"ssc_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school_location.errors && (reactiveForm.controls.ssc_school_location.touched || reactiveForm.controls.ssc_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school_location')\"> location is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school_location')\"> schoollocation is invalid\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_passed_out_year\" placeholder=\"Passed out Year\"\n                        name=\"ssc_passed_out_year\" formControlName=\"ssc_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_passed_out_year.errors && (reactiveForm.controls.ssc_passed_out_year.touched || reactiveForm.controls.ssc_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_passed_out_year')\"> Invalid Year</div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-5\" id=\"sscupload\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload SSC</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSsc($event)\">\n                    </div>\n                  </div>\n\n                </div>\n             \n\n                <div class=\"row register1-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"inter_category1\" style=\"color:blue\">\n                      <label>IPE/Diploma *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n\n                      <select class=\"form-control\" id=\"inter_category\" formControlName=\"inter_category\">\n                        <option *ngFor=\"let inter_category of inter_categories\" [value]=\"inter_category.id\">\n                          {{inter_category.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_percentage\" placeholder=\"%\"\n                        name=\"inter_percentage\" formControlName=\"inter_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_percentage.errors && (reactiveForm.controls.inter_percentage.touched || reactiveForm.controls.inter_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_percentage')\"> IPE/DIP% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_percentage')\"> IPE/DIP% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_percentage')\"> IPE/DIP% is must be 3max\n                        </div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school\" placeholder=\"collegeName\"\n                        name=\"inter_school\" formControlName=\"inter_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school.errors && (reactiveForm.controls.inter_school.touched || reactiveForm.controls.inter_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school')\"> collegeName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school')\"> collegeName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school_location\" placeholder=\"location\"\n                        name=\"inter_school_location\" formControlName=\"inter_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school_location.errors && (reactiveForm.controls.inter_school_location.touched || reactiveForm.controls.inter_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school_location')\"> collegelocation is\n                          Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school_location')\"> collegelocation is\n                          Invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_passed_out_year\" placeholder=\"Passed out Year\"\n                        name=\"inter_passed_out_year\" formControlName=\"inter_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_passed_out_year.errors && (reactiveForm.controls.inter_passed_out_year.touched || reactiveForm.controls.inter_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_passed_out_year')\"> Invalid Year</div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-5\" id=\"ipeupload\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload IPE/DIP</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileIpe($event)\">\n                    </div>\n                  </div>\n\n                </div>\n\n\n  \n\n                <div class=\"row register2-form\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"anydegree\" style=\"color:blue\">\n                      <label>UG Degree *</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"ugCourse\" style=\"color:blue\"> Course:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\"\n                        formControlName=\"ugCourse\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugCourse')\">\n                          Course is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                          Course is Invalid Format\n                        </div>\n\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"ugSpecialization\" style=\"color:blue\"> Speciliazation:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                        formControlName=\"ugSpecialization\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugSpecialization')\">\n                          Speciliazation is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                          Speciliazation is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"university_or_institute\" style=\"color:blue\"> University:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"university_or_institute\"\n                        name=\"university_or_institute\" formControlName=\"university_or_institute\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','university_or_institute')\">\n                          university is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n                  \n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> courseType * </label> <br>\n                      <label for=\"courseType\" style=\"color:blue\">Full Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Part Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Correspondece</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                    </div>\n\n\n\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"passed_out_year\" style=\"color:blue\"> Passed Out year:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                        formControlName=\"passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','passed_out_year')\">\n                          Passed Out Year is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                          Year is Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','passed_out_year')\">\n                          Year is Invalid\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\">Grading System *</label><br>\n                      <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                        <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"marks\" style=\"color:blue\"> Marks:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','marks')\">\n                          Marks is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                          Marks is Invalid Format\n                        </div>\n\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','marks')\">\n                          Marks is Invalid\n                        </div>\n\n\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n                 \n\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" id=\"sa\">\n                      <label for=\"file\" style=\"color:blue\">Upload Degree Certificate</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n                  \n\n                </div>\n\n                <div class=\"row register8-form\">\n\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label  style=\"color:blue\"> Skills </label> <br>\n                      <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\" formControlName=\"skills\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"/>\n                     \n                     \n                      <!-- <div\n                      *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                      style=\"color:red\">\n                    </div> -->\n\n                  </div>\n                </div>\n\n\n                </div>\n\n\n\n\n\n\n\n                \n\n                <button class=\"btnp btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n\n                <button class=\"btnm1 btn-primary\" (click)=\"t.select('tab-selectbyid3')\">Next</button>\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n    <ngb-tab id=\"tab-selectbyid3\">\n      <ng-template ngbTabTitle>Experience Details</ng-template>\n      <ng-template ngbTabContent>\n\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register3-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"experience_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label style=\"color:blue\">Experience *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"total_experience_in_years\" name=\"total_experience_in_years\"\n                        class=\"form-control\" placeholder=\"Total Experience\" formControlName=\"total_experience_in_years\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.total_experience_in_years.errors && \n                                  (reactiveForm.controls.total_experience_in_years.touched || reactiveForm.controls.total_experience_in_years.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_years')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','total_experience_in_years')\">Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','total_experience_in_years')\">Invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"total_experience_in_months\" name=\"total_experience_in_months\"\n                        class=\"form-control\" placeholder=\"Total Months\" formControlName=\"total_experience_in_months\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.total_experience_in_months.errors && \n                               (reactiveForm.controls.total_experience_in_months.touched || reactiveForm.controls.total_experience_in_months.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','total_experience_in_months')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','total_experience_in_months')\">invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','total_experience_in_months')\">invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n\n\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\" id=\"companydetails\" style=\"color:rgb(240, 15, 191)\">\n                    <label style=\"color:blue\">Company Details *</label>\n                  </div>\n                </div>\n\n\n\n                <div formArrayName=\"companies\" *ngFor=\"let company of reactiveForm.get('companies').controls;\n    let i=index\">\n                  <hr *ngIf=\"i>0\">\n                  <div [formGroupName]=\"i\">\n\n\n                    <div class=\"row register4-form\">\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"companyName\" style=\"color:blue\">Company name:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'companyName'+i\"\n                            placeholder=\"Enter Company Name\" formControlName=\"companyName\">\n                          <span class=\"help-block\" *ngIf=\"company.get('companyName').errors?.required \n           && company.get('companyName').touched\" style=\"color:red\">\n                            Company Name required\n                          </span>\n                        </div>\n                      </div>\n\n\n\n                      <div class=\"col-md-5\" *ngIf=\"i>0\">\n                        <button type=\"button\" class=\"btn btn-primary btn-md pull-right\" title=\"Delete companies\"\n                          (click)=\"removeCompany(i)\">\n\n                          <span class=\"glyphicon glyphicon-remove\">\n\n                          </span>\n                        </button>\n                      </div>\n\n                      \n                      <div class=\"col-md-5\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"designation\" style=\"color:blue\">Designation:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'designation'+i\" placeholder=\"Enter Designation\"\n                            formControlName=\"designation\">\n                          <span class=\"help-block\" *ngIf=\"company.get('designation').errors?.required \n           && company.get('designation').touched\" style=\"color:red\">\n                            Designation required\n                          </span>\n                        </div>\n                      </div>\n                    \n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"duration_from\" style=\"color:blue\">From:</label>\n\n                          <input type=\"text\" class=\"form-control\" [id]=\"'duration_from'+i\" placeholder=\"From\"\n                            formControlName=\"duration_from\">\n                          <span class=\"help-block\" *ngIf=\"company.get('duration_from').errors?.required \n           && company.get('duration_from').touched\" style=\"color:red\">\n                            duration_from required\n                          </span>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"duration_to\" style=\"color:blue\">To:</label>\n\n                          <input type=\"text\" class=\"form-control\" [id]=\"'duration_to'+i\" placeholder=\"To\"\n                            formControlName=\"duration_to\">\n                          <span class=\"help-block\" *ngIf=\"company.get('duration_to').errors?.required \n               && company.get('duration_to').touched\" style=\"color:red\">\n                            duration_from required\n                          </span>\n                        </div>\n\n                      </div>\n\n\n\n\n\n                      <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label\" [attr.for]=\"responsibility\"\n                            style=\"color:blue\">responsibility:</label>\n                          <input type=\"text\" class=\"form-control\" [id]=\"'responsibility'+i\"\n                            placeholder=\"Enter responsibility\" formControlName=\"responsibility\">\n                          <span class=\"help-block\" *ngIf=\"company.get('responsibility').errors?.required \n                   && company.get('responsibility').touched\" style=\"color:red\">\n                            responsibility required\n                          </span>\n                        </div>\n                      </div>\n\n                      \n\n                    </div>\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n\n                    <button type=\"button\" class=\"btnadd btn-primary\" (click)=\"addCompanyButtonClick()\">Add\n                      Company</button>\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"row register4-form\">\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_skills\" name=\"relevant_skills\" class=\"form-control\"\n                        placeholder=\"relevant_skills\" formControlName=\"relevant_skills\">\n                      <div *ngIf=\"reactiveForm.controls.relevant_skills.errors && \n                      (reactiveForm.controls.relevant_skills.touched || reactiveForm.controls.relevant_skills.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_skills')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_skills')\"> Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_skills')\"> Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_experience_in_years\" name=\"relevant_experience_in_years\"\n                        class=\"form-control\" placeholder=\"relevant_experience_in_years\"\n                        formControlName=\"relevant_experience_in_years\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.relevant_experience_in_years.errors && \n                               (reactiveForm.controls.relevant_experience_in_years.touched || reactiveForm.controls.relevant_experience_in_years.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_years')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_experience_in_years')\"> Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_experience_in_years')\"> Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"relevant_experience_in_months\" name=\"relevant_experience_in_months\"\n                        class=\"form-control\" placeholder=\"relevant_experience_in_months\"\n                        formControlName=\"relevant_experience_in_months\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.relevant_experience_in_months.errors && \n                   (reactiveForm.controls.relevant_experience_in_months.touched || reactiveForm.controls.relevant_experience_in_months.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','relevant_experience_in_months')\">Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','relevant_experience_in_months')\">Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','relevant_experience_in_months')\">Invalid</div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                </div>\n\n\n\n<!-----------------------------------------------------------------------------------------------------\n\n<div class=\"col-md-12\">\n    <div class=\"form-group\" id=\"relaventcompanydetails\" style=\"color:blue\">\n      <label> Relavent Company Details *</label>\n    </div>\n  </div>\n\n\n  <div formArrayName=\"relevant_skills_companies\" *ngFor=\"let Relevantcompany of reactiveForm.get('relevant_skills_companies').controls;\n  let i=index\">\n  <hr *ngIf=\"i>0\">\n    <div [formGroupName]=\"i\">\n\n\n      <div class=\"row register5-form\">\n\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <label class=\"control-label\"\n                  [attr.for]=\"companyName\" style=\"color:blue\">Company name:</label>            \n                  <input type=\"text\" class=\"form-control\" [id]=\"'companyName'+i\" placeholder=\"Enter Company Name\" \n                  formControlName=\"companyName\">\n                 <span class=\"help-block\" *ngIf=\"Relevantcompany.get('companyName').errors?.required \n                 && Relevantcompany.get('companyName').touched\" style=\"color:red\">\n                   Relavent Company Name required\n                  </span>\n                </div>\n              </div>\n\n\n\n\n              <div class=\"col-md-5\" *ngIf=\"i>0\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md pull-right\"\n                  title=\"Delete Relevantcompanies\" (click)=\"removeRelevantCompany(i)\">\n        \n                  <span class=\"glyphicon glyphicon-remove\">\n        \n                  </span>\n                  </button>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\"\n                        [attr.for]=\"designation\" style=\"color:blue\">Designation:</label>            \n                        <input type=\"text\" class=\"form-control\" [id]=\"'designation'+i\" placeholder=\"Enter designation\" \n                        formControlName=\"designation\">\n                       <span class=\"help-block\" *ngIf=\"Relevantcompany.get('designation').errors?.required \n                       && Relevantcompany.get('designation').touched\" style=\"color:red\">\n                       designation required\n                        </span>\n                      </div>\n                    </div>\n      \n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\"\n                            [attr.for]=\"duration_from\" style=\"color:blue\">From:</label>            \n                            <input type=\"text\" class=\"form-control\" [id]=\"'duration_from'+i\" placeholder=\"Enter duration_from\" \n                            formControlName=\"duration_from\">\n                           <span class=\"help-block\" *ngIf=\"Relevantcompany.get('duration_from').errors?.required \n                           && Relevantcompany.get('duration_from').touched\" style=\"color:red\">\n                           duration_from required\n                            </span>\n                          </div>\n                        </div>\n          \n\n\n\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <label class=\"control-label\"\n                              [attr.for]=\"duration_to\" style=\"color:blue\">To:</label>            \n                              <input type=\"text\" class=\"form-control\" [id]=\"'duration_to'+i\" placeholder=\"Enter duration_to\" \n                              formControlName=\"duration_to\">\n                             <span class=\"help-block\" *ngIf=\"Relevantcompany.get('duration_to').errors?.required \n                             && Relevantcompany.get('duration_to').touched\" style=\"color:red\">\n                             duration_to required\n                              </span>\n                            </div>\n                          </div>\n            \n\n\n                          <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\"\n                                [attr.for]=\"responsibility\" style=\"color:blue\">Responsibility:</label>            \n                                <input type=\"text\" class=\"form-control\" [id]=\"'responsibility'+i\" placeholder=\"Enter responsibility\" \n                                formControlName=\"responsibility\">\n                               <span class=\"help-block\" *ngIf=\"Relevantcompany.get('responsibility').errors?.required \n                               && Relevantcompany.get('responsibility').touched\" style=\"color:red\">\n                               Responsibility required\n                                </span>\n                              </div>\n                            </div>\n\n\n\n                            <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n        \n                               <button type=\"button\" class=\"btnrel btn-primary\"\n                                              (click)=\"addRelevantCompanyButtonClick()\">Add Relavent Company</button>\n                             \n                                            </div>\n                                 </div>\n  \n                            \n  \n\n\n\n\n</div>\n</div>\n</div>\n--------------------------------------------------------------------------------------------------------->\n\n\n\n                <div class=\"row register6-form\">\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"current_ctc\" name=\"current_ctc\" class=\"form-control\"\n                        placeholder=\"current_ctc\" formControlName=\"current_ctc\">\n                      <div *ngIf=\"reactiveForm.controls.current_ctc.errors && \n                          (reactiveForm.controls.current_ctc.touched || reactiveForm.controls.current_ctc.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','current_ctc')\"> Required </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','current_ctc')\"> Invalid Format </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','current_ctc')\"> Invalid </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"noticePeriod_in_days\" name=\"noticePeriod_in_days\" class=\"form-control\"\n                        placeholder=\"noticePeriod_in_days\" formControlName=\"noticePeriod_in_days\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.noticePeriod_in_days.errors && \n                          (reactiveForm.controls.noticePeriod_in_days.touched || reactiveForm.controls.noticePeriod_in_days.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','noticePeriod_in_days')\"> Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','noticePeriod_in_days')\"> Invalid Format</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','noticePeriod_in_days')\"> Invalid </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                </div>\n\n                <div class=\"row register7-form\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Offer Letter</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileofferletter($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Appointment Letter</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileappoinment_letter($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Payslips</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFilepayslips($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n                </div>\n\n          \n\n                <button type=submit class=\"btn1 btn-primary\" (click)=\"registerUser(reactiveForm)\"> Submit </button>\n\n                <button class=\"btnp1 btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Previous</button>\n\n\n              </div>\n\n\n            </div>\n          </form>\n        </div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!----------------------------------------------------      \n                <div class=\"container reactiveform\">\n\n                  <form [formGroup]=\"nestedReactiveForm\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div formArrayName=\"companydetails\">\n\n                          <div [formGroupName]=\"i\"\n                            *ngFor=\"let reactiveForm of nestedReactiveForm.controls.companydetails.controls; let i= index\">\n\n\n                            <div class=\"form-group\">\n                              <label class=\"control-label\"><span style=\"color:red;\"> Companies {{i+1}}</span></label>\n                              <a href=\"javascript:void(0)\" class=\"close-icon\"\n                                *ngIf=\"nestedReactiveForm.controls.companydetails.length > 1\"\n                                (click)=\"removeSelectedForm(i)\"></a>\n                            </div>\n\n\n                            <div class=\"row reactive\">\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\" rcompanyname\">Companyname:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\" rcompanyname\" name=\" rcompanyname\"\n                                    formControlName=\" rcompanyname\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls. rcompanyname.errors && (reactiveForm.controls. rcompanyname.touched || reactiveForm.controls. rcompanyname.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rcompanyname')\">\n                                      companyname is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rcompanyname')\">\n                                      companyname is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\"rdesignation\">designation:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\"rdesignation\" name=\"rdesignation\"\n                                    formControlName=\"rdesignation\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls.rdesignation.errors && (reactiveForm.controls.rdesignation.touched || reactiveForm.controls.rdesignation.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rdesignation')\">\n                                      designation is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rdesignation')\">\n                                      designation is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-8\">\n\n                                <div class=\"form-group\">\n                                  <label for=\"rresponsibility\">responsibility:</label>\n                                  <input type=\"text\" class=\"form-control\" id=\"rresponsibility\" name=\"rresponsibility\"\n                                    formControlName=\"rresponsibility\">\n                                  <div\n                                    *ngIf=\"reactiveForm.controls.rresponsibility.errors && (reactiveForm.controls.rresponsibility.touched || reactiveForm.controls.rresponsibility.dirty)\"\n                                    style=\"color:red\">\n                                    <div *ngIf=\"reactiveForm.hasError('required','rresponsibility')\">\n                                      responsibility is Required\n                                    </div>\n                                    <div *ngIf=\"reactiveForm.hasError('pattern','rresponsibility')\">\n                                      responsibility is Invalid Format\n                                    </div>\n\n                                  </div>\n\n                                </div>\n                              </div>\n\n\n\n\n                              <button type=submit class=\"btn btn-primary\" style=\"float:right;\" (click)=\"addNewForm()\">\n                                Add </button>\n\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                  </form>\n                </div>\n\n\n                \n\n\n\n                <div class=\"row register-form\">\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Relavent Experience *</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"years\" name=\"years\" placeholder=\"years\" class=\"form-control\">\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" id=\"months\" name=\"months\" placeholder=\"months\" class=\"form-control\">\n                    </div>\n                  </div>\n\n\n\n                </div>\n--------------------------------------------------->\n\n<!------------------------------------------------------------------------------------\n\n                <div class=\"row1 register-form\">\n                  <div class=\"container reactiveform\">\n\n                    <form [formGroup]=\"nestedReactiveForm\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div formArrayName=\"companydetails\">\n\n                            <div [formGroupName]=\"i\"\n                              *ngFor=\"let reactiveForm of nestedReactiveForm.controls.companydetails.controls; let i= index\">\n\n\n                              <div class=\"form-group\">\n                                <label class=\"control-label\"><span style=\"color:red;\">Relevant Companies\n                                    {{i+1}}</span></label>\n                                <a href=\"javascript:void(0)\" class=\"close-icon\"\n                                  *ngIf=\"nestedReactiveForm.controls.companydetails.length > 1\"\n                                  (click)=\"removeSelectedForm(i)\"></a>\n                              </div>\n\n\n                              <div class=\"row reactive\">\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"companyname\">Companyname:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"companyname\" name=\"companyname\"\n                                      formControlName=\"companyname\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.companyname.errors && (reactiveForm.controls.companyname.touched || reactiveForm.controls.companyname.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','companyname')\">\n                                        companyname is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','companyname')\">\n                                        companyname is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"designation\">designation:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"designation\" name=\"designation\"\n                                      formControlName=\"designation\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.designation.errors && (reactiveForm.controls.designation.touched || reactiveForm.controls.designation.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','designation')\">\n                                        designation is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','designation')\">\n                                        designation is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-8\">\n\n                                  <div class=\"form-group\">\n                                    <label for=\"responsibility\">responsibility:</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"responsibility\" name=\"responsibility\"\n                                      formControlName=\"responsibility\">\n                                    <div\n                                      *ngIf=\"reactiveForm.controls.responsibility.errors && (reactiveForm.controls.responsibility.touched || reactiveForm.controls.responsibility.dirty)\"\n                                      style=\"color:red\">\n                                      <div *ngIf=\"reactiveForm.hasError('required','responsibility')\">\n                                        responsibility is Required\n                                      </div>\n                                      <div *ngIf=\"reactiveForm.hasError('pattern','responsibility')\">\n                                        responsibility is Invalid Format\n                                      </div>\n\n                                    </div>\n\n                                  </div>\n                                </div>\n\n\n\n\n                                <button type=submit class=\"btn btn-primary\" style=\"float:right;\" (click)=\"addNewForm()\">\n                                  Add </button>\n\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n\n\n\n\n                    </form>\n                  </div>\n                \n\n                </div>\n\n                ----------------------------------------------------------------------------------->"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience.service */ "./src/app/experience.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var skills = ['Angular js', 'Anjuar 1', 'Angular 2', 'Angular 3', 'Angular 4', 'Angular 5', 'Angular 6',
    'Java', 'Java Script', 'Advanced Java', '.net', 'Frame Work', 'php',
    'Html5', 'css3', 'Bootstrap 4', 'ng bootstrap', 'Sql', 'Mysql', 'Oracle', 'plsql', 'Devopps', 'Service Now',
    'tablue', 'muelsoft', 'spring boot', 'spring tools', 'springs', 'aws', 'inframatica', 'sap',
    ' sap fico', 'testing', 'manual testing', 'selinium testing', 'digital marketing', 'python', 'A.I (Artificial Intelligence)', 'V.R (Virtual Reality)',
    'A.R (Augmented Reality)', 'Robots', 'Data Science', 'Big Data and Cloud Computing', 'REACT', 'EXPRESS.JS', 'NODE.JS', 'Automation',
    'MicroServices', 'Blockchain', 'eCommerce', 'Animation', '3-D printing', 'Networking', 'Cloud Computing', 'Hadoop',
    'RPA', ' Network APIs', 'ERP systems', 'Cyber Security'];
var ExperienceComponent = /** @class */ (function () {
    /*
      model: any = {}
      */
    function ExperienceComponent(config, fb, experienceService) {
        this.fb = fb;
        this.experienceService = experienceService;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term.length < 2 ? []
                : skills.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        /*
        nestedReactiveForm: any = FormGroup;
        */
        this.userFile = File;
        this.userFiles = FileList;
        this.boards = [{ 'id': 'CBSE', 'name': 'CBSE' }, { 'id': 'ICSE', 'name': 'ICSE' }, { 'id': 'IB', 'name': 'IB' }, { 'id': 'STATEBOARD', 'name': 'STATEBOARD' }];
        this.inter_categories = [{ 'id': 'IPE', 'name': 'IPE' }, { 'id': 'DIP', 'name': 'DIP' }];
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
        config.justify = 'center';
        config.type = 'pills';
        /*
        this.nestedReactiveForm = this.fb.group({
          companydetails: this.fb.array([this.companydetails()])
        });
        */
    }
    ExperienceComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileSsc = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileIpe = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    ExperienceComponent.prototype.onSelectFileofferletter = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFileappoinment_letter = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    ExperienceComponent.prototype.onSelectFilepayslips = function (event) {
        var file = event.target.files[0];
        this.userFiles = file;
    };
    /*
    companydetails(): FormGroup {
      return this.fb.group({
       
        companyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        designation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        responsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rcompanyname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rdesignation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        rresponsibility: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
  
      })
    }
    
   
    addNewForm(): void {
      const control = this.nestedReactiveForm.controls.companydetails;
      control.push(this.companydetails());
    }
  
    removeSelectedForm(index: number): void {
      const control = this.nestedReactiveForm.controls.companydetails;
      control.removeAt(index);
    }
  
  */
    ExperienceComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
                ])]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ssc_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            ssc_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            inter_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            inter_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            inter_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            total_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            relevant_experience_in_years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            relevant_experience_in_months: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            relevant_skills: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            current_ctc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9kK]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            noticePeriod_in_days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            companies: this.fb.array([
                this.addCompanies()
            ]),
        });
    };
    ExperienceComponent.prototype.addCompanies = function () {
        return this.fb.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsibility: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ExperienceComponent.prototype.addCompanyButtonClick = function () {
        this.reactiveForm.get('companies').push(this.addCompanies());
    };
    ExperienceComponent.prototype.removeCompany = function (companyIndex) {
        this.reactiveForm.get('companies').removeAt(companyIndex);
    };
    /*----------------------
      addRelevantCompanies():FormGroup{
        return this.fb.group({
          companyName:['',Validators.required],
          designation:['',Validators.required],
          duration_from:['',Validators.required],
          duration_to:['',Validators.required],
          responsibility:['',Validators.required]
        })
      }
    
      addRelevantCompanyButtonClick():void{
      (<FormArray>this.reactiveForm.get('relevant_skills_companies')).push(this.addRelevantCompanies());
      }
    
      removeRelevantCompany(RelevantcompanyIndex:number){
       (<FormArray>this.reactiveForm.get('relevant_skills_companies')).removeAt(RelevantcompanyIndex);
      }
    
    ------------------------------*/
    ExperienceComponent.prototype.registerUser = function (submitForm) {
        if (submitForm.valid) {
            var user = submitForm.value;
            var formData = new FormData();
            formData.append('user', JSON.stringify(user));
            formData.append('file', this.userFile);
            //formData.append('files',this.userFiles);
            this.experienceService.registerFresher(formData).subscribe((function (response) {
                console.log(response);
            }));
        }
        else {
            this.validateFormFields(submitForm);
        }
        /* this.fresherService.registerFresher
           this.firstname,
           this.lastname
         ).subscribe(
           data => {
             alert("data submitted successfully" + data);
             console.log(data);
           }
         );*/
    };
    ExperienceComponent.prototype.validateFormFields = function (submitForm) {
        Object.keys(submitForm.controls).forEach(function (field) {
            var control = submitForm.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({
                    onlySelf: true
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "firstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "lastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "gender", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExperienceComponent.prototype, "phoneNumber", void 0);
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetConfig"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _experience_service__WEBPACK_IMPORTED_MODULE_3__["ExperienceService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " a{\r\n     text-decoration: none;\r\n     outline: none;\r\n }\r\n .footer-main-div{\r\n     width: 100%;\r\n     height: auto;\r\n     margin: auto;\r\n    /* background: dodgerblue;*/\r\n     padding: 20px 0px;\r\n }\r\n .footer-social-icons{\r\n     width: 100%;\r\n     height: auto;\r\n     margin: auto;\r\n }\r\n .footer-social-icons ul{\r\n     margin: 0px;\r\n     padding: 0px;\r\n     text-align: center;\r\n }\r\n .footer-social-icons ul li{\r\n     display: inline-block;\r\n     width: 50px;\r\n     height: 50px;\r\n     margin: 0px 10px;\r\n     border-radius: 100%;\r\n     background: darkslategray;\r\n }\r\n .footer-social-icons ul li a{\r\n     color: aliceblue;\r\n     font-size: 25px;\r\n     display: block;\r\n }\r\n .footer-social-icons ul li a i{\r\n   line-height: 50px; \r\n}\r\n .footer-menu-one{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\r\n .footer-menu-one ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n .footer-menu-one ul li{\r\n    display: inline-block;\r\n    margin: 0px 20px;\r\n}\r\n .footer-menu-one ul li a{\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    letter-spacing: 1px;\r\n}\r\n .footer-bottom{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n    background:darkslategray;\r\n    padding: 5px; \r\n}\r\n .footer-bottom p{\r\n    font-family: arial;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n .footer-bottom p a{\r\n     color: #fff;\r\n }\r\n /*---------------------------------------------------\r\n #footer{\r\n    background: dodgerblue;\r\n    color: #fff;\r\n    padding: 20px;\r\n}\r\n.fa-heart-o{\r\n    margin: 3px;\r\n    color: red;\r\n}---------*/\r\n /*--------------------------------------------------------------------------------------*/\r\n img{\r\n    width: 100px;\r\n    height: 90px;\r\n}\r\n .blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n\r\n}\r\n @-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n @keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n .carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n .carousel-item{\r\npadding: 5px;\r\n}\r\n .btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0tBQ0ksc0JBQXNCO0tBQ3RCLGNBQWM7RUFDakI7Q0FDRDtLQUNJLFlBQVk7S0FDWixhQUFhO0tBQ2IsYUFBYTtJQUNkLDRCQUE0QjtLQUMzQixrQkFBa0I7RUFDckI7Q0FDRDtLQUNJLFlBQVk7S0FDWixhQUFhO0tBQ2IsYUFBYTtFQUNoQjtDQUNEO0tBQ0ksWUFBWTtLQUNaLGFBQWE7S0FDYixtQkFBbUI7RUFDdEI7Q0FDRDtLQUNJLHNCQUFzQjtLQUN0QixZQUFZO0tBQ1osYUFBYTtLQUNiLGlCQUFpQjtLQUNqQixvQkFBb0I7S0FDcEIsMEJBQTBCO0VBQzdCO0NBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsZ0JBQWdCO0tBQ2hCLGVBQWU7RUFDbEI7Q0FDRDtHQUNFLGtCQUFrQjtDQUNwQjtDQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0NBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtDQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtDQUNwQjtDQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtDQUN2QjtDQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7Q0FDaEI7Q0FDRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0NBQ0E7S0FDSSxZQUFZO0VBQ2Y7Q0FNRDs7Ozs7Ozs7O1lBU1c7Q0FJWiwwRkFBMEY7Q0FFMUY7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtDQUNEO0lBQ0ksOENBQThDO0lBRTlDLHNDQUFzQzs7Q0FFekM7Q0FDRDtJQUNJLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7Q0FDcEI7Q0FNRDtJQUNJLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7Q0FDcEI7Q0FFRDtJQUNJLFNBQVM7SUFDVCxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixvQ0FBb0M7Ozs7SUFJcEMsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0QjtDQUNEO0FBQ0EsYUFBYTtDQUNaO0NBR0Q7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgYXtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuIH1cclxuIC5mb290ZXItbWFpbi1kaXZ7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7Ki9cclxuICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuIH1cclxuIC5mb290ZXItc29jaWFsLWljb25ze1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiB9XHJcbiAuZm9vdGVyLXNvY2lhbC1pY29ucyB1bHtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmZvb3Rlci1zb2NpYWwtaWNvbnMgdWwgbGl7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogZGFya3NsYXRlZ3JheTtcclxuIH1cclxuIC5mb290ZXItc29jaWFsLWljb25zIHVsIGxpIGF7XHJcbiAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcbiAuZm9vdGVyLXNvY2lhbC1pY29ucyB1bCBsaSBhIGl7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1MHB4OyBcclxufVxyXG4uZm9vdGVyLW1lbnUtb25le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb290ZXItbWVudS1vbmUgdWx7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyLW1lbnUtb25lIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG4uZm9vdGVyLW1lbnUtb25lIHVsIGxpIGF7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5mb290ZXItYm90dG9te1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOmRhcmtzbGF0ZWdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7IFxyXG59XHJcbi5mb290ZXItYm90dG9tIHB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiAuZm9vdGVyLWJvdHRvbSBwIGF7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICNmb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5mYS1oZWFydC1ve1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59LS0tLS0tLS0tKi9cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLmJsaW5re1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm90dG9tOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAxMjcsIDIyMSwgMC40KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmNhcm91c2VsLWl0ZW17XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-main-div bg-primary\">\n   <div class=\"footer-social-icons\">\n        <ul>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-google-plus\"></i></a></li>\n          <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-youtube\"></i></a></li>\n        </ul>\n   </div>\n   <div class=\"footer-menu-one\">\n      <ul>\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">About Us</a></li>\n        <li><a href=\"#\">Services</a></li>\n        <li><a href=\"#\">Products</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n      </ul>\n   </div>\n<!------------------------------------------------------------------------------>\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n      \n     <div class=\"container\">\n <!-------------------------------------    \n<span class=\"blink\">\n  ----------------------------------------->\n\n    <div class=\"carousel-item active\">\n        \n      <img src=\"assets/bha.png\">\n      <img src=\"assets/info.jpg\">\n      <img src=\"assets/ama.jpg\">\n     \n      <img src=\"assets/lti.png\">\n      <img src=\"assets/meg.jpg\">\n      <img src=\"assets/ora.png\">\n      <img src=\"assets/vir.png\">\n      <img src=\"assets/cyi.png\">\n      <img src=\"assets/wip.png\">\n      <img src=\"assets/tcs.jpg\">\n      <img src=\"assets/cog.png\">\n     \n    </div>\n\n    <div class=\"carousel-item\">\n       <img src=\"assets/bha.png\">\n       <img src=\"assets/info.jpg\">\n       <img src=\"assets/cog.png\">\n       <img src=\"assets/meg.jpg\">\n       <img src=\"assets/ama.jpg\">\n       <img src=\"assets/cyi.png\">\n       <img src=\"assets/hcl.jpg\">\n       <img src=\"assets/hp.png\">\n       <img src=\"assets/wip.png\">\n       <img src=\"assets/ora.png\">\n       <img src=\"assets/vir.png\">\n     \n     \n      \n    </div>\n  <!----------------------------- \n   </span>\n------------------------------>\n   </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n \n  \n</div>\n\n\n\n\n\n\n<!--------------------------------------------------------------------------------->\n</div>\n<div class=\"footer-bottom\">\n    <p>Copy Right by:<a href=\"#\">@Sahiudhyogh </a></p>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-----------------------Footer----------------------\n  <section id=\"footer\">\n    <div class=\"container text-center\">\n       <p> Sahiudhyogh <i class=\"fa fa-heart-o\"></i></p>\n    </div>\n  </section>\n  ---------------->\n  <!-----------------------Footer End-----------------------\n  <script src=\"C:\\Users\\yes boss\\Desktop\\website.js\"></script>\n  <script>\n  var scroll =  new SmoothScroll('a[href*=\"#\"]');\n  </script>\n  --->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n    height: 20%;\r\n    padding-bottom: 13%;\r\n}\r\n\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 10px auto;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .card-wrapper {\r\n\twidth: 350px;\r\n}\r\n\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n\t.my-login-page .card-wrapper {\r\n\t\twidth: 90%;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n\t.my-login-page .card.fat {\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t.my-login-page .card.fat .card-body {\r\n\t\tpadding: 15px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtDQUN2Qjs7QUFFRDtDQUNDLDBCQUEwQjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsc0NBQXNDO0NBQ3RDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2I7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsc0NBQXNDO0NBQ3RDOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsWUFBWTtDQUNaOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQztFQUNDLFdBQVc7RUFDWCxlQUFlO0VBQ2Y7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsV0FBVztFQUNYOztDQUVEO0VBQ0MsY0FBYztFQUNkO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG59XHJcblxyXG5ib2R5Lm15LWxvZ2luLXBhZ2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIHtcclxuXHR3aWR0aDogOTBweDtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5jYXJkLXdyYXBwZXIge1xyXG5cdHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmNhcmQge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuY2FyZCAuY2FyZC10aXRsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiAyLjNweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuYnRuLmJ0bi1ibG9jayB7XHJcblx0cGFkZGluZzogMTJweCAxMHB4O1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuZm9vdGVyIHtcclxuXHRtYXJnaW46IDQwcHggMDtcclxuXHRjb2xvcjogIzg4ODtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcblx0Lm15LWxvZ2luLXBhZ2UgLmNhcmQtd3JhcHBlciB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0Lm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IC5jYXJkLWJvZHkge1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"my-login-page\">\n  <section class=\"h-100\">\n    <div class=\"container h-100\">\n      <div class=\"row justify-content-md-center align-items-center h-100\">\n        <div class=\"card-wrapper\">\n          <div class=\"brand\">\n              <img src=\"/assets/logoo.png\">\n         <!---------------this place for image----------------------->  \n          </div>\n          <div class=\"card fat\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Forgot Password</h4>\n              <form method=\"POST\" name=\"form\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\">\n                  <label for=\"email\">E-Mail Address</label>\n                  <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" required autofocus>\n                  <div class=\"invalid-feedback\">\n                    Email is invalid\n                  </div>\n                  <div class=\"form-text text-muted\">\n                    By clicking \"Reset Password\" we will send a password reset link\n                  </div>\n                </div>\n\n                <div class=\"form-group m-0\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\">\n                    Reset Password\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>    \n</body>"

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family:Roboto,sans-serif;\r\n    font-size:15px;\r\n    font-weight:100;\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.7),rgba(125, 150, 224, 0.7)),url(\"/assets/bag.jpg\");\r\n    background-image: no-repeat; \r\n    padding-bottom: 1px;  \r\n  }\r\nheader .gnb{\r\n    height:90px;\r\n    width:990px;\r\n    margin:auto\r\n    ;color:#707070;\r\n    padding-top:34px\r\n  }\r\nheader .gnb p{\r\n    float:right;\r\n    width:auto;\r\n    max-width:400px;\r\n    word-break:break-all\r\n  }\r\nheader .banner .nLogo img{\r\n    border-radius: 50%;\r\n      height: 50px;\r\n      margin-top: 4px;\r\n      margin-left: -1200px;\r\n  }\r\nheader .banner{\r\n    background:rgb(10, 174, 224);height:60px;color:#fff;text-align:center\r\n  }\r\nheader .banner .title{\r\n    font-size:16px\r\n  }\r\nheader{\r\n    margin-bottom:20px\r\n  }\r\nheader .banner .title{\r\n   margin-top: -34px;\r\n  }\r\n.container{\r\n    width:990px;\r\n    margin:0 auto;\r\n    text-align:center;\r\n    color:#707070\r\n  }\r\n.container .box{\r\n    display:inline-block;\r\n    width:304px;\r\n    padding:50px;\r\n    text-align:center\r\n  }\r\n.container .box .icon img{\r\n    font-family:ResmanFont;\r\n    margin:auto auto 25px;\r\n    cursor:pointer;\r\n    color:rgb(39, 212, 117);\r\n    display:inline-block;\r\n    overflow:hidden;\r\n    vertical-align:bottom\r\n  }\r\n.container .box .icon.fresher img{\r\n    border-radius: 50%;\r\n    font-size:130px;\r\n    width:120px;\r\n    line-height:130px\r\n  }\r\n.container .box .icon.experience img{\r\n    border-radius: 50%;\r\n    font-size:130px;\r\n    width:120px;\r\n    line-height:130px\r\n  }\r\n.container .box .action-btn{\r\n    color:#FFF;\r\n    background-color: rgb(10, 174, 224);\r\n    border:none;display:inline-block;\r\n    font-size:16px;\r\n    font-weight:400;\r\n    line-height:1.42857143;\r\n    text-align:center;\r\n    vertical-align:middle;\r\n    cursor:pointer;\r\n    overflow:hidden;\r\n    outline:0;\r\n    padding:15px;\r\n    width:100%\r\n  }\r\n.container .box .description{\r\n    padding-top:10px;\r\n  }\r\n.container .job-text{\r\n    width:435px;\r\n    margin:auto;\r\n  }\r\n.container .info-text .numbers{\r\n    font-size:17px;\r\n  }\r\n.container .info-text .numbers i{\r\n    border-right:1px solid #707070;\r\n    margin:0 15px;\r\n  }\r\n.container .info-text .head{\r\n    margin-top:25px;\r\n    font-weight:400;\r\n  }\r\n.container .info-text ul{\r\n    list-style:none;\r\n    display:inline-block;\r\n  }\r\n.container .info-text ul li{\r\n    text-align:left;\r\n    padding:4px 0;\r\n  }\r\nfooter{\r\n    text-align:center;\r\n    font-size:12px;\r\n    \r\n    margin-top:65px}\r\nfooter a{\r\n    color:rgb(69, 22, 238);\r\n    display:inline-block;\r\n    font-size:15px;\r\n    line-height:1;\r\n    padding:0 10px;\r\n    border-left:solid 1px #A7A7A7\r\n  }\r\nfooter a:hover{\r\n    color:rgb(175, 221, 10)\r\n  }\r\nfooter a:first-child{\r\n    border-left:none\r\n  }\r\nfooter p{\r\n    font-size: 12px;\r\n    color:rgb(194, 21, 142);\r\n    margin-top:5px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlc2hhbmRleHAvZnJlc2hhbmRleHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRHQUE0RztJQUM1Ryw0QkFBNEI7SUFDNUIsb0JBQW9CO0dBQ3JCO0FBQ0g7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0tBQ0MsY0FBYztJQUNmLGdCQUFnQjtHQUNqQjtBQUVEO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCO0FBRUQ7SUFDRSxtQkFBbUI7TUFDakIsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixxQkFBcUI7R0FDeEI7QUFFRDtJQUNFLDZCQUE2QixZQUFZLFdBQVcsaUJBQWlCO0dBQ3RFO0FBQ0Q7SUFDRSxjQUFjO0dBQ2Y7QUFFRDtJQUNFLGtCQUFrQjtHQUNuQjtBQUNEO0dBQ0Msa0JBQWtCO0dBQ2xCO0FBRUQ7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0dBQ2Q7QUFDRDtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0dBQ3RCO0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZLHFCQUFxQjtJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0dBQ1g7QUFFRDtJQUNFLGlCQUFpQjtHQUNsQjtBQUVEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsK0JBQStCO0lBQy9CLGNBQWM7R0FDZjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtHQUN0QjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7R0FDZjtBQUdEO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsZUFBZSxDQUFDO0FBQ2xCO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7R0FDOUI7QUFDRDtJQUNFLHVCQUF1QjtHQUN4QjtBQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7R0FDZiIsImZpbGUiOiJzcmMvYXBwL2ZyZXNoYW5kZXhwL2ZyZXNoYW5kZXhwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6Um9ib3RvLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuNykscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjcpKSx1cmwoXCIvYXNzZXRzL2JhZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBuby1yZXBlYXQ7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDsgIFxyXG4gIH1cclxuaGVhZGVyIC5nbmJ7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIHdpZHRoOjk5MHB4O1xyXG4gICAgbWFyZ2luOmF1dG9cclxuICAgIDtjb2xvcjojNzA3MDcwO1xyXG4gICAgcGFkZGluZy10b3A6MzRweFxyXG4gIH1cclxuXHJcbiAgaGVhZGVyIC5nbmIgcHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIG1heC13aWR0aDo0MDBweDtcclxuICAgIHdvcmQtYnJlYWs6YnJlYWstYWxsXHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciAuYmFubmVyIC5uTG9nbyBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyIC5iYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxMCwgMTc0LCAyMjQpO2hlaWdodDo2MHB4O2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXJcclxuICB9XHJcbiAgaGVhZGVyIC5iYW5uZXIgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOjE2cHhcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4XHJcbiAgfVxyXG4gIGhlYWRlciAuYmFubmVyIC50aXRsZXtcclxuICAgbWFyZ2luLXRvcDogLTM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDo5OTBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGNvbG9yOiM3MDcwNzBcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94e1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDozMDRweDtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmJveCAuaWNvbiBpbWd7XHJcbiAgICBmb250LWZhbWlseTpSZXNtYW5Gb250O1xyXG4gICAgbWFyZ2luOmF1dG8gYXV0byAyNXB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMzksIDIxMiwgMTE3KTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246Ym90dG9tXHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmJveCAuaWNvbi5mcmVzaGVyIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZToxMzBweDtcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MTMwcHhcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuYm94IC5pY29uLmV4cGVyaWVuY2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOjEzMHB4O1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDoxMzBweFxyXG4gIH1cclxuICAuY29udGFpbmVyIC5ib3ggLmFjdGlvbi1idG57XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxNzQsIDIyNCk7XHJcbiAgICBib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS40Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBvdXRsaW5lOjA7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLmJveCAuZGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIH1cclxuIFxyXG4gIC5jb250YWluZXIgLmpvYi10ZXh0e1xyXG4gICAgd2lkdGg6NDM1cHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IC5udW1iZXJze1xyXG4gICAgZm9udC1zaXplOjE3cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIgLmluZm8tdGV4dCAubnVtYmVycyBpe1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOjAgMTVweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IC5oZWFke1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyIC5pbmZvLXRleHQgdWx7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmNvbnRhaW5lciAuaW5mby10ZXh0IHVsIGxpe1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgcGFkZGluZzo0cHggMDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGZvb3RlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6NjVweH1cclxuICBmb290ZXIgYXtcclxuICAgIGNvbG9yOnJnYig2OSwgMjIsIDIzOCk7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MTtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6c29saWQgMXB4ICNBN0E3QTdcclxuICB9XHJcbiAgZm9vdGVyIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZ2IoMTc1LCAyMjEsIDEwKVxyXG4gIH1cclxuICBmb290ZXIgYTpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci1sZWZ0Om5vbmVcclxuICB9XHJcbiAgZm9vdGVyIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjpyZ2IoMTk0LCAyMSwgMTQyKTtcclxuICAgIG1hcmdpbi10b3A6NXB4XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.html":
/*!********************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <header>\n\n        <div class=\"banner\">\n\n            <a class=\"nLogo\">\n                <img src=\"/assets/logoo.png\">\n            </a>\n\n            <p class=\"title\">Tell us about yourself</p>\n        </div>\n\n\n        <div class=\"gnb\">\n\n            <p style=\"color:white\">Already Registered? <a routerLink=\"/auth/login\" routerLinkActive=\"active\"\n                    class=\"primary-link\" title=\"Jobseeker Login\" style=\"color:rgb(79, 17, 223)\">Login</a> here</p>\n        </div>\n\n        <div id=\"alert\" class=\"alert\">\n            <i></i>\n            <span id=\"alertMsg\"></span>\n        </div>\n    </header>\n    <div class=\"container\">\n        <b class=\"job-text\" style=\"color:white\"> Find the right job on Sahiudhyog.com. You are only few steps away from\n            millions of jobs</b>\n        <form name=\"bifurcation\" action=\"//my.naukri.com/account/register/basicdetails\" method=\"post\">\n\n            <div class=\"box\">\n\n                <div class=\"fresherCont\">\n\n                    <div class=\"icon fresher\">\n                        <img src=\"/assets/fre.jpg\">\n\n\n                    </div>\n\n                    <button type=\"button\" routerLink=\"/fresher\" routerLinkActive=\"active\" value=\"fresher\"\n                        name=\"userType\" class=\"action-btn fresh\" title=\"I am a Fresher\">I am a Fresher</button>\n\n\n                </div>\n\n                <p class=\"description\" style=\"color:white\">I have just graduated/I haven't worked after graduation</p>\n\n            </div>\n\n\n            <div class=\"box\">\n\n                <div class=\"expCont\">\n\n                    <div class=\"icon experience\">\n\n                        <img src=\"/assets/expi.png\">\n\n\n                    </div>\n\n                    <button type=\"button\" routerLink=\"/experience\" routerLinkActive=\"active\" name=\"userType\" value=\"exp\"\n                        class=\"action-btn exp\" title=\"I am a Professional\">I am a Professional</button>\n\n                </div>\n\n                <p class=\"description\" style=\"color:white\">I have at least 1 month of work experience</p>\n\n            </div>\n\n        </form>\n        <div class=\"info-text\">\n            <span class=\"numbers\" style=\"color:white\">More than 3 lakhs Jobs <i></i> More than 1 lakh Recruiters</span>\n            <p class=\"head\" style=\"color:rgb(37, 19, 204)\">After you register, you can:</p>\n            <ul style=\"color:white\">\n                <li>&#45; Apply to jobs from the site while keeping your resume hidden from all recruiters.</li>\n                <li>&#45; Mark yourself as a 'passive jobseeker' if you are not actively looking for a job.</li>\n                <li>&#45; Block your company or other specific companies from viewing your profile.</li>\n            </ul>\n        </div>\n    </div>\n    <footer>\n        <a href=\"#\" target=\"_blank\" title=\"About Us\">About Us</a>\n        <a href=\"#\" target=\"_blank\" title=\"Contact Us\">Contact Us</a>\n        <a href=\"#\" target=\"_blank\" title=\"FAQs\">FAQs</a>\n        <a href=\"#\" target=\"_blank\" title=\"Terms and Conditions\">Terms and Conditions</a>\n        <a href=\"#\" target=\"_blank\" title=\"Report a Problem\">Report a Problem</a>\n        <a href=\"#\" target=\"_blank\" title=\"Privacy Policy\">Privacy Policy</a>\n        <p>All rights reserved &copy; 2019 Info Edge India Ltd.</p>\n    </footer>\n</body>"

/***/ }),

/***/ "./src/app/freshandexp/freshandexp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/freshandexp/freshandexp.component.ts ***!
  \******************************************************/
/*! exports provided: FreshandexpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshandexpComponent", function() { return FreshandexpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreshandexpComponent = /** @class */ (function () {
    function FreshandexpComponent() {
    }
    FreshandexpComponent.prototype.ngOnInit = function () {
    };
    FreshandexpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freshandexp',
            template: __webpack_require__(/*! ./freshandexp.component.html */ "./src/app/freshandexp/freshandexp.component.html"),
            styles: [__webpack_require__(/*! ./freshandexp.component.css */ "./src/app/freshandexp/freshandexp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreshandexpComponent);
    return FreshandexpComponent;
}());



/***/ }),

/***/ "./src/app/fresher.service.ts":
/*!************************************!*\
  !*** ./src/app/fresher.service.ts ***!
  \************************************/
/*! exports provided: FresherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FresherService", function() { return FresherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FresherService = /** @class */ (function () {
    function FresherService(http) {
        this.http = http;
        this.url = "http://192.168.43.141:3005/jobseeker/fresher";
        this.http = http;
    }
    FresherService.prototype.registerFresher = function (formData) {
        return this.http.post(this.url, formData);
        /* return this.http.post(this.url,{
           "firstName": firstname,
           "lastName":lastname
         })*/
    };
    FresherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FresherService);
    return FresherService;
}());



/***/ }),

/***/ "./src/app/fresher/fresher.component.css":
/*!***********************************************!*\
  !*** ./src/app/fresher/fresher.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    /* margin-left: 40px; */\r\n    min-width: 205vh;\r\n}\r\n\r\n.register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    min-height: 100vh;\r\n    min-width: 100%;\r\n    margin-top: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n\r\n.register-right{\r\n    background-image: linear-gradient(rgba(125, 150, 224, 0.10),rgba(125, 150, 224, 0.10)),url(\"/assets/bag.jpg\");\r\n    background-image: no-repeat;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n\r\n.register .register-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: 2%;\r\n/* \r\n    border-bottom: 1px solid #1e08e4; */\r\n    /* padding-left: 1px; */\r\n    \r\n   \r\n}\r\n\r\n.register .register1-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-top: -12%;\r\n    margin-bottom: -15%;\r\n}\r\n\r\n.register .register2-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;    \r\n}\r\n\r\n.register .register3-form{\r\n    padding: 7%;\r\n    padding-left: 12%;\r\n    margin-bottom: -7%;  \r\n    padding-top: 1px;  \r\n}\r\n\r\n.reactiveform{\r\n    padding: 20px;\r\n    margin-left: 70px;\r\n    margin-top: 0px;\r\n    padding-top: 0%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.reactiveform .btn{\r\n    margin-left: 200px;\r\n    width: 10%;\r\n    height: 35px;    \r\n}\r\n\r\n/* #totalssc{\r\n    background-color: #fff;\r\n    border: 1px solid #dcdcdc;\r\n    padding: 15px 0 14px 10px;\r\n    margin-bottom: 7px;\r\n    margin-left: -31px;\r\n  } */\r\n\r\n/* #totalssc{\r\n    background-color: whitesmoke;\r\n} */\r\n\r\n.radio{\r\n    /*------------gender radio button-----------*/\r\n    margin-left: 3px;\r\n}\r\n\r\n.radio1{\r\n    /*------------course type-----------*/\r\n    margin-left: 3px;\r\n}\r\n\r\n.reactiveform .btnd{\r\n    /*------------btnd is a class of grading system-----------*/\r\n    height: 38px;\r\n    width: 65%;  \r\n}\r\n\r\n#board1{\r\n     /*---------------- ssc board ---------------------------*/\r\n    margin-top: -34Px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#board{\r\n    /*---------------- ssc board ---------------------------*/\r\n   margin-top: -58Px;\r\n   margin-bottom: 40px;\r\n}\r\n\r\n#inter_category1{\r\n    /*---------------- category for ipe ---------------------------*/\r\n  margin-bottom: 1px;\r\n}\r\n\r\n#inter_category{\r\n      /*---------------- inter categeory---------------------------*/\r\n   margin-top: -26Px;\r\n   margin-bottom: 40px;\r\n}\r\n\r\n#ssc_percentage{\r\n     /*----------------ssc %---------------------------*/\r\n    margin-top: -34Px;  \r\n}\r\n\r\n#ssc_school{\r\n    /*----------------ssc school---------------------------*/\r\n   margin-top: -34Px;\r\n}\r\n\r\n#ssc_school_location{\r\n    /*----------------ssc location---------------------------*/\r\n   margin-top: -34Px;\r\n}\r\n\r\n#sscupload{\r\n     /*----------------ssc Upload Certificate---------------------------*/\r\n    margin-top: -36px;\r\n}\r\n\r\n#ipeupload{\r\n    /*----------------IPE/DIP Upload Certificate---------------------------*/\r\n   margin-top: -36px;\r\n}\r\n\r\n.btnc{\r\n    /*----------------btnc is a class of grading system dropdown---------------------------*/\r\n    height: 38px;\r\n    margin-bottom:13%; \r\n}\r\n\r\n.reactiveform.form-group{\r\n    padding: 20%;\r\n}\r\n\r\n#sa{\r\n   /*-------------this sa id is for upload certificate----------------------*/\r\n   color: blue;\r\n    padding-top: 4px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.btnm{\r\n    /*---------------------this is for next button------------------------------------*/\r\n    margin-left: 200px;\r\n    width: 30%;\r\n    height: 35px;\r\n    margin-top: 10%;\r\n    border-radius: 100%;   \r\n}\r\n\r\n.btnp{\r\n    /*---------------------this is for previous button in educational details------------------------------------*/\r\n   margin-left: 100px;\r\n   border-radius: 100%;\r\n   width: 15%;\r\n   margin-top: -4%;\r\n   margin-bottom: 20px;\r\n}\r\n\r\n#anydegree{\r\n    margin-top: 20px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.btn1{\r\n    margin-left: 200px;\r\n    width:15%;\r\n    height: 43px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.close-icon{\r\n    display:block;\r\n    box-sizing: border-box;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-style: solid;\r\n    border-color: blue;\r\n    border-radius: 100%;\r\n    background: -webkit-linear-gradient(-45deg,transparent 0% transparent 0% transparent 46%\r\n    white 46% white 56% transparent 56% transparent 100%);\r\n    background-color: blue;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);\r\n    transition:all 0.3s ease;\r\n    float: right;\r\n}\r\n\r\n/*----------------------------------------------\r\n.container{\r\n    background-position: center;\r\n     background-size: cover;\r\n     background-repeat: no-repeat;\r\n     }\r\nh2{\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n.register{\r\n width: 500px;\r\n  margin: 10px 0px 10px 250px;\r\n   font-size: 15px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    \r\n}\r\n#register{\r\n    margin-left: 50px;\r\n}\r\nlabel{\r\n\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    \r\n}\r\n#name{\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    outline: 0;\r\n    padding: 3px;\r\n}\r\n.register input{\r\n    font-size: 12px;\r\n    color: rgb(10, 147, 238);\r\n}\r\n#sub{\r\n    width: 50%;\r\n    background: lightblue;\r\n    padding: 5px;\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n    margin-right:10px;\r\n    }\r\n----------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlc2hlci9mcmVzaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksNERBQTREO0lBQzVELGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLDhHQUE4RztJQUM5Ryw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLG1DQUFtQztDQUN0Qzs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdEQUFnRDtJQUNoRCx3Q0FBd0M7Q0FDM0M7O0FBQ0Q7SUFDSSxLQUFLLGlDQUF5QixDQUF6Qix5QkFBeUIsRUFBRTtJQUNoQyxPQUFPLHFDQUE2QixDQUE3Qiw2QkFBNkIsRUFBRTtDQUN6Qzs7QUFDRDtJQUNJLEtBQUssaUNBQXlCLENBQXpCLHlCQUF5QixFQUFFO0lBQ2hDLE9BQU8scUNBQTZCLENBQTdCLDZCQUE2QixFQUFFO0NBQ3pDOztBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7d0NBQ3dDO0lBQ3BDLHdCQUF3Qjs7O0NBRzNCOztBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0NBQ2hCOztBQUVEOzs7Ozs7TUFNTTs7QUFFTjs7SUFFSTs7QUFFSjtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksNERBQTREO0lBQzVELGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBQ0Q7S0FDSywwREFBMEQ7SUFDM0Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLDBEQUEwRDtHQUMzRCxrQkFBa0I7R0FDbEIsb0JBQW9CO0NBQ3RCOztBQUNEO0lBQ0ksaUVBQWlFO0VBQ25FLG1CQUFtQjtDQUNwQjs7QUFDRDtNQUNNLCtEQUErRDtHQUNsRSxrQkFBa0I7R0FDbEIsb0JBQW9CO0NBQ3RCOztBQUNEO0tBQ0ssb0RBQW9EO0lBQ3JELGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLHlEQUF5RDtHQUMxRCxrQkFBa0I7Q0FDcEI7O0FBQ0Q7SUFDSSwyREFBMkQ7R0FDNUQsa0JBQWtCO0NBQ3BCOztBQUNEO0tBQ0sscUVBQXFFO0lBQ3RFLGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLHlFQUF5RTtHQUMxRSxrQkFBa0I7Q0FDcEI7O0FBQ0Q7SUFDSSx5RkFBeUY7SUFDekYsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7R0FDRywyRUFBMkU7R0FDM0UsWUFBWTtJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxvRkFBb0Y7SUFDcEYsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLCtHQUErRztHQUNoSCxtQkFBbUI7R0FDbkIsb0JBQW9CO0dBQ3BCLFdBQVc7R0FDWCxnQkFBZ0I7R0FDaEIsb0JBQW9CO0NBQ3RCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQjswREFBb0o7SUFDcEosdUJBQXVCO0lBQ3ZCLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsYUFBYTtDQUNoQjs7QUE2QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQStDb0MiLCJmaWxlIjoic3JjL2FwcC9mcmVzaGVyL2ZyZXNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNDBweDsgKi9cclxuICAgIG1pbi13aWR0aDogMjA1dmg7XHJcbn1cclxuXHJcbi5yZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzOTMxYWYsICMwMGM2ZmYpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5yZWdpc3Rlci1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzgzZDQxO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC4xMCkscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjEwKSksdXJsKFwiL2Fzc2V0cy9iYWcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuLyogXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFlMDhlNDsgKi9cclxuICAgIC8qIHBhZGRpbmctbGVmdDogMXB4OyAqL1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXIxLWZvcm17XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbn1cclxuLnJlZ2lzdGVyIC5yZWdpc3RlcjItZm9ybXtcclxuICAgIHBhZGRpbmc6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNyU7ICAgIFxyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXIzLWZvcm17XHJcbiAgICBwYWRkaW5nOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTclOyAgXHJcbiAgICBwYWRkaW5nLXRvcDogMXB4OyAgXHJcbn1cclxuLnJlYWN0aXZlZm9ybXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJlYWN0aXZlZm9ybSAuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMzVweDsgICAgXHJcbn1cclxuXHJcbi8qICN0b3RhbHNzY3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDE0cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICB9ICovXHJcblxyXG4vKiAjdG90YWxzc2N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59ICovXHJcblxyXG4ucmFkaW97XHJcbiAgICAvKi0tLS0tLS0tLS0tLWdlbmRlciByYWRpbyBidXR0b24tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5yYWRpbzF7XHJcbiAgICAvKi0tLS0tLS0tLS0tLWNvdXJzZSB0eXBlLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4ucmVhY3RpdmVmb3JtIC5idG5ke1xyXG4gICAgLyotLS0tLS0tLS0tLS1idG5kIGlzIGEgY2xhc3Mgb2YgZ3JhZGluZyBzeXN0ZW0tLS0tLS0tLS0tLSovXHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogNjUlOyAgXHJcbn1cclxuI2JvYXJkMXtcclxuICAgICAvKi0tLS0tLS0tLS0tLS0tLS0gc3NjIGJvYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tdG9wOiAtMzRQeDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuI2JvYXJke1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tIHNzYyBib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtNThQeDtcclxuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4jaW50ZXJfY2F0ZWdvcnkxe1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tIGNhdGVnb3J5IGZvciBpcGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuI2ludGVyX2NhdGVnb3J5e1xyXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0gaW50ZXIgY2F0ZWdlb3J5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTI2UHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuI3NzY19wZXJjZW50YWdle1xyXG4gICAgIC8qLS0tLS0tLS0tLS0tLS0tLXNzYyAlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIG1hcmdpbi10b3A6IC0zNFB4OyAgXHJcbn1cclxuI3NzY19zY2hvb2x7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2Mgc2Nob29sLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTM0UHg7XHJcbn1cclxuI3NzY19zY2hvb2xfbG9jYXRpb257XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1zc2MgbG9jYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tdG9wOiAtMzRQeDtcclxufVxyXG4jc3NjdXBsb2Fke1xyXG4gICAgIC8qLS0tLS0tLS0tLS0tLS0tLXNzYyBVcGxvYWQgQ2VydGlmaWNhdGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgbWFyZ2luLXRvcDogLTM2cHg7XHJcbn1cclxuI2lwZXVwbG9hZHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLUlQRS9ESVAgVXBsb2FkIENlcnRpZmljYXRlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgbWFyZ2luLXRvcDogLTM2cHg7XHJcbn1cclxuLmJ0bmN7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS1idG5jIGlzIGEgY2xhc3Mgb2YgZ3JhZGluZyBzeXN0ZW0gZHJvcGRvd24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMyU7IFxyXG59XHJcbi5yZWFjdGl2ZWZvcm0uZm9ybS1ncm91cHtcclxuICAgIHBhZGRpbmc6IDIwJTtcclxufVxyXG4jc2F7XHJcbiAgIC8qLS0tLS0tLS0tLS0tLXRoaXMgc2EgaWQgaXMgZm9yIHVwbG9hZCBjZXJ0aWZpY2F0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5idG5te1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS10aGlzIGlzIGZvciBuZXh0IGJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgICBcclxufVxyXG4uYnRucHtcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGhpcyBpcyBmb3IgcHJldmlvdXMgYnV0dG9uIGluIGVkdWNhdGlvbmFsIGRldGFpbHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgIHdpZHRoOiAxNSU7XHJcbiAgIG1hcmdpbi10b3A6IC00JTtcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4jYW55ZGVncmVle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4uYnRuMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHdpZHRoOjE1JTtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNsb3NlLWljb257XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsdHJhbnNwYXJlbnQgMCUgdHJhbnNwYXJlbnQgMCUgdHJhbnNwYXJlbnQgNDYlXHJcbiAgICB3aGl0ZSA0NiUgd2hpdGUgNTYlIHRyYW5zcGFyZW50IDU2JSB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgfVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucmVnaXN0ZXJ7XHJcbiB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDI1MHB4O1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59XHJcbiNyZWdpc3RlcntcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbmxhYmVse1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuI25hbWV7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcbi5yZWdpc3RlciBpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDE0NywgMjM4KTtcclxufVxyXG4jc3Vie1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgfVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8iXX0= */"

/***/ }),

/***/ "./src/app/fresher/fresher.component.html":
/*!************************************************!*\
  !*** ./src/app/fresher/fresher.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ngb-tabset #t=\"ngbTabset\">\n    <ngb-tab id=\"tab-selectbyid1\" title=\"Personal Details\">\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n            <div class=\"row\">\n              <div class=\"col-md-3 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-9 register-right\">\n\n                <div class=\"row register-form\">\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label for=\"firstName\" style=\"color:blue\"> First Name * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter Your First Name\"\n                        name=\"firstName\" formControlName=\"firstName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.firstName.errors && (reactiveForm.controls.firstName.touched || reactiveForm.controls.firstName.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','firstName')\"> FirstName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','firstName')\"> FirstName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','firstName')\"> FirstName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"lastName\" style=\"color:blue\"> LastName * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Your LastName\"\n                        name=\"lastName\" formControlName=\"lastName\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.lastName.errors && (reactiveForm.controls.lastName.touched || reactiveForm.controls.lastName.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','lastName')\"> LastName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','lastName')\"> LastName is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','lastName')\"> LastName is must be 3 min</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"username\" style=\"color:blue\"> email * </label>\n                      <input type=\"email\" class=\"form-control\" id=\"username\" placeholder=\"Enter Your email\"\n                        name=\"username\" formControlName=\"username\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.username.errors && (reactiveForm.controls.username.touched || reactiveForm.controls.username.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','username')\"> email is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','username')\"> email is invalid</div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"password\" style=\"color:blue\"> password * </label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your password\"\n                        name=\"password\" formControlName=\"password\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.password.errors && (reactiveForm.controls.password.touched || reactiveForm.controls.password.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','password')\"> password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','password')\"> password is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','password')\"> password is must be 6 min</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','password')\"> password is must be 10 max</div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> Gender * </label> <br>\n                      <label for=\"gender\" style=\"color:blue\">Male</label>\n                      <input type=\"radio\" value=\"Male\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Female</label>\n                      <input type=\"radio\" value=\"Female\" formControlName=\"gender\">\n                      <label for=\"gender\" style=\"color:blue\">Others</label>\n                      <input type=\"radio\" value=\"Others\" formControlName=\"gender\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.gender.errors && (reactiveForm.controls.gender.touched || reactiveForm.controls.gender.dirty)\">\n                        <div *ngIf=\"reactiveForm.hasError('required','gender')\"> gender is Required</div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <label for=\"address\" style=\"color:blue\"> address * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Enter Your address\"\n                        name=\"address\" formControlName=\"address\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.address.errors && (reactiveForm.controls.address.touched || reactiveForm.controls.address.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','address')\"> address is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','address')\"> address is must be 20 min</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','address')\"> address is must be 250 max</div>\n\n\n                      </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"phoneNumber\" style=\"color:blue\"> phoneNumber * </label>\n                      <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"Enter Your phoneNumber\"\n                        name=\"phoneNumber\" formControlName=\"phoneNumber\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.phoneNumber.errors && (reactiveForm.controls.phoneNumber.touched || reactiveForm.controls.phoneNumber.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','phoneNumber')\"> phoneNumber is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','phoneNumber')\"> phoneNumber is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','phoneNumber')\"> phoneNumber is must be 10 min\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','phoneNumber')\"> phoneNumber is must be 14 max\n                        </div>\n\n                      </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Resume</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" style=\"height:100%\">\n                    </div>\n\n\n                    <p>\n                      <button class=\"btnm btn-primary\" (click)=\"t.select('tab-selectbyid2')\">Next</button>\n                    </p>\n\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n\n\n\n\n    <ngb-tab id=\"tab-selectbyid2\">\n      <ng-template ngbTabTitle>Educational Details</ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"container register\">\n\n          <form [formGroup]=\"reactiveForm\">\n\n\n            <div class=\"row\">\n              <div class=\"col-md-2 register-left\">\n                <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n                <h3>Welcome</h3>\n                <p> <b>Sahiudhyog</b> </p>\n                <input type=\"submit\" name=\"\" value=\"Sahiudhyogh\" style=\"color:rgb(236, 18, 164)\" /><br />\n              </div>\n\n              <div class=\"col-md-10 register-right\">\n\n\n\n                <div class=\"row register-form\" id=\"totalssc\">\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"board1\" style=\"color:blue\">\n                      <label>SSC Board *</label>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"board\"></label>\n                      <select class=\"form-control\" id=\"board\" formControlName=\"board\">\n                        <option *ngFor=\"let board of boards\" [value]=\"board.id\">{{board.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_percentage\" placeholder=\"ssc%\"\n                        name=\"ssc_percentage\" formControlName=\"ssc_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_percentage.errors && (reactiveForm.controls.ssc_percentage.touched || reactiveForm.controls.ssc_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_percentage')\"> ssc% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_percentage')\"> ssc% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_percentage')\"> invalid </div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school\" placeholder=\"schoolName\" name=\"ssc_school\"\n                        formControlName=\"ssc_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school.errors && (reactiveForm.controls.ssc_school.touched || reactiveForm.controls.ssc_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school')\"> schoolName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school')\"> schoolName is invalid</div>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_school_location\" placeholder=\"location\"\n                        name=\"ssc_school_location\" formControlName=\"ssc_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_school_location.errors && (reactiveForm.controls.ssc_school_location.touched || reactiveForm.controls.ssc_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_school_location')\"> location is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_school_location')\"> schoolName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"ssc_passed_out_year\" placeholder=\"Passed out Year\"\n                        name=\"ssc_passed_out_year\" formControlName=\"ssc_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ssc_passed_out_year.errors && (reactiveForm.controls.ssc_passed_out_year.touched || reactiveForm.controls.ssc_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ssc_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','ssc_passed_out_year')\"> year of pass is invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-5\" id=\"sscupload\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload SSC</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\">\n                    </div>\n                  </div>\n\n\n\n                </div>\n\n                <div class=\"row register1-form\">\n\n\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"inter_category1\" style=\"color:rgb(240, 15, 191)\">\n                      <label style=\"color:blue\">IPE/Diploma *</label>\n                    </div>\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"inter_category\"></label>\n                      <select class=\"form-control\" id=\"inter_category\" formControlName=\"inter_category\">\n                        <option *ngFor=\"let inter_category of inter_categories\" [value]=\"inter_category.id\">\n                          {{inter_category.name}}</option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_percentage\" placeholder=\"%\"\n                        name=\"inter_percentage\" formControlName=\"inter_percentage\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_percentage.errors && (reactiveForm.controls.inter_percentage.touched || reactiveForm.controls.inter_percentage.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_percentage')\"> IPE/DIP% is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_percentage')\"> IPE/DIP% is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','inter_percentage')\"> IPE/DIP% is must be 3max\n                        </div>\n                      </div>\n\n\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school\" placeholder=\"collegeName\"\n                        name=\"inter_school\" formControlName=\"inter_school\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school.errors && (reactiveForm.controls.inter_school.touched || reactiveForm.controls.inter_school.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school')\"> collegeName is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_school')\"> collegeName is invalid</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_school_location\" placeholder=\"location\"\n                        name=\"inter_school_location\" formControlName=\"inter_school_location\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_school_location.errors && (reactiveForm.controls.inter_school_location.touched || reactiveForm.controls.inter_school_location.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_school_location')\"> collegelocation is\n                          Required</div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"inter_passed_out_year\" placeholder=\"Passed out Year\"\n                        name=\"inter_passed_out_year\" formControlName=\"inter_passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.inter_passed_out_year.errors && (reactiveForm.controls.inter_passed_out_year.touched || reactiveForm.controls.inter_passed_out_year.dirty)\"\n                        style=\"color: red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','inter_passed_out_year')\"> Year of pass is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','inter_passed_out_year')\"> year of pass is invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n\n\n\n\n                  <div class=\"col-md-5\" id=\"ipeupload\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload IPE/DIP</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\">\n                    </div>\n                  </div>\n\n\n                </div>\n\n\n                <div class=\"row register2-form\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" id=\"anydegree\" style=\"color:blue\">\n                      <label>UG Degree *</label>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"ugCourse\" style=\"color:blue\"> Course:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugCourse\" placeholder=\"UG\" name=\"ugCourse\"\n                        formControlName=\"ugCourse\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugCourse.errors && (reactiveForm.controls.ugCourse.touched || reactiveForm.controls.ugCourse.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugCourse')\">\n                          Course is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugCourse')\">\n                          Course is Invalid Format\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','ugCourse')\">\n                          invalid\n                        </div>\n\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"ugSpecialization\" style=\"color:blue\"> Speciliazation:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"ugSpecialization\" name=\"ugSpecialization\"\n                        formControlName=\"ugSpecialization\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.ugSpecialization.errors && (reactiveForm.controls.ugSpecialization.touched || reactiveForm.controls.ugSpecialization.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','ugSpecialization')\">\n                          Speciliazation is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','ugSpecialization')\">\n                          Speciliazation is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                      <label for=\"university_or_institute\" style=\"color:blue\"> University:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"university_or_institute\"\n                        name=\"university_or_institute\" formControlName=\"university_or_institute\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.university_or_institute.errors && (reactiveForm.controls.university_or_institute.touched || reactiveForm.controls.university_or_institute.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','university_or_institute')\">\n                          university is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','university_or_institute')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> courseType * </label> <br>\n                      <label for=\"courseType\" style=\"color:blue\">Full Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Full Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Part Time</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Part Time\" formControlName=\"courseType\">\n                      <label for=\"courseType\" style=\"color:blue\">Correspondece</label>\n                      <input class=\"radio1\" type=\"radio\" value=\"Correspondece\" formControlName=\"courseType\">\n                    </div>\n\n\n\n                  </div>\n\n\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"passed_out_year\" style=\"color:blue\"> Passed Out year:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"passed_out_year\" name=\"passed_out_year\"\n                        formControlName=\"passed_out_year\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.passed_out_year.errors && (reactiveForm.controls.passed_out_year.touched || reactiveForm.controls.passed_out_year.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','passed_out_year')\">\n                          Passed Out Year is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','passed_out_year')\">\n                          university is Invalid Format\n                        </div>\n\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"col-md-6\">\n\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\">Grading System *</label><br>\n                      <select class=\"form-control\" id=\"gradingSystem\" formControlName=\"gradingSystem\">\n                        <option *ngFor=\"let gradingSystem of gradings\" [value]=\"gradingSystem.id\">{{gradingSystem.name}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"marks\" style=\"color:blue\"> Marks:</label>\n                      <input type=\"text\" class=\"form-control\" id=\"marks\" name=\"marks\" formControlName=\"marks\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.marks.errors && (reactiveForm.controls.marks.touched || reactiveForm.controls.marks.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','marks')\">\n                          Marks is Required\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','marks')\">\n                          invalid\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','marks')\">\n                          invalid\n                        </div>\n\n                      </div>\n\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" id=\"sa\">\n                      <label for=\"file\" style=\"color:blue\">Upload Degree Certificate</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileGraduation($event)\"\n                        style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n\n                  <!-- ----------------------------------------------------------- -->\n\n\n                  <!-- \n<div class=\"form-group col-md-12\">\n\n  <label  style=\"color:blue\"> Type * </label> <br>\n</div>\n    <div class=\"form-group col-md-6\">\n      \n\n      <label for=\"trainedornot\"  style=\"color:blue\">Trained</label>\n      <input class=\"radio1\" type=\"radio\" value=\"Trained\" data-target=\"#imageGallery\" data-toggle=\"collapse\" formControlName=\"trainedornot\"> -->\n                  <!-- ------------------------------------------------------------------ -->\n                  <!-- <div class=\"panel-body collapse in\" id=\"imageGallery\">\n    <div class=\"form-group\">\n<input type=\"text\" id=\"trained\" class=\"form-control\" name=\"trained\" placeholder=\"Course\" formControlName=\"trained\">\n    </div>\n   <div class=\"form-group\">\n<input type=\"text\" id=\"institute\" class=\"form-control\" name=\"institute\" placeholder=\"institute\" formControlName=\"institute\">\n  </div>\n   <div class=\"form-group\">\n<input type=\"text\" id=\"from\" class=\"form-control\" name=\"from\" placeholder=\"From\" formControlName=\"from\">\n   </div>\n   <div class=\"form-group\">\n<input type=\"text\" id=\"to\" class=\"form-control\" name=\"to\"placeholder=\"To\" formControlName=\"from\">\n  </div>\n   <div class=\"form-group\"> \n<input type=\"text\" id=\"skillset\" class=\"form-control\" name=\"skillset\" placeholder=\"Skill Set\" formControlName=\"skillset\">\n   </div>\n</div>\n\n    </div> -->\n\n                  <!-- ------------------------------------------------------------------------- -->\n                  <!-- <div class=\"form-group col-md-6\">\n\n      <label for=\"trainedornot\"  style=\"color:blue\">Not Trained</label>\n      <input class=\"radio1\" type=\"radio\" value=\"Not Trained\" data-target=\"#imageGallery1\" data-toggle=\"collapse\" formControlName=\"trainedornot\"> -->\n                  <!-- ------------------------------------------------------------------------------------- -->\n\n                  <!-- <div class=\"panel-body collapse in\" id=\"imageGallery1\">\n    <div class=\"form-group\">\n            <input type=\"text\" id=\"ap\" class=\"form-control\" name=\"ap\"\n                    placeholder=\"Acadamic Project\" formControlName=\"ap\">\n    </div>\n\n    <div class=\"form-group\">\n            <input type=\"text\" id=\"skillset\" class=\"form-control\" name=\"skillset\"\n                    placeholder=\"Skill Set\" formControlName=\"skillset\">\n    </div>\n</div>\n\n\n   \n    </div> -->\n                  <!-- --------------------------------------------------------------------------------------- -->\n\n\n                </div>\n\n\n\n                <div class=\"row register3-form\">\n                  <!-- ------------------------------------------- -->\n\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label style=\"color:blue\"> Skills </label> <br>\n                      <input type=\"text\" placeholder=\"Enter Your Skills\" class=\"form-control\" id=\"skills\" name=\"skills\"\n                        formControlName=\"skills\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n\n                      <!----------------------\n                        <div\n                        *ngIf=\"reactiveForm.controls.skills.errors && (reactiveForm.controls.skills.touched || reactiveForm.controls.skills.dirty)\"\n                        style=\"color:red\">\n                      </div>\n                      ---------------------------------->\n\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"file\" style=\"color:blue\">Upload Skills Certificate</label>\n                      <input type=\"file\" class=\"form-control\" (change)=\"onSelectFileSkills($event)\" style=\"height:100%\">\n                    </div>\n\n                  </div>\n\n                </div>\n\n\n\n                <button class=\"btnp btn-primary\" (click)=\"t.select('tab-selectbyid1')\">Previous</button>\n\n\n                <button type=submit class=\"btn1 btn-primary\" (click)=\"registerUser(reactiveForm)\"> Submit </button>\n\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/fresher/fresher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fresher/fresher.component.ts ***!
  \**********************************************/
/*! exports provided: FresherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FresherComponent", function() { return FresherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fresher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fresher.service */ "./src/app/fresher.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var skills = ['Angular js', 'Anjuar 1', 'Angular 2', 'Angular 3', 'Angular 4', 'Angular 5', 'Angular 6',
    'Java', 'Java Script', 'Advanced Java', '.net', 'Frame Work', 'php',
    'Html5', 'css3', 'Bootstrap 4', 'ng bootstrap', 'Sql', 'Mysql', 'Oracle', 'plsql', 'Devopps', 'Service Now',
    'tablue', 'muelsoft', 'spring boot', 'spring tools', 'springs', 'aws', 'inframatica', 'sap',
    ' sap fico', 'testing', 'manual testing', 'selinium testing', 'digital marketing', 'python', 'A.I (Artificial Intelligence)', 'V.R (Virtual Reality)',
    'A.R (Augmented Reality)', 'Robots', 'Data Science', 'Big Data and Cloud Computing', 'REACT', 'EXPRESS.JS', 'NODE.JS', 'Automation',
    'MicroServices', 'Blockchain', 'eCommerce', 'Animation', '3-D printing', 'Networking', 'Cloud Computing', 'Hadoop',
    'RPA', ' Network APIs', 'ERP systems', 'Cyber Security'];
var FresherComponent = /** @class */ (function () {
    /*
      model: any = {}
      */
    function FresherComponent(config, fb, fresherService) {
        this.fb = fb;
        this.fresherService = fresherService;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term.length < 2 ? []
                : skills.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        /*
        nestedReactiveForm: any = FormGroup;
        */
        this.userFile = File;
        this.userFiles = FileList;
        this.boards = [{ 'id': 'CBSE', 'name': 'CBSE' }, { 'id': 'ICSE', 'name': 'ICSE' }, { 'id': 'IB', 'name': 'IB' }, { 'id': 'STATEBOARD', 'name': 'STATEBOARD' }];
        this.inter_categories = [{ 'id': 'IPE', 'name': 'IPE' }, { 'id': 'DIP', 'name': 'DIP' }];
        this.gradings = [{ 'id': 1, 'name': 'scale 10' }, { 'id': 2, 'name': 'scale 5' }, { 'id': 3, 'name': '%marks of 100max' }];
        config.justify = 'center';
        config.type = 'pills';
        /*
         this.nestedReactiveForm = this.fb.group({
           graduations: this.fb.array([this.graduations()])
         });
         */
    }
    FresherComponent.prototype.onSelectFile = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileSsc = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileIpe = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    FresherComponent.prototype.onSelectFileGraduation = function (event) {
        var file = event.target.files;
        this.userFiles = file;
    };
    FresherComponent.prototype.onSelectFileSkills = function (event) {
        var file = event.target.files[0];
        this.userFile = file;
    };
    /*
    graduations(): FormGroup {
      return this.fb.group({
        course: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(3)])],
        
        speciliazation: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        university: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(2)])],
        email: ['', Validators.compose([Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])],
        passedyear: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
        marks: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(1), Validators.maxLength(4)])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-z]*'), Validators.minLength(10), Validators.maxLength(14)])],
        courseType :new FormControl('',Validators.required),
        grading: new FormControl('',[Validators.required]),
        
    
      })
    }
    */
    /*
    addNewForm(): void {
      const control = this.nestedReactiveForm.controls.graduations;
      control.push(this.graduations());
    }
  
    removeSelectedForm(index: number): void {
      const control = this.nestedReactiveForm.controls.graduations;
      control.removeAt(index);
    }
  */
    FresherComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z0-9!@#$%^&*()_+]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)
                ])]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)
                ])]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ssc_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            ssc_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            ssc_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            inter_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            inter_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ])]),
            inter_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_school_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            inter_passed_out_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9%]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ])]),
            ugCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            ugSpecialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            university_or_institute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z .A-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            courseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passed_out_year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)])],
            gradingSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)])],
            //  trainedornot :new FormControl('',Validators.required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    FresherComponent.prototype.registerUser = function (submitForm) {
        if (submitForm.valid) {
            var user = submitForm.value;
            var formData = new FormData();
            formData.append('user', JSON.stringify(user));
            formData.append('file', this.userFile);
            //formData.append('files',this.userFiles);
            this.fresherService.registerFresher(formData).subscribe((function (response) {
                console.log(response);
            }));
        }
        else {
            this.validateFormFields(submitForm);
        }
        /* this.fresherService.registerFresher
           this.firstname,
           this.lastname
         ).subscribe(
           data => {
             alert("data submitted successfully" + data);
             console.log(data);
           }
         );*/
    };
    FresherComponent.prototype.validateFormFields = function (submitForm) {
        Object.keys(submitForm.controls).forEach(function (field) {
            var control = submitForm.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({
                    onlySelf: true
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "firstname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "lastname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "gender", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FresherComponent.prototype, "phoneNumber", void 0);
    FresherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fresher',
            template: __webpack_require__(/*! ./fresher.component.html */ "./src/app/fresher/fresher.component.html"),
            styles: [__webpack_require__(/*! ./fresher.component.css */ "./src/app/fresher/fresher.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetConfig"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _fresher_service__WEBPACK_IMPORTED_MODULE_3__["FresherService"]])
    ], FresherComponent);
    return FresherComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen {\r\n   .dropdown:hover .dropdown-menu {\r\n     display: block; \r\n   }\r\n }\r\n  /*---navigation bar------*/\r\n  #nav-bar{\r\n   position: -webkit-sticky;\r\n   position: sticky;\r\n   top: 0;\r\n   z-index: 10;\r\n  }\r\n  .navbar-brand img{ \r\n     height: 50px;\r\n     padding-left: 30px;\r\n     border-radius: 100%;\r\n  }\r\n  .navbar-nav li{\r\n     padding: 0 10px;   \r\n  }\r\n  .navbar-nav li a{\r\n     float: right;\r\n     text-align: left;\r\n     color: white;\r\n   }\r\n  .navbar-toggler{\r\n       border: none!important;\r\n   }\r\n  .nav-link{\r\n       color: white;\r\n       font-weight: 600;\r\n       font-size: 16px;\r\n   }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0c7S0FDRSxlQUFlO0lBQ2hCO0VBQ0Y7RUFDQSwyQkFBMkI7RUFDM0I7R0FDQyx5QkFBaUI7R0FBakIsaUJBQWlCO0dBQ2pCLE9BQU87R0FDUCxZQUFZO0dBQ1o7RUFDRDtLQUNHLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsb0JBQW9CO0dBQ3RCO0VBQ0Q7S0FDRyxnQkFBZ0I7R0FDbEI7RUFDRDtLQUNHLGFBQWE7S0FDYixpQkFBaUI7S0FDakIsYUFBYTtJQUNkO0VBQ0Q7T0FDSSx1QkFBdUI7SUFDMUI7RUFDRDtPQUNJLGFBQWE7T0FDYixpQkFBaUI7T0FDakIsZ0JBQWdCO0lBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIHtcclxuICAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgIH1cclxuIH1cclxuICAvKi0tLW5hdmlnYXRpb24gYmFyLS0tLS0tKi9cclxuICAjbmF2LWJhcntcclxuICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgdG9wOiAwO1xyXG4gICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCBpbWd7IFxyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbiAgLm5hdmJhci1uYXYgbGl7XHJcbiAgICAgcGFkZGluZzogMCAxMHB4OyAgIFxyXG4gIH1cclxuICAubmF2YmFyLW5hdiBsaSBhe1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG4gICAubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgICAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5uYXYtbGlua3tcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgIH1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"nav-bar\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\n      <a class=\"navbar-brand\" routerLink=\"/main\"><img src=\"/assets/logoo.png\"></a>\n     \n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n  <!------------------------------SEARCH BAR HERE---------------------------------->\n          <app-searchbar></app-searchbar>\n\n\n        <ul class=\"navbar-nav ml-auto\">\n         <!--------------------------------------------------------------------\n          <li class=\"nav-item\">           \n            <a class=\"nav-link\"routerLink=\"/main\" routerLinkActive=\"active\">Home </a>\n          </li>\n         ----------------------------------------------------------------------------->\n\n\n         <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n              Home</button>\n                <!---------------------------------------------------\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n            \n              <button class=\"dropdown-item\">Web Development</button>\n              <button class=\"dropdown-item\">App Development</button>\n              <button class=\"dropdown-item\">Digital Marketing</button>\n              <button class=\"dropdown-item\">Pharma</button>\n           \n            </div>\n               ----------------------------------------------------->\n          </div>\n\n\n\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\n              Jobs</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\">Web</button>\n              <button class=\"dropdown-item\">App</button>\n              <button class=\"dropdown-item\">Digital</button>\n              <button class=\"dropdown-item\">Pharma</button>\n            </div>\n\n          </div>\n\n\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                <i class=\"fa fa-asterisk\" aria-hidden=\"true\"></i>\n              Services</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\">Web Development</button>\n              <button class=\"dropdown-item\">App Development</button>\n              <button class=\"dropdown-item\">Digital Marketing</button>\n              <button class=\"dropdown-item\">Pharma</button>\n            </div>\n          </div>\n\n          \n\n\n        <!-------------------------------------------------------------\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/mservices\" routerLinkActive=\"active\">Services</a>\n          </li>\n\n        ---------------------------------------------->\n<!--------------------------------------------------------------------------\n          <li class=\"nav-item\">\n              \n            <a class=\"nav-link\" routerLink=\"/testimonails\" routerLinkActive=\"active\">Testimonails</a>\n          </li>\n\n------------------------------------------------------------------------------->\n\n          <div ngbDropdown class=\"d-inline-block\">\n              <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n                  <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>\n                Blog</button>\n            </div>\n        \n\n\n\n\n          <!------------------------------------------------------------------------------------>\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              Login/Register</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n              <button class=\"dropdown-item\"><a routerLink=\"/auth/login\" routerLinkActive=\"active\">Jobseeker</a></button>\n              <button class=\"dropdown-item\">Employeer</button>\n             \n            </div>\n          </div>\n\n<!-----------------------------------------------------------------------\n         \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/jobseeker\" routerLinkActive=\"active\">Jobseeker</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#employeer\">Employeer</a>\n            </li>\n\n---------------------------------------------------------------------------->\n\n<!--------------------------------------------------------------------\n            <li class=\"nav-item\">\n                \n                <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n              </li>\n\n        </ul>\n      </div>\n     </nav>  \n  </section>\n  -------------------------------------------------------------------------------------------->\n\n<!---------------------------------------------------\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n        Contact Us</button>\n    </div>\n-------------------------->\n\n\n  </ul>\n\n \n</div>\n</nav>  \n</section>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carouselExampleControls{\r\n    background: url(\"/assets/M.jpg\");\r\n   \r\n    min-width: 100%;\r\n}\r\n\r\nimg{\r\n    max-width: 250vh;\r\n    max-height: 74.5vh;\r\n   \r\n}\r\n\r\n.carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n    max-width: 600px;\r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7O0lBRWpDLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7O0NBRXRCOztBQUNEO0lBQ0ksU0FBUztJQUNULG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1COztDQUV0Qjs7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9NLmpwZ1wiKTtcclxuICAgXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMjUwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NC41dmg7XHJcbiAgIFxyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDEyNywgMjIxLCAwLjQpO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n        \n      <img src=\"assets/pi.jpg\" class=\"d-block w-100\">\n      \n      <div class=\"carousel-caption animated rotateInUpRight\">\n        <h1>Dedicated Developement Team</h1>\n        <p>\n          \n          Hire top tech talent and quickly scale your delivery capacity. Our engineers have the necessary niche skills, deep expertise, and are highly loyal.\n        </p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/mi.jpg\" class=\"d-block w-100\">\n      <div class=\"carousel-caption animated rollIn\">\n        <h1>Mobile App Developement</h1>\n        <p>\n\n          Use our low-code platform and ten-year expertise in mobile app development to create a solid custom app faster than ever before.\n        </p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/fi.jpg\" class=\"d-block w-100\">\n      <div class=\"carousel-caption animated slideInLeft\">\n        <h1>Enterprise Software Developement</h1>\n        <p>\n          \n          Leverage our ten-year expertise to create a solid software foundation for your business.\n        </p>\n      </div>\n    </div>\n   \n   \n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n  <!--------\n   <div class=\"show text-center\">\n       <a routerLink=\"/main\" routerLinkActive=\"active\"> Show More</a>\n   </div>\n   ----->\n  \n</div>\n\n\n\n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home1/home1.component.css":
/*!*******************************************!*\
  !*** ./src/app/home1/home1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUxL2hvbWUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home1/home1.component.html":
/*!********************************************!*\
  !*** ./src/app/home1/home1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"info.token; else loggedOut\">\n  <h5 class=\"text-primary\">Your Information</h5>\n  <p>\n    <strong>Username:</strong> {{info.username}}<br/>\n    \n    \n  </p>\n  <button class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div>\n\n<ng-template #loggedOut>\n  \n</ng-template>"

/***/ }),

/***/ "./src/app/home1/home1.component.ts":
/*!******************************************!*\
  !*** ./src/app/home1/home1.component.ts ***!
  \******************************************/
/*! exports provided: Home1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Component", function() { return Home1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Home1Component = /** @class */ (function () {
    function Home1Component(token, route) {
        this.token = token;
        this.route = route;
    }
    Home1Component.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    Home1Component.prototype.logout = function () {
        this.token.signOut();
        //window.location.reload();
        this.route.navigate(['/auth/login']);
    };
    Home1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.component.html */ "./src/app/home1/home1.component.html"),
            styles: [__webpack_require__(/*! ./home1.component.css */ "./src/app/home1/home1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Home1Component);
    return Home1Component;
}());



/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.css":
/*!***************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar{\r\n    background: blue;\r\n    text-align: center;\r\n    height: 80px;\r\n}\r\n.navbar-brand img{ \r\n    height: 60px;\r\n  margin-left: -50px;\r\n    border-radius: 100%;\r\n }\r\n.menu-bar ul{\r\n    list-style: none;\r\n    display: inline-flex;\r\n    color: #fff;\r\n}\r\n.menu-bar ul li{\r\n    width: 150px;\r\n    margin: 15px;\r\n    padding: 8px;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n#id, .menu-bar ul li:hover{\r\n    background: #68b3ca;\r\n    border-radius: 3px;\r\n}\r\n.menu-bar .fa{\r\n    margin-right: 8px;\r\n}\r\n.sub-menu-1{\r\n    display: none;\r\n}\r\n.menu-bar ul li:hover .sub-menu-1{\r\n    display: block;\r\n    position: absolute;\r\n    background: #2a2d58;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n}\r\n.menu-bar ul li:hover .sub-menu-1 ul{\r\n\r\n    display: block;\r\n    margin: 10px;\r\n}\r\n.menu-bar ul li:hover .sub-menu-1 ul li{\r\n\r\n    width: 150px;\r\n    padding: 10px;\r\n    border-bottom: 1px dotted #fff;\r\n    background: transparent;\r\n    border-radius: 0;\r\n    text-align: left;\r\n}\r\n.menu-bar ul li:hover .sub-menu-1 ul li:last-child{\r\n    border-bottom: none;\r\n}\r\n.menu-bar ul li:hover .sub-menu-1 ul li a:hover{\r\n    color: #b2ff00;\r\n    \r\n}\r\n.fa-angle-right{\r\n    float: right;\r\n}\r\n.sub-menu-2{\r\n    display: none;\r\n}\r\n.hover-me:hover .sub-menu-2{\r\n    position: absolute;\r\n    display: block;\r\n    margin-top: -40px;\r\n    margin-left: 140px;\r\n    background: #2a2d58;\r\n}\r\n/* --------------------------------------------------- */\r\n.header{\r\n    height: 50vh;\r\n   min-width: 100vh;\r\n  \r\n    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/assets/pix.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;\r\n}\r\n.search-field{\r\n      \r\n    height: 20px;\r\n    padding: 15px;\r\n\r\n}\r\n#search{\r\n    margin: 13px;\r\n    width: 365px;\r\n    margin-left: 100px;\r\n}\r\n.skills{\r\n    width: 200px;\r\n\r\n}\r\n.location{\r\n    width: 100px;\r\n}\r\n#location{\r\n    margin: 5px;\r\n}\r\n.search-btn{\r\n\r\n    height: 34px;\r\n    width: 75px;\r\n    margin-left: 20px;\r\n    background: #0eb6e9;\r\n    border: none;\r\n    color: #fff;\r\n\r\n}\r\n.search-btn:hover\r\n{\r\n\r\n    background: #1d0fda;\r\n   cursor: pointer;       \r\n}\r\nh1{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-bottom: 40px;\r\n    font-size: 45px;\r\n    letter-spacing: 2px;\r\n}\r\n/* ---------------------------------------------------------------------- */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9ic2Vla2VyL2pvYnNlZWtlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0VBQ2YsbUJBQW1CO0lBQ2pCLG9CQUFvQjtFQUN0QjtBQUNGO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBQ0Q7O0lBRUksZUFBZTtJQUNmLGFBQWE7Q0FDaEI7QUFDRDs7SUFFSSxhQUFhO0lBQ2IsY0FBYztJQUNkLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxlQUFlOztDQUVsQjtBQUVEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUVELHlEQUF5RDtBQUV6RDtJQUNJLGFBQWE7R0FDZCxpQkFBaUI7O0lBRWhCLDBGQUEwRjtJQUMxRix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUMzQjtBQUdEOztJQUVJLGFBQWE7SUFDYixjQUFjOztDQUVqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7O0NBRWhCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFDRDs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7O0NBRWY7QUFFRDs7O0lBR0ksb0JBQW9CO0dBQ3JCLGdCQUFnQjtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUVELDRFQUE0RSIsImZpbGUiOiJzcmMvYXBwL2pvYnNlZWtlci9qb2JzZWVrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJhcntcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWd7IFxyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiB9XHJcbi5tZW51LWJhciB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tZW51LWJhciB1bCBsaXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNpZCwgLm1lbnUtYmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzY4YjNjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubWVudS1iYXIgLmZhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5zdWItbWVudS0xe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWVudS1iYXIgdWwgbGk6aG92ZXIgLnN1Yi1tZW51LTF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMyYTJkNTg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpOmhvdmVyIC5zdWItbWVudS0xIHVse1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaTpob3ZlciAuc3ViLW1lbnUtMSB1bCBsaXtcclxuXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGk6aG92ZXIgLnN1Yi1tZW51LTEgdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpOmhvdmVyIC5zdWItbWVudS0xIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2IyZmYwMDtcclxuICAgIFxyXG59XHJcblxyXG4uZmEtYW5nbGUtcmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnN1Yi1tZW51LTJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ob3Zlci1tZTpob3ZlciAuc3ViLW1lbnUtMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmEyZDU4O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgIG1pbi13aWR0aDogMTAwdmg7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjcpLHJnYmEoMCwwLDAsMC43KSksdXJsKFwiL2Fzc2V0cy9waXguanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtZmllbGR7XHJcbiAgICAgIFxyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbn1cclxuI3NlYXJjaHtcclxuICAgIG1hcmdpbjogMTNweDtcclxuICAgIHdpZHRoOiAzNjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4uc2tpbGxze1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG4ubG9jYXRpb257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbiNsb2NhdGlvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5zZWFyY2gtYnRue1xyXG5cclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGViNmU5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLWJ0bjpob3ZlclxyXG57XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzFkMGZkYTtcclxuICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICBcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.html":
/*!****************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div class=\"menu-bar\">  \r\n            <a class=\"navbar-brand\" routerLink=\"/main\"><img src=\"/assets/logoo.png\"></a>         \r\n    <ul>\r\n        <li id=\"home\">\r\n            <a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Home</a>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Jobs</a>\r\n        \r\n        <div class=\"sub-menu-1\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">Mission</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Vision</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Team</a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#\"><i class=\"fa fa-clone\" aria-hidden=\"true\"></i>Services</a>\r\n        \r\n            <div class=\"sub-menu-1\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">Web Designing</a>\r\n                        </li>\r\n\r\n                        <li class=\"hover-me\">\r\n                            <a href=\"#\">Marketing</a><i class=\"fa fa-angle-right\"></i>\r\n                        <div class=\"sub-menu-2\">\r\n\r\n                            <ul>\r\n                                <li><a href=\"#\">SEO</a></li>\r\n                                <li><a href=\"#\">Social Media</a></li>\r\n                                <li><a href=\"#\">Email Marketing</a></li>\r\n                            </ul>\r\n\r\n                        </div>\r\n                        \r\n                        </li>\r\n                        <li class=\"hover-me\">\r\n                            <a href=\"#\">Mobile App</a><i class=\"fa fa-angle-right\"></i>\r\n                        \r\n                            <div class=\"sub-menu-2\">\r\n\r\n                                <ul>\r\n                                    <li><a href=\"#\">Android App</a></li>\r\n                                    <li><a href=\"#\">ios App</a></li>\r\n                                    <li><a href=\"#\">Ionic App</a></li>\r\n                                    <!-- <li><a href=\"#\">Flutter App</a></li>\r\n                                    <li><a href=\"#\">Unity App</a></li> -->\r\n                                </ul>\r\n    \r\n                            </div>\r\n                        \r\n                        </li>\r\n                    </ul>\r\n        \r\n                </div>\r\n        </li>\r\n\r\n        <li>\r\n            <a href=\"#\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>Clients</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\"><i class=\"fa fa-angellist\" aria-hidden=\"true\"></i>Blog</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Login/Register</a>\r\n        </li>\r\n         <!-- <li><a href=\"#\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i>Training</a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>Contact</a></li> -->\r\n\r\n    </ul>\r\n    \r\n</div>\r\n\r\n\r\n<!-- ---------------------------------------------------- -->\r\n\r\n    <div class=\"header\">\r\n      <form>\r\n      <h1>Search Lakh Of Tech Jobs. Find Yours Today</h1>\r\n         <div class=\"form-box\">\r\n           <input class=\"search-field skills\" id=\"search\" name=\"search\" type=\"text\" placeholder=\"Skills,keywords.....\"/>\r\n           \r\n           <input class=\"search-field location\" id=\"location\" name=\"location\" type=\"text\" placeholder=\"location\"/>\r\n  \r\n           <button class=\"search-btn\" type=\"button\"> Search </button>\r\n           \r\n         </div>\r\n      </form>\r\n    </div>\r\n  \r\n\r\n<!-- ---------------------------------------------------------------- -->\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/jobseeker/jobseeker.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jobseeker/jobseeker.component.ts ***!
  \**************************************************/
/*! exports provided: JobseekerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobseekerComponent", function() { return JobseekerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobseekerComponent = /** @class */ (function () {
    function JobseekerComponent() {
    }
    JobseekerComponent.prototype.ngOnInit = function () {
    };
    JobseekerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobseeker',
            template: __webpack_require__(/*! ./jobseeker.component.html */ "./src/app/jobseeker/jobseeker.component.html"),
            styles: [__webpack_require__(/*! ./jobseeker.component.css */ "./src/app/jobseeker/jobseeker.component.css")]
        })
    ], JobseekerComponent);
    return JobseekerComponent;
}());



/***/ }),

/***/ "./src/app/jobslocation/jobslocation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/jobslocation/jobslocation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: url(\"/assets/13.jpg\");\r\n    min-height: 100vh;\r\n    min-width: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.menudropdown1{\r\n    width: 80%;\r\n    height: 100px;\r\n    margin: 0px auto;\r\n}\r\n.menudropdown1 ul{\r\npadding: 0px;\r\n}\r\n.menudropdown1 ul li{\r\n    float: left;\r\n    background-color: black;\r\n    color: white;\r\n    width: 200px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    list-style: none;\r\n    opacity: 0.6;\r\n}\r\n.menudropdown1 ul li ul{\r\n    display: none;\r\n}\r\n.menudropdown1 ul li:hover > ul{\r\n    display: block;\r\n}\r\n.menudropdown1 ul li:hover{\r\n    background-color: #32CD32;\r\n    opacity: 0.9;\r\n}\r\n.menudropdown1 ul li ul li{\r\n    position: relative;\r\n}\r\n.menudropdown1 ul li ul li ul{\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9ic2xvY2F0aW9uL2pvYnNsb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCO0FBQ0Q7QUFDQSxhQUFhO0NBQ1o7QUFFRDtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCO0FBR0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztDQUNaIiwiZmlsZSI6InNyYy9hcHAvam9ic2xvY2F0aW9uL2pvYnNsb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvMTMuanBnXCIpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4ubWVudWRyb3Bkb3duMXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ubWVudWRyb3Bkb3duMSB1bHtcclxucGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubWVudWRyb3Bkb3duMSB1bCBsaXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLm1lbnVkcm9wZG93bjEgdWwgbGkgdWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tZW51ZHJvcGRvd24xIHVsIGxpOmhvdmVyID4gdWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubWVudWRyb3Bkb3duMSB1bCBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMkNEMzI7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcblxyXG4ubWVudWRyb3Bkb3duMSB1bCBsaSB1bCBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWVudWRyb3Bkb3duMSB1bCBsaSB1bCBsaSB1bHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/jobslocation/jobslocation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/jobslocation/jobslocation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<div class=\"menudropdown1\">\n  <ul>\n    <li>USA\n      <ul>\n        <li>New YArk</li>\n      </ul>\n    </li>\n    <li>INDIA\n      <ul>\n      <li>Pune</li>\n      <li>Mumbai</li>\n      <li>Bangalore</li>\n      <li>Dehradone</li>\n      <li>Delhi\n        <ul>\n          <li>MM</li>\n          <li>Reddy</li>\n        </ul>\n      </li>\n    </ul>\n    </li>\n    <li>FRANCE</li>\n    <li>AUSTRALIA</li>\n    <li>BRAZIL</li>\n  </ul>\n\n</div>\n</body>"

/***/ }),

/***/ "./src/app/jobslocation/jobslocation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/jobslocation/jobslocation.component.ts ***!
  \********************************************************/
/*! exports provided: JobslocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobslocationComponent", function() { return JobslocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobslocationComponent = /** @class */ (function () {
    function JobslocationComponent() {
    }
    JobslocationComponent.prototype.ngOnInit = function () {
    };
    JobslocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobslocation',
            template: __webpack_require__(/*! ./jobslocation.component.html */ "./src/app/jobslocation/jobslocation.component.html"),
            styles: [__webpack_require__(/*! ./jobslocation.component.css */ "./src/app/jobslocation/jobslocation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobslocationComponent);
    return JobslocationComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    /* background:linear-gradient(rgba(125, 150, 224, 0.7),rgba(125, 150, 224, 0.7)), url(\"/assets/lp.jpg\") ; */\r\n    min-height: 100vh;\r\n    min-width: 101%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: -14.5px;\r\n    padding-right: 0;\r\n   \r\n}\r\n.col-sm-6{   \r\n    margin-left: 400px;\r\n    margin-top: 30px;   \r\n}\r\n.jumbotron{\r\n    width: 400px; \r\n    /* background-color: slategray;\r\n    opacity: 0.65; */\r\n    box-shadow: -1px 1px 60px 10px lavender;\r\n    background: bottom;\r\n        }\r\n.jumbotron img{\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 64px;\r\n    margin-left:134px;  \r\n        }\r\n.jumbotron h3{\r\n    text-align: center;    \r\n}\r\n.form-group{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    font-size: 15px;\r\n    padding: 15px ;\r\n    margin: 2px ;    \r\n}\r\n.form-group i{\r\n    width: 50px;\r\n    float: left;\r\n    text-align: center;\r\n    color: floralwhite;\r\n    padding-top: 12px;\r\n }\r\n.form-group input{\r\n\r\n/*----------------------\r\n    border: none;\r\n    background: none;\r\n------------------*/\r\n\r\n    outline: none;  \r\n    color: blue;\r\n    font-size: 12px;\r\n    width: 80%;   \r\n    margin: 0 50px;\r\n    \r\n  }\r\n.btn{\r\n    width: 50%;\r\n    background: rgb(10, 147, 238);\r\n    margin-top: 15px;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    margin-left:80px;\r\n  }\r\n.a{\r\n      color: currentColor;\r\n  }\r\n/* --------------------------------------- */\r\nheader {\r\n    position: relative;\r\n    background-color: black;\r\n    height: 100vh;\r\n    min-height: 25rem;\r\n    min-width: 100vh;\r\n    overflow: hidden;\r\n    \r\n  }\r\nheader video {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: 0;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n\r\n \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRHQUE0RztJQUM1RyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixpQkFBaUI7O0NBRXBCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2I7cUJBQ2lCO0lBQ2pCLHdDQUF3QztJQUN4QyxtQkFBbUI7U0FDZDtBQUNUO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO1NBQ2I7QUFDVDtJQUNJLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7Q0FDaEI7QUFFQTtJQUNHLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFFRDs7QUFFRDs7O29CQUdvQjs7SUFFaEIsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7O0dBRWhCO0FBRUQ7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQjtBQUNEO01BQ0ksb0JBQW9CO0dBQ3ZCO0FBR0QsNkNBQTZDO0FBRzdDO0lBQ0UsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0dBRWxCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUdYLHFEQUFxRDtJQUNyRCw2Q0FBNkM7R0FDOUMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC8qIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC43KSxyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuNykpLCB1cmwoXCIvYXNzZXRzL2xwLmpwZ1wiKSA7ICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAxJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNC41cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICBcclxufVxyXG4uY29sLXNtLTZ7ICAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgIFxyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICB3aWR0aDogNDAwcHg7IFxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xyXG4gICAgb3BhY2l0eTogMC42NTsgKi9cclxuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDYwcHggMTBweCBsYXZlbmRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJvdHRvbTtcclxuICAgICAgICB9XHJcbi5qdW1ib3Ryb24gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMzRweDsgIFxyXG4gICAgICAgIH1cclxuLmp1bWJvdHJvbiBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweCA7XHJcbiAgICBtYXJnaW46IDJweCA7ICAgIFxyXG59XHJcblxyXG4gLmZvcm0tZ3JvdXAgaXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuIH1cclxuXHJcbiAuZm9ybS1ncm91cCBpbnB1dHtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBvdXRsaW5lOiBub25lOyAgXHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA4MCU7ICAgXHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmJ0bntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAsIDE0NywgMjM4KTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDo4MHB4O1xyXG4gIH1cclxuICAuYXtcclxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICB9XHJcblxyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXJlbTtcclxuICAgIG1pbi13aWR0aDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuXHJcbiBcclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------------------------------------------->\n<div *ngIf=\"isLoggedIn; else loggedOut\">\n  Successfully logged in. \n</div>\n<ng-template #loggedOut>\n<div class=\"container\">\n\n   \n    <header>\n    <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\n        <source src=\"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4\" type=\"video/mp4\">\n      </video>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"jumbotron\">\n            <img src=\"/assets/logoo.png\">\n            <h3> Jobseeker Login</h3>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n<!--------------------------------------\n        <label for=\"username\">Username</label>\n        -------------------------->\n        <i class=\"fa fa-envelope-o fa-fw\" aria-hidden=\"true\"></i>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email ID\" name=\"Username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\" style=\"color:red\">UserName is Required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n<!-----------------------------------------------\n        <label for=\"password\">Password</label>\n---------------------------->\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\" style=\"color:red\">Password is Required</div>\n          <div *ngIf=\"password.errors.minlength\" style=\"color:red\">Password Must Be At Least 6 Characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Login</button>\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Username or Password is invalid: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <a routerLink=\"/forgot\" routerLinkActive=\"active\"><b>Forgot password?</b></a><br><br>\n  <p> <span style=\"color: azure\"><b> New User? </b> </span> <a routerLink=\"/freshandexp\" routerLinkActive=\"active\"> <b>Register Now</b> </a> </p>\n    </div>\n    </div>\n  </div>\n\n</header>\n\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, route) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.route = route;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            //  this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_4__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            //   this.roles = this.tokenStorage.getAuthorities();
            // this.reloadPage();
            _this.route.navigate(['/trail']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .section{\r\n   background: linear-gradient(rgba(125, 150, 224, 0.7),rgba(125, 150, 224, 0.7));\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSwrRUFBK0U7Q0FDakYiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuc2VjdGlvbntcclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTI1LCAxNTAsIDIyNCwgMC43KSxyZ2JhKDEyNSwgMTUwLCAyMjQsIDAuNykpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"section\">\n\n<!---------------------------------->\n<app-header></app-header>\n\n <app-home></app-home>\n <!-----------------\n <app-searchbar></app-searchbar>\n          ----->\n <app-blink></app-blink>\n \n \n <!-- <app-side></app-side> -->\n <app-side1></app-side1>\n <!-- <app-namescroll></app-namescroll> -->\n <app-videos></app-videos>\n <br>\n <app-mservices></app-mservices>\n \n <app-testimonails></app-testimonails>\n <app-scrollcandidates></app-scrollcandidates>\n <app-contact></app-contact>\n <app-footer></app-footer>\n\n\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mservices/mservices.component.css":
/*!***************************************************!*\
  !*** ./src/app/mservices/mservices.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700');\r\n\r\n.container{\r\n    margin-left: 40px;\r\n    min-width: 205vh;   \r\n}\r\n\r\n.imgContainer{\r\nmargin-left: 20px;\r\n}\r\n\r\n.heading_tabs{\r\n    margin-left: 20px;\r\n}\r\n\r\n.text_style_tabs{\r\n    margin-left: 20px;\r\n}\r\n\r\n#Services{   \r\n  margin-left: 550px;\r\n}\r\n\r\n.register-form{\r\n           background-color: whitesmoke; \r\n           margin-top: 20px;    \r\n}\r\n\r\n.advance-career {\r\n           height: 61px;\r\n           font-family: Poppins;\r\n           font-size: 16px;\r\n           font-weight: 300;\r\n           font-style: normal;\r\n           font-stretch: normal;\r\n           line-height: 1.63;\r\n           letter-spacing: normal;\r\n           text-align: center;\r\n           color: #000000;\r\n}\r\n\r\n.mh_tabbtnwrap {\r\n           text-align: center;\r\n           height: 40px;\r\n}\r\n\r\n.mh_tabbtn:hover, .mh_tabbtn:active, .active, .mh_tabdatabtn:hover, .mh_tabdatabtn:active {\r\n           color: #ffffff !important;\r\n           background: blue !important;\r\n           font-weight: 300;\r\n}\r\n\r\n.mh_tabbtn {\r\n           font-size: 14px;\r\n           font-weight: 500;\r\n           font-style: normal;\r\n           font-stretch: normal;\r\n           line-height: 1.71;\r\n           letter-spacing: normal;\r\n           text-align: center;\r\n           color: #000000;\r\n           padding: 12px 10px;\r\n           text-decoration: none;\r\n           margin-left: 20px;\r\n           text-transform: uppercase;\r\n           background: #fff;\r\n           border: none;\r\n           width: 146px;\r\n}\r\n\r\n.mh_tabdatawrap {\r\n           margin-top: 30px;\r\n           max-height: 730px;\r\n}\r\n\r\n.tabcolumn.nomargin {\r\n           margin: 0 !important;\r\n}\r\n\r\n.heading_tabs {\r\n           font-size: 23px;\r\n           font-weight: 600;\r\n           font-style: normal;\r\n           font-stretch: normal;\r\n           line-height: 1.42;\r\n           letter-spacing: normal;\r\n           color: #000000;\r\n           text-align: left;\r\n           margin-top: 10px;\r\n}\r\n\r\n.text_style_tabs {\r\n           font-size: 16px;\r\n           font-weight: 300;\r\n           font-style: normal;\r\n           font-stretch: normal;\r\n           line-height: 1.63;\r\n           letter-spacing: normal;\r\n           color: #000000;\r\n           padding: 20px 0px;\r\n           height: 110px;\r\n           text-overflow: ellipsis;\r\n}\r\n\r\n.mh_tabdatabtn {\r\n           background: #fff;\r\n           border: 1px solid blue;\r\n           font-size: 14px;\r\n           font-weight: 400;\r\n           line-height: 1.71;\r\n           text-align: center;\r\n           color: blue;\r\n           padding: 10px 40px;\r\n           text-decoration: none;\r\n           text-transform: uppercase;\r\n           background: #fff;\r\n           font-stretch: normal;\r\n           letter-spacing: normal;\r\n           margin-bottom: 15px;\r\n           display: inline-block;\r\n           margin-left: 50px;\r\n}\r\n\r\nelement.style {\r\n           display: block;\r\n}\r\n\r\n.tabcolumn {\r\n           width: 30%;\r\n           float: left;\r\n           margin-left: 45px;\r\n           padding: 10px 0px;\r\n}\r\n\r\n.tabcolumn.nomargin {\r\n           margin: 0 !important;\r\n}\r\n\r\n.clearifix {\r\n           clear: both;\r\n}\r\n\r\n/*-------Services------*/\r\n\r\n/* #Services{\r\n        background-image:linear-gradient(rgba(33, 106, 224),rgba(33, 106, 224));\r\n      \r\n        background-size: cover;\r\n        background-position: center;\r\n        color:#efefef !important;\r\n        background-attachment: fixed;\r\n        padding-top: 8px;\r\n       \r\n        max-height: 636px;\r\n    }\r\n    #Services h1{\r\n        text-align: center;\r\n    \r\n        padding-bottom: 10px\r\n    }\r\n    #Services h1::after{\r\n      content: '';\r\n\r\n      display: block;\r\n      height: 3px;\r\n      width: 170px;\r\n      margin: 20px auto 5px;\r\n    }\r\n    .services{\r\n        margin-top: 40px;\r\n    }\r\n    .icon{\r\n        font-size: 40px;\r\n        margin: 20px auto;\r\n        padding: 8px;\r\n        height: 80px;\r\n        width: 80px;\r\n        border: 1px solid #fff;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n    #Services p{\r\n         font-size: 14px;\r\n         margin-top: 20px;\r\n         color: #ccc;\r\n    }\r\n     .services .col-md-3:hover{\r\n         background: #09bdeb;\r\n         cursor: pointer;\r\n         transition: 0.7s;\r\n     } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNlcnZpY2VzL21zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7QUFFdkY7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0FBQ0Esa0JBQWtCO0NBQ2pCOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCOztBQUNEO1dBQ1csNkJBQTZCO1dBQzdCLGlCQUFpQjtDQUMzQjs7QUFDRDtXQUNXLGFBQWE7V0FDYixxQkFBcUI7V0FDckIsZ0JBQWdCO1dBQ2hCLGlCQUFpQjtXQUNqQixtQkFBbUI7V0FDbkIscUJBQXFCO1dBQ3JCLGtCQUFrQjtXQUNsQix1QkFBdUI7V0FDdkIsbUJBQW1CO1dBQ25CLGVBQWU7Q0FDekI7O0FBQ0Q7V0FDVyxtQkFBbUI7V0FDbkIsYUFBYTtDQUN2Qjs7QUFFRDtXQUNXLDBCQUEwQjtXQUMxQiw0QkFBNEI7V0FDNUIsaUJBQWlCO0NBQzNCOztBQUNEO1dBQ1csZ0JBQWdCO1dBQ2hCLGlCQUFpQjtXQUNqQixtQkFBbUI7V0FDbkIscUJBQXFCO1dBQ3JCLGtCQUFrQjtXQUNsQix1QkFBdUI7V0FDdkIsbUJBQW1CO1dBQ25CLGVBQWU7V0FDZixtQkFBbUI7V0FDbkIsc0JBQXNCO1dBQ3RCLGtCQUFrQjtXQUNsQiwwQkFBMEI7V0FDMUIsaUJBQWlCO1dBQ2pCLGFBQWE7V0FDYixhQUFhO0NBQ3ZCOztBQUNEO1dBQ1csaUJBQWlCO1dBQ2pCLGtCQUFrQjtDQUM1Qjs7QUFDRDtXQUNXLHFCQUFxQjtDQUMvQjs7QUFDRDtXQUNXLGdCQUFnQjtXQUNoQixpQkFBaUI7V0FDakIsbUJBQW1CO1dBQ25CLHFCQUFxQjtXQUNyQixrQkFBa0I7V0FDbEIsdUJBQXVCO1dBQ3ZCLGVBQWU7V0FDZixpQkFBaUI7V0FDakIsaUJBQWlCO0NBQzNCOztBQUNEO1dBQ1csZ0JBQWdCO1dBQ2hCLGlCQUFpQjtXQUNqQixtQkFBbUI7V0FDbkIscUJBQXFCO1dBQ3JCLGtCQUFrQjtXQUNsQix1QkFBdUI7V0FDdkIsZUFBZTtXQUNmLGtCQUFrQjtXQUNsQixjQUFjO1dBQ2Qsd0JBQXdCO0NBQ2xDOztBQUNEO1dBQ1csaUJBQWlCO1dBQ2pCLHVCQUF1QjtXQUN2QixnQkFBZ0I7V0FDaEIsaUJBQWlCO1dBQ2pCLGtCQUFrQjtXQUNsQixtQkFBbUI7V0FDbkIsWUFBWTtXQUNaLG1CQUFtQjtXQUNuQixzQkFBc0I7V0FDdEIsMEJBQTBCO1dBQzFCLGlCQUFpQjtXQUNqQixxQkFBcUI7V0FDckIsdUJBQXVCO1dBQ3ZCLG9CQUFvQjtXQUNwQixzQkFBc0I7V0FDdEIsa0JBQWtCO0NBQzVCOztBQUNEO1dBQ1csZUFBZTtDQUN6Qjs7QUFDRDtXQUNXLFdBQVc7V0FDWCxZQUFZO1dBQ1osa0JBQWtCO1dBQ2xCLGtCQUFrQjtDQUM1Qjs7QUFDRDtXQUNXLHFCQUFxQjtDQUMvQjs7QUFDRDtXQUNXLFlBQVk7Q0FDdEI7O0FBTUUseUJBQXlCOztBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQThDSyIsImZpbGUiOiJzcmMvYXBwL21zZXJ2aWNlcy9tc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCcpO1xyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDV2aDsgICBcclxufVxyXG5cclxuLmltZ0NvbnRhaW5lcntcclxubWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmhlYWRpbmdfdGFic3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi50ZXh0X3N0eWxlX3RhYnN7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4gI1NlcnZpY2VzeyAgIFxyXG4gIG1hcmdpbi1sZWZ0OiA1NTBweDtcclxufSBcclxuLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgXHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgICAgXHJcbn0gICAgICAgXHJcbi5hZHZhbmNlLWNhcmVlciB7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogMS42MztcclxuICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ubWhfdGFiYnRud3JhcCB7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLm1oX3RhYmJ0bjpob3ZlciwgLm1oX3RhYmJ0bjphY3RpdmUsIC5hY3RpdmUsIC5taF90YWJkYXRhYnRuOmhvdmVyLCAubWhfdGFiZGF0YWJ0bjphY3RpdmUge1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLm1oX3RhYmJ0biB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICB3aWR0aDogMTQ2cHg7XHJcbn1cclxuLm1oX3RhYmRhdGF3cmFwIHtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgIG1heC1oZWlnaHQ6IDczMHB4O1xyXG59XHJcbi50YWJjb2x1bW4ubm9tYXJnaW4ge1xyXG4gICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkaW5nX3RhYnMge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogMS40MjtcclxuICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udGV4dF9zdHlsZV90YWJzIHtcclxuICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjM7XHJcbiAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5taF90YWJkYXRhYnRuIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuZWxlbWVudC5zdHlsZSB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRhYmNvbHVtbiB7XHJcbiAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG4udGFiY29sdW1uLm5vbWFyZ2luIHtcclxuICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG4uY2xlYXJpZml4IHtcclxuICAgICAgICAgICBjbGVhcjogYm90aDtcclxufVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIFxyXG4gICBcclxuICAgLyotLS0tLS0tU2VydmljZXMtLS0tLS0qL1xyXG4gICAgLyogI1NlcnZpY2Vze1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMzMsIDEwNiwgMjI0KSxyZ2JhKDMzLCAxMDYsIDIyNCkpO1xyXG4gICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjojZWZlZmVmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgbWF4LWhlaWdodDogNjM2cHg7XHJcbiAgICB9XHJcbiAgICAjU2VydmljZXMgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxuICAgIH1cclxuICAgICNTZXJ2aWNlcyBoMTo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvIDVweDtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmljb257XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNTZXJ2aWNlcyBwe1xyXG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgfVxyXG4gICAgIC5zZXJ2aWNlcyAuY29sLW1kLTM6aG92ZXJ7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICMwOWJkZWI7XHJcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgICB9ICovIl19 */"

/***/ }),

/***/ "./src/app/mservices/mservices.component.html":
/*!****************************************************!*\
  !*** ./src/app/mservices/mservices.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\n<div class=\"form-group\">\n  <h4 id=\"Services\">Our Services</h4>\n\n</div>\n\n          <!---------------------------------------------------------------------------------------------------------->\n          <ngb-tabset #t=\"ngbTabset\">\n            <ngb-tab id=\"tab-selectbyid1\" title=\"Core Services\">\n              <ng-template ngbTabContent>\n       <div class=\"row register-form\">\n                  <!----------------------------------------------------------------------------------->\n                \n                  <div id=\"coreserv\" class=\"mh_tabdatawrap tabcontent\">\n                    <div class=\"tabcolumn nomargin\">\n                      <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/resume-database-1.jpg\"></div>\n                      <div class=\"heading_tabs\">Resume Database Access</div>\n                      <div class=\"text_style_tabs\">Find your next hire with all new RDA powered by Semantic Search technology</div>\n                      <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/Job-Posting-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Job Posting</div>\n                        <div class=\"text_style_tabs\">Reach your next hire faster. Get relevant responses to your job ads with our new age technology.</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/Monster-Social-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Sahiudhyogh Social Job Ads</div>\n                        <div class=\"text_style_tabs\">Use the power of Sahi to take your job posting to a large pool of active and passive job seekers</div>\n              \n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n  \n                      </div>\n                  <!------------------------------------------------------------------------------->\n                </div>\n  \n              </ng-template>\n            </ngb-tab>\n  \n            <ngb-tab id=\"tab-selectbyid2\" title=\"Better To Gether\">\n              <ng-template ngbTabContent>\n                  <div class=\"row register-form\">\n                   \n                  <div id=\"addon\" class=\"mh_tabdatawrap tabcontent\">\n                      <div class=\"tabcolumn nomargin\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/rozgardunia.jpg\"></div>\n                        <div class=\"heading_tabs\">Rozgarduniya</div>\n                        <div class=\"text_style_tabs\">Looking for blue-collared workers? Get access to thousands of certified service professionals with Sahiudhyogh.</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/Monster-COllege-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Sahiudhyogh College</div>\n                        <div class=\"text_style_tabs\">Looking to hire fresh graduates or campus hiring on the cards? Sahiudhyogh College is the place for you.</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/Career-Solution-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Career Site Solution</div>\n                        <div class=\"text_style_tabs\">Connect with us for an SEO optimized, mobile compatible site</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      \n                    </div>\n  </div>\n              </ng-template>\n            </ngb-tab>\n  \n            <ngb-tab id=\"tab-selectbyid3\" title=\"More Solutions\">\n              <ng-template ngbTabContent>\n                  <div class=\"row register-form\">\n  \n                  <div id=\"bettertogether\" class=\"mh_tabdatawrap tabcontent\">\n                      <div class=\"tabcolumn nomargin\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/monster_assessment-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Sahiudhyogh Assessments</div>\n                        <div class=\"text_style_tabs\">Sahiudhyogh Assessments allows recruiters to assess candidates across General Aptitude, IT.</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/quinton-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Quinton</div>\n                        <div class=\"text_style_tabs\">Save 70% of your efforts by automating your interview process with Monster Quinton (Quick Interview on Demand).</div>\n                        <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      <div class=\"tabcolumn\">\n                        <div class=\"imgContainer\"><img src=\"https://media4.monsterindia.com/recruiter_2015/india/images/qhire-1.jpg\"></div>\n                        <div class=\"heading_tabs\">Q Hire</div>\n                        <div class=\"text_style_tabs\">Sourcing, Screening, Interview Scheduling and Offer – All in One.</div>\n                     <a class=\"mh_tabdatabtn\">Know More</a> </div>\n                      </div>\n  </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>  \n   <!------------------------------------------------------------------------------------------------------->\n    </div>\n  </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!------------services--------->\n<!-- <div class=\"container\">      \n<section id=\"Services\">\n  \n        <h1> Our Services</h1>\n        <div class=\"row services\">\n            <div class=\"col-md-3 text-center\">\n               <div class=\"icon\">\n                  <i class=\"fa fa-desktop\"></i>\n               </div>\n                 <h3>Web Development</h3>\n                 <p>\n                       Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                 </p>\n            </div>\n            <div class=\"col-md-3 text-center\">\n                   <div class=\"icon\">\n                      <i class=\"fa fa-tablet\"></i>\n                   </div>\n                     <h3>App Development</h3>\n                     <p>\n                           Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                     </p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n                       <div class=\"icon\">\n                          <i class=\"fa fa-line-chart\"></i>\n                       </div>\n                         <h3>Digital Marketing</h3>\n                         <p>\n                               Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                         </p>\n                    </div>\n\n                    <div class=\"col-md-3 text-center\">\n                      <div class=\"icon\">\n                              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\n                      </div>\n                        <h3>Pharma</h3>\n                        <p>\n                              Include Bootstrap's source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don't include documentation, but do include our build system and readme.\n                        </p>\n                   </div>\n\n        </div>\n\n</section>\n</div> -->"

/***/ }),

/***/ "./src/app/mservices/mservices.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mservices/mservices.component.ts ***!
  \**************************************************/
/*! exports provided: MservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MservicesComponent", function() { return MservicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var MservicesComponent = /** @class */ (function () {
    function MservicesComponent(config) {
        // customize default values of tabsets used by this component tree
        config.justify = 'center';
        config.type = 'pills';
    }
    MservicesComponent.prototype.ngOnInit = function () {
    };
    MservicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mservices',
            template: __webpack_require__(/*! ./mservices.component.html */ "./src/app/mservices/mservices.component.html"),
            styles: [__webpack_require__(/*! ./mservices.component.css */ "./src/app/mservices/mservices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabsetConfig"]])
    ], MservicesComponent);
    return MservicesComponent;
}());



/***/ }),

/***/ "./src/app/namescroll/namescroll.component.css":
/*!*****************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n.carousel-item{\r\npadding: 5px;\r\n}\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZXNjcm9sbC9uYW1lc2Nyb2xsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isb0NBQW9DOzs7O0lBSXBDLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjs7Q0FFdEI7QUFDRDtBQUNBLGFBQWE7Q0FDWjtBQUdEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmFtZXNjcm9sbC9uYW1lc2Nyb2xsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm90dG9tOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAxMjcsIDIyMSwgMC40KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmNhcm91c2VsLWl0ZW17XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/namescroll/namescroll.component.html":
/*!******************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n \n       <div class=\"container\">\n \n      <div class=\"carousel-item active\" style=\"color:red\">\n    <!-----------------------------\n        <img src=\"assets/bha.png\">\n        <img src=\"assets/info.jpg\">\n        <img src=\"assets/lti.png\">\n        <img src=\"assets/meg.jpg\">\n        <img src=\"assets/ora.png\">\n        <img src=\"assets/vir.png\">\n        <img src=\"assets/inf.png\">\n        <img src=\"assets/wip.png\">\n        <img src=\"assets/tcs.jpg\">\n       ---------------------------------->\n     <b>  Employee Member Referal Programee  Employee Member Referal Programee   Employee Member Referal Programee </b>\n       \n      </div>\n \n \n      <div class=\"carousel-item\" style=\"color:green\">\n <i>\n    Employee Member Referal Programee  Employee Member Referal Programee   Employee Member Referal Programee \n </i>\n       <!--------------------------------\n         <img src=\"assets/bha.png\">\n         <img src=\"assets/info.jpg\">\n         <img src=\"assets/cog.png\">\n         <img src=\"assets/cgi.png\">\n         <img src=\"assets/cog.png\">\n         <img src=\"assets/hcl.jpg\">\n         <img src=\"assets/hp.png\">\n         <img src=\"assets/wip.png\">\n         <img src=\"assets/vir.png\">\n        ------------------------------------>\n      </div>\n\n\n      <div class=\"carousel-item\" style=\"color:palevioletred\">\n          <b>\n              Employee Member Referal Programee   Employee Member Referal Programee   Employee Member Referal Programee  \n          </b>\n                <!--------------------------------\n                  <img src=\"assets/bha.png\">\n                  <img src=\"assets/info.jpg\">\n                  <img src=\"assets/cog.png\">\n                  <img src=\"assets/cgi.png\">\n                  <img src=\"assets/cog.png\">\n                  <img src=\"assets/hcl.jpg\">\n                  <img src=\"assets/hp.png\">\n                  <img src=\"assets/wip.png\">\n                  <img src=\"assets/vir.png\">\n                 ------------------------------------>\n               </div>\n              \n             \n     \n    \n     </div>\n    </div>\n \n \n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n   \n    \n  </div>\n \n \n \n \n  \n  \n  \n "

/***/ }),

/***/ "./src/app/namescroll/namescroll.component.ts":
/*!****************************************************!*\
  !*** ./src/app/namescroll/namescroll.component.ts ***!
  \****************************************************/
/*! exports provided: NamescrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamescrollComponent", function() { return NamescrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamescrollComponent = /** @class */ (function () {
    function NamescrollComponent() {
    }
    NamescrollComponent.prototype.ngOnInit = function () {
    };
    NamescrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-namescroll',
            template: __webpack_require__(/*! ./namescroll.component.html */ "./src/app/namescroll/namescroll.component.html"),
            styles: [__webpack_require__(/*! ./namescroll.component.css */ "./src/app/namescroll/namescroll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NamescrollComponent);
    return NamescrollComponent;
}());



/***/ }),

/***/ "./src/app/password/password.component.css":
/*!*************************************************!*\
  !*** ./src/app/password/password.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n     .container{\r\n      \r\n        background-position: center;\r\n         background-size: cover;\r\n         background-repeat: no-repeat;\r\n       }\r\n  \r\n      .row{\r\n       \r\n       \r\n      \r\n       position: absolute;\r\n        top: 50%;\r\n        left: 55%;\r\n         -webkit-transform: translate(-50%,-50%);\r\n                 transform: translate(-50%,-50%);\r\n         \r\n        box-sizing: border-box;\r\n       \r\n        border-radius: 10px;\r\n      }\r\n  \r\n      .jumbotron{\r\n              width: 400px;\r\n                }\r\n  \r\n      .jumbotron img{\r\n        border-radius: 50%;\r\n        width: 50px;\r\n        height: 64px;\r\n        margin-left:134px;\r\n  \r\n      }\r\n  \r\n      .row h3{\r\n        float: bottom;\r\n          margin-top:0px;\r\n          color: rgb(10, 147, 238);\r\n          text-align: center;\r\n          font-size: 25px;\r\n          padding-right: 0px; \r\n       }\r\n  \r\n      .form-group{\r\n        width: 100%;\r\n        overflow: hidden;\r\n        font-size: 15px;\r\n        padding: 2px ;\r\n        margin: 2px ;\r\n        margin-top: 4px;\r\n      }\r\n  \r\n      .form-group input{\r\n            \r\n          font-size: 15px;\r\n          width: 80%;\r\n          float: left;\r\n          margin: 0 10px;\r\n        }\r\n  \r\n      /*------------------------------------*/\r\n  \r\n      .btn{\r\n          width: 50%;\r\n          background: rgb(10, 147, 238);\r\n          padding: 5px;\r\n          font-size: 10px;\r\n          cursor: pointer;\r\n          margin-left:55px;\r\n        }\r\n  \r\n      .login-box,.btn {\r\n            font-size: 15px;\r\n         \r\n           \r\n        }\r\n  \r\n        \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQ0s7O1FBRUcsNEJBQTRCO1NBQzNCLHVCQUF1QjtTQUN2Qiw2QkFBNkI7UUFDOUI7O01BRUY7Ozs7T0FJQyxtQkFBbUI7UUFDbEIsU0FBUztRQUNULFVBQVU7U0FDVCx3Q0FBZ0M7aUJBQWhDLGdDQUFnQzs7UUFFakMsdUJBQXVCOztRQUV2QixvQkFBb0I7T0FDckI7O01BQ0M7Y0FDTSxhQUFhO2lCQUNWOztNQUVYO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCOztPQUVuQjs7TUFFQTtRQUNDLGNBQWM7VUFDWixlQUFlO1VBQ2YseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixnQkFBZ0I7VUFDaEIsbUJBQW1CO1FBQ3JCOztNQUVGO1FBQ0UsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7T0FDakI7O01BS0M7O1VBRUUsZ0JBQWdCO1VBQ2hCLFdBQVc7VUFDWCxZQUFZO1VBQ1osZUFBZTtTQUNoQjs7TUFHUCx3Q0FBd0M7O01BRWxDO1VBQ0UsV0FBVztVQUNYLDhCQUE4QjtVQUM5QixhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGdCQUFnQjtVQUNoQixpQkFBaUI7U0FDbEI7O01BRUQ7WUFDSSxnQkFBZ0I7OztTQUduQiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgICAuY29udGFpbmVye1xyXG4gICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3d7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1NSU7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgLmp1bWJvdHJvbntcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgLmp1bWJvdHJvbiBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMzRweDtcclxuICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAgLnJvdyBoM3tcclxuICAgICAgICBmbG9hdDogYm90dG9tO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEwLCAxNDcsIDIzOCk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxyXG4gICAgICAgfVxyXG4gIFxyXG4gICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgXHJcbiAgICAgICBcclxuICBcclxuICAgICAgICAuZm9ybS1ncm91cCBpbnB1dHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICBcclxuICAgICAgICAuYnRue1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMCwgMTQ3LCAyMzgpO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6NTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ2luLWJveCwuYnRuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/password/password.component.html":
/*!**************************************************!*\
  !*** ./src/app/password/password.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--------------------------------------------------->\n<div class=container>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"jumbotron\">\n            <img src=\"/assets/logoo.png\">\n            \n          <h3> Change Password</h3>\n          <form [formGroup]=\"reactiveForm\">\n  \n              <div class=\"form-group\">\n              \n                  <input type=\"text\" class=\"form-control\" id=\"otp\" placeholder=\"Enter Your OTP\"\n                    name=\"otp\" formControlName=\"otp\">\n                  <div\n                    *ngIf=\"reactiveForm.controls.otp.errors && (reactiveForm.controls.otp.touched || reactiveForm.controls.otp.dirty)\"\n                    style=\"color: blue\">\n                    <div *ngIf=\"reactiveForm.hasError('required','otp')\"> OTP is Required</div>\n                    <div *ngIf=\"reactiveForm.hasError('pattern','otp')\"> OTP is invalid</div>\n                    <div *ngIf=\"reactiveForm.hasError('minlength','otp')\"> OTP is must be 3 min</div>\n                  </div>\n      \n                </div>\n  \n  \n                <div class=\"form-group\">\n              \n                    <input type=\"text\" class=\"form-control\" id=\"newpassword\" placeholder=\"Enter New Password\"\n                      name=\"newpassword\" formControlName=\"newpassword\">\n                    <div\n                      *ngIf=\"reactiveForm.controls.newpassword.errors && (reactiveForm.controls.newpassword.touched || reactiveForm.controls.newpassword.dirty)\"\n                      style=\"color: blue\">\n                      <div *ngIf=\"reactiveForm.hasError('required','newpassword')\"> New Password is Required</div>\n                      <div *ngIf=\"reactiveForm.hasError('pattern','newpassword')\">  invalid</div>\n                      <div *ngIf=\"reactiveForm.hasError('minlength','newpassword')\"> Password must be 6 min</div>\n                    </div>\n        \n                  </div>\n           \n  \n                  <div class=\"form-group\">\n              \n                      <input type=\"text\" class=\"form-control\" id=\"confirmpassword\" placeholder=\"Confirm Password\"\n                        name=\"confirmpassword\" formControlName=\"confirmpassword\">\n                      <div\n                        *ngIf=\"reactiveForm.controls.confirmpassword.errors && (reactiveForm.controls.confirmpassword.touched || reactiveForm.controls.confirmpassword.dirty)\"\n                        style=\"color: blue\">\n                        <div *ngIf=\"reactiveForm.hasError('required','confirmpassword')\"> Confirm Password is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','confirmpassword')\">  invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','confirmpassword')\"> Password must be 6 min</div>\n                      </div>\n          \n                    </div>\n  \n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\"> Submit </button>\n            </div>\n  \n            \n  \n  \n          </form>\n  \n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/password/password.component.ts":
/*!************************************************!*\
  !*** ./src/app/password/password.component.ts ***!
  \************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/password/password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/referal/referal.component.css":
/*!***********************************************!*\
  !*** ./src/app/referal/referal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n.container{\r\n    padding-top: 20px;\r\n    padding-bottom: 30px;\r\n}\r\nh3{\r\n    margin-top: 10px;\r\n    color: rgb(25, 111, 192);\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\nh6{\r\n    margin-top: 10px;\r\n    \r\n}\r\n.image{\r\n    float: right;\r\n     height: 245px; \r\n}\r\n.image img{\r\n    width: 425px;\r\n    height: 220px;\r\n    margin-left: 100px;\r\n    border-radius: 100%;\r\n\r\n}\r\n.card{\r\n    display: block;\r\n    height: 41px;\r\n    padding-top: 5px;\r\n    padding-bottom: 47px;\r\n    background-color: coral;\r\n}\r\n.head{\r\n    color: coral;\r\n}\r\n.para{\r\n    margin-left: 10px;\r\n    font-size: 15px;\r\n    text-align: justify;\r\n    \r\n}\r\n.card .btn{\r\n    width:100px;\r\n    float: right;\r\n  \r\n    margin-top: -48px;\r\n    margin-right: 10px;\r\n}\r\n.card .pr{\r\n   margin-left: 25px;\r\npadding-top: 10px;\r\nfont-size: 17px;\r\ncolor: cornsilk;\r\n}\r\n#demo{\r\n   margin-left: 10px;\r\n    padding-top: 30px;\r\n    padding-bottom: 50px;\r\n    \r\n}\r\n#demo .a{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJhbC9yZWZlcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBOEM7SUFFOUMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBTUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCO0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlEQUFpRDtDQUNwRDtBQUNBO0lBQ0csaUJBQWlCOztDQUVwQjtBQUNEO0lBQ0ksYUFBYTtLQUNaLGNBQWM7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjs7Q0FFdkI7QUFDRDtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9COztDQUV2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0dBQ0csa0JBQWtCO0FBQ3JCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0NBQ2Y7QUFFRDtHQUNHLGtCQUFrQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCOztDQUV4QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyYWwvcmVmZXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5re1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMjUsIDExMSwgMTkyKTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxufVxyXG4gaDZ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuLmltYWdle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIGhlaWdodDogMjQ1cHg7IFxyXG59XHJcbi5pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogNDI1cHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbn1cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG59XHJcbi5oZWFke1xyXG4gICAgY29sb3I6IGNvcmFsO1xyXG59XHJcbi5wYXJhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgXHJcbn1cclxuLmNhcmQgLmJ0bntcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIFxyXG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNhcmQgLnBye1xyXG4gICBtYXJnaW4tbGVmdDogMjVweDtcclxucGFkZGluZy10b3A6IDEwcHg7XHJcbmZvbnQtc2l6ZTogMTdweDtcclxuY29sb3I6IGNvcm5zaWxrO1xyXG59XHJcblxyXG4jZGVtb3tcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgXHJcbn1cclxuI2RlbW8gLmF7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/referal/referal.component.html":
/*!************************************************!*\
  !*** ./src/app/referal/referal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 logo\">\n      <img src=\"/assets/logo.png\" width=\"100\">\n      <h3>EMPLOYEE MEMBER REFERRAL PROGRAM</h3>\n      <h6><B>Introducing Employee Referral Bonus Progame / Help us Grow! / We are Hiring! Can you help?</B></h6>\n    </div>\n    <div class=\"col-md-6 image\">\n      <span class=\"blink\">\n        <img src=\"/assets/d.jpg\">\n      </span>\n    </div>\n  </div>\n\n  <div class=\"\">\n    <p><b>Dear Team,</b></p>\n    <p class=\"head\">Greetings from LETSGETTIN PVT LTD !!!</p>\n    <p class=\"para\"> As you know, here at LETSGETTIN, we are always looking to grow our teams with talented people, just like you.\n      That’s why, we are excited to announce our Member Referral Program (MRP).\n      Refer qualified candidates and as a “thank you,” we will offer you [Member referral bonus as an incentive for\n      referrers.\n    </p>\n    <p class=\"para\">In order to be eligible for the referral bonus, you need to refer you friends who are talented, hard workers and\n      dedicated who is need of job [Any member can refer].\n    </p>\n    <p class=\"para\">If you know someone who you think would be a good fit for our company, let us know. [It’s best to be clear about\n      the employee referral process, please find the below to understand more\n      about MRP programme.\n    </p>\n    \n  </div>\n  <div class=\"card\">\n    <p class=\"pr\"><strong>Programme Benefits</strong></p>\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#demo\">Click Here</button>\n  <div id=\"demo\" class=\"collapse\">\n\n    <i>\n    <p>1. For the closure of<b> Train & Hire Model - JAVA,</b> Member will get<b> Rs.5000/- </b>per closure (Calculated monthly).\n       </p>\n       <p>2. For the first closure of<b> Train & Hire Model-TESTING,</b> Member will get<b>Rs.3,500/-</b> per closure (Calculated monthly).\n        </p>\n        <p>3. Once the agreement received from the Organization, bonus will credit with the salary as an incentive which will give you more\n       credibility  to your  Employment (payslip as well as  statement).\n    </p>\n        <p>\n            4.  HR's, PE’s and CPE’s are not eligible for the MRP – Member referral programme.           \n    </p>\n  </i>\n    <p>\n            For more details about the MRP - Member referral program, please contact to Shalini Gandra Mobile -7019725348  and <br> <a  href=\"\"> E-Mail ID- shalini.gandra@letsgettin.com.</a>\n    </p>\n\n    <button class=\"btn btn-outline-primary\" routerLink=\"/referalreg\"> Referal Link</button>\n\n\n    \n  </div>\n\n  </div>\n \n\n\n</div>\n\n<!-- ------ -->\n\n"

/***/ }),

/***/ "./src/app/referal/referal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/referal/referal.component.ts ***!
  \**********************************************/
/*! exports provided: ReferalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferalComponent", function() { return ReferalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferalComponent = /** @class */ (function () {
    function ReferalComponent() {
    }
    ReferalComponent.prototype.ngOnInit = function () {
    };
    ReferalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referal',
            template: __webpack_require__(/*! ./referal.component.html */ "./src/app/referal/referal.component.html"),
            styles: [__webpack_require__(/*! ./referal.component.css */ "./src/app/referal/referal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferalComponent);
    return ReferalComponent;
}());



/***/ }),

/***/ "./src/app/referalreg/referalreg.component.css":
/*!*****************************************************!*\
  !*** ./src/app/referalreg/referalreg.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    padding-top: 100px;\r\n    padding-left: 500px;\r\n    background-image: linear-gradient(rgba(42, 84, 209, 0.3),rgba(125, 150, 224, 0.3)),url(\"/assets/bag.jpg\");\r\n    background-size: cover;\r\n    padding-bottom: 40px;\r\n}\r\n.card{\r\n    width: 80%;\r\n    padding-bottom: 30px;\r\n    background:unset;box-shadow: 2px 2px black;\r\n    \r\n}\r\n.form-control{\r\n    margin-left: 30px;\r\n}\r\n.mm{\r\n    margin-left: 30px;\r\n  \r\n}\r\n.mm1{\r\n    margin-left: -7px;\r\n    margin-right: 10px;\r\n    padding-left: 10px; \r\n}\r\n.mm2{\r\n    padding-left: 3px;\r\n}\r\n.control-label{\r\n    padding-left: 30px;\r\n    color: aliceblue;\r\n    font-weight: 600;\r\n}\r\nform{\r\n    margin-left: 20px;\r\n    padding-top: 10px;\r\n}\r\nh2{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    color: brown;\r\n}\r\n.card .btn{\r\n    margin-left: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJhbHJlZy9yZWZlcmFscmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBHQUEwRztJQUMxRyx1QkFBdUI7SUFDdkIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQiwwQkFBMEI7O0NBRTlDO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjs7Q0FFckI7QUFDQTtJQUNHLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZWZlcmFscmVnL3JlZmVyYWxyZWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNDIsIDg0LCAyMDksIDAuMykscmdiYSgxMjUsIDE1MCwgMjI0LCAwLjMpKSx1cmwoXCIvYXNzZXRzL2JhZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOnVuc2V0O2JveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLm1te1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgXHJcbn1cclxuIC5tbTF7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgXHJcbn0gXHJcbi5tbTJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxufVxyXG4uY29udHJvbC1sYWJlbHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGNvbG9yOiBicm93bjtcclxufVxyXG4uY2FyZCAuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/referalreg/referalreg.component.html":
/*!******************************************************!*\
  !*** ./src/app/referalreg/referalreg.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n\n<h2> Employee Form </h2>\n\n<form [formGroup]=\"reactiveForm\">\n  \n      <div class=\"form-group row\">\n        <label class=\"col-md-4 control-label\">Candidate Name:</label>\n        <div class=\"col-md-7\">\n        <input type=\"text\" class=\"form-control\" name=\"candidatename\" id=\"candidatename\" placeholder=\"Candidate Name\" formControlName=\"candidatename\">\n\n        <div\n        *ngIf=\"reactiveForm.controls.candidatename.errors && (reactiveForm.controls.candidatename.touched || reactiveForm.controls.candidatename.dirty)\"\n        style=\"color:red\">\n        <div *ngIf=\"reactiveForm.hasError('required','candidatename')\"> Candidate Name is Required</div>\n        <div *ngIf=\"reactiveForm.hasError('pattern','candidatename')\"> Candidate Name is invalid</div>\n        <div *ngIf=\"reactiveForm.hasError('minlength','candidatename')\"> Candidate Name is must be 3 min</div>\n      </div>\n\n        </div>\n      </div>\n\n     <div class=\"form-group row\">\n          <label class=\"col-md-4 control-label\">Candidate Mobile No:</label>\n          <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" name=\"candidatemobile\" id=\"candidatemobile\" placeholder=\"Candidate Mobile Number\" formControlName=\"candidatemobile\">\n         \n          <div\n                        *ngIf=\"reactiveForm.controls.candidatemobile.errors && (reactiveForm.controls.candidatemobile.touched || reactiveForm.controls.candidatemobile.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','candidatemobile')\"> Mobile Number is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','candidatemobile')\"> Mobile Number is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','candidatemobile')\"> Mobile Number is must be 10 min\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','candidatemobile')\"> Mobile Number is must be 14 max\n                        </div>\n\n                      </div>\n        \n        </div>\n        </div>\n \n        <div class=\"form-group row\">\n            <label class=\"col-md-4 control-label\">Candidate Email Id:</label>\n            <div class=\"col-md-7\">\n            <input type=\"text\" class=\"form-control\" name=\"candidateemail\" id=\"candidateemail\" placeholder=\"Candidate Email Id\" formControlName=\"candidateemail\">\n           \n            <div\n            *ngIf=\"reactiveForm.controls.candidateemail.errors && (reactiveForm.controls.candidateemail.touched || reactiveForm.controls.candidateemail.dirty)\"\n            style=\"color:red\">\n            <div *ngIf=\"reactiveForm.hasError('required','candidateemail')\"> Email is Required</div>\n            <div *ngIf=\"reactiveForm.hasError('pattern','candidateemail')\"> Email is invalid</div>\n\n          </div>\n          \n          \n          </div>\n          </div>\n\n\n\n\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 control-label\">Candidate Qualification:</label>\n              <div class=\"col-md-7\">\n                  <select class=\"form-control\" id=\"qua\" formControlName=\"qua\">\n                      <option *ngFor=\"let qua of quas\" [value]=\"qua.id\">{{qua.name}}</option>\n                    </select>\n      \n              </div>\n            </div>\n\n\n\n          <div class=\"form-group row\">\n              <label class=\"col-md-4 control-label\">Areas Of Intresting:</label>\n              <div class=\"col-md-7\">\n               \n              <select class=\"form-control\" id=\"board\" formControlName=\"board\">\n                        <option *ngFor=\"let board of boards\" [value]=\"board.id\">{{board.name}}</option>\n                      </select>\n\n              </div>\n            </div>\n\n            \n\n\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 control-label\"> Intrested in : </label> <br>\n              <div class=\"col-md-7 mm\">\n\n              <input type=\"radio\" value=\"Male\" formControlName=\"gender\">\n              <label for=\"gender\" style=\"color:blue\" class=\"mm1\">Train & Hire</label>\n             \n              <input type=\"radio\" value=\"Female\" formControlName=\"gender\">\n              <label for=\"gender\" style=\"color:blue\" class=\"mm2\">Normal</label>\n            \n              <div\n                *ngIf=\"reactiveForm.controls.gender.errors && (reactiveForm.controls.gender.touched || reactiveForm.controls.gender.dirty)\">\n                <div *ngIf=\"reactiveForm.hasError('required','gender')\"> gender is Required</div>\n              </div>\n            </div>\n            </div>\n\n\n\n            <div class=\"form-group row\">\n                <label class=\"col-md-4 control-label\">Refer By:</label>\n                <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" id=\"referby\"name=\"referby\" placeholder=\"Refer By\" formControlName=\"referby\">\n             \n                <div\n                *ngIf=\"reactiveForm.controls.referby.errors && (reactiveForm.controls.referby.touched || reactiveForm.controls.referby.dirty)\"\n                style=\"color:red\">\n                <div *ngIf=\"reactiveForm.hasError('required','referby')\"> Name is Required</div>\n                <div *ngIf=\"reactiveForm.hasError('pattern','referby')\"> Name is invalid</div>\n                <div *ngIf=\"reactiveForm.hasError('minlength','referby')\"> Name is must be 3 min</div>\n              </div>\n                  \n              </div>\n              </div>\n\n\n              <div class=\"form-group row\">\n                  <label class=\"col-md-4 control-label\">Referal Email Id:</label>\n                  <div class=\"col-md-7\">\n                  <input type=\"text\" class=\"form-control\" name=\"refemail\" id=\"refemail\" placeholder=\"Candidate Email Id\" formControlName=\"refemail\">\n                 \n                  <div\n                  *ngIf=\"reactiveForm.controls.refemail.errors && (reactiveForm.controls.refemail.touched || reactiveForm.controls.refemail.dirty)\"\n                  style=\"color:red\">\n                  <div *ngIf=\"reactiveForm.hasError('required','refemail')\"> Email is Required</div>\n                  <div *ngIf=\"reactiveForm.hasError('pattern','refemail')\"> Email is invalid</div>\n      \n                </div>\n                \n                \n                </div>\n                </div>\n\n\n\n              <div class=\"form-group row\">\n                  <label class=\"col-md-4 control-label\">Referal Mobile No:</label>\n                  <div class=\"col-md-7\">\n                  <input type=\"text\" class=\"form-control\" id=\"refermobileno\" name=\"refermobileno\" placeholder=\"Mobile Number\" formControlName=\"refermobileno\">\n                 \n                \n                  <div\n                        *ngIf=\"reactiveForm.controls.refermobileno.errors && (reactiveForm.controls.refermobileno.touched || reactiveForm.controls.refermobileno.dirty)\"\n                        style=\"color:red\">\n                        <div *ngIf=\"reactiveForm.hasError('required','refermobileno')\"> Mobile Number is Required</div>\n                        <div *ngIf=\"reactiveForm.hasError('pattern','refermobileno')\"> Mobile Number is invalid</div>\n                        <div *ngIf=\"reactiveForm.hasError('minlength','refermobileno')\"> Mobile Number is must be 10 min\n                        </div>\n                        <div *ngIf=\"reactiveForm.hasError('maxlength','refermobileno')\"> Mobile Number is must be 14 max\n                        </div>\n\n                      </div>\n                \n                </div>\n                </div> \n\n                <button class=\"btn btn-primary\" (click)=\"registerUser(reactiveForm)\">Submit</button>\n\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/referalreg/referalreg.component.ts":
/*!****************************************************!*\
  !*** ./src/app/referalreg/referalreg.component.ts ***!
  \****************************************************/
/*! exports provided: ReferalregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferalregComponent", function() { return ReferalregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ReferalregComponent = /** @class */ (function () {
    function ReferalregComponent(fb) {
        this.fb = fb;
        this.reactiveForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
        this.boards = [{ 'id': 'JAVA', 'name': 'JAVA' }, { 'id': 'Testing', 'name': 'Testing' }, { 'id': 'AppDevelopement', 'name': 'AppDevelopement' }, { 'id': 'Non-Technical', 'name': 'Non-Technical' }];
        this.quas = [{ 'id': 'BE/B.Tech', 'name': 'BE/B.Tech' }, { 'id': 'Bsc', 'name': 'Bsc' }, { 'id': 'MBA/MCA', 'name': 'MBA/MCA' }, { 'id': 'Diploma/ITI', 'name': 'Diploma/ITI' }];
    }
    ReferalregComponent.prototype.ngOnInit = function () {
        this.reactiveForm = this.fb.group({
            candidatename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            candidatemobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
            candidateemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            candidatequalification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            qua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            board: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            referby: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-z]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ])]),
            refemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
                ])]),
            refermobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14)
                ])]),
        });
    };
    ReferalregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referalreg',
            template: __webpack_require__(/*! ./referalreg.component.html */ "./src/app/referalreg/referalreg.component.html"),
            styles: [__webpack_require__(/*! ./referalreg.component.css */ "./src/app/referalreg/referalreg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ReferalregComponent);
    return ReferalregComponent;
}());



/***/ }),

/***/ "./src/app/sample/sample.component.css":
/*!*********************************************!*\
  !*** ./src/app/sample/sample.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: whitesmoke;\r\n        margin-left: 40px;\r\n        min-width: 205vh;\r\n}\r\n.container1{\r\n    margin-top: 10px;\r\n    margin-left: 30px;\r\n}\r\nimg{\r\n    max-width: 20vh;\r\n     height: 50px;\r\n     font-family: Roboto,sans-serif; \r\n     margin-left: -15px;   \r\n }\r\n.blink{\r\n     -webkit-animation: blink 0.5s linear infinite;\r\n     animation: blink 0.5s linear infinite;\r\n }\r\n@-webkit-keyframes blink{\r\n     0%{opacity: 1;}\r\n     50%{opacity: 0;}\r\n     100%{opacity: 1;}\r\n }\r\n@keyframes blink{\r\n     0%{opacity: 1;}\r\n     50%{opacity: 0;}\r\n     100%{opacity: 1;}\r\n }\r\n.JP img{\r\n     max-width: 100vh;\r\n     height: 250px;\r\n     margin-top: 50px;    \r\n }\r\n.central img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;    \r\n }\r\n.booz img{\r\n     max-width: 100vh;\r\n     height: 60px;   \r\n    margin-top: 50px;    \r\n }\r\n.wipro img{\r\n     max-width: 100vh;\r\n     height: 60px;   \r\n     margin-top: 50px;    \r\n }\r\n.ups img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.infosys img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.deloit img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.row .register-form{\r\n   margin-top: 10px;\r\n   margin-left: 10px;\r\n }\r\n.inf{\r\n     font-weight: 700;\r\n }\r\n/* ----------------------------------- */\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n.premium{\r\n     margin-top: 30px;\r\n     color: aliceblue;\r\n     background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/assets/pix.jpg\");\r\n     background-size: cover;\r\n     background-position: center;\r\n     display: flex;  \r\n     font-family: sans-serif;\r\n     margin-left: 33px;\r\n     margin-right: 26px;\r\n }\r\n.premium ul{\r\n     margin-top: 15px;\r\n }\r\n.register-form{\r\n   \r\n    margin-top: 20px;    \r\n}\r\n.nav-link{\r\n    font-size: 15px;\r\n    padding: 3px;\r\n   \r\n}\r\n/* -------------------------------- */\r\n.jobs-list-block {\r\n    background-color: #fff;\r\n    border: 1px solid #dcdcdc;\r\n    padding: 15px 0 14px 10px;\r\n    margin-bottom: 7px;\r\n    margin-left: -31px;\r\n}\r\n.heading-latest-block {\r\n    border-bottom: 1px solid #1e08e4;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.heading-latest {\r\n    background-color: #5513f1;\r\n    padding: 15px 0 14px 10px;\r\n    width: 121px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    margin: 0;\r\n}\r\n.display-inline {\r\n    display: inline-block;   \r\n}\r\n.display-inline a{\r\n    margin: 5px;\r\n}\r\n.nav-link{\r\n    color: black;\r\n}\r\n.nav-link:hover{\r\n    color: #1e08e4;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n/* -------------------------- */\r\n.wrapper {\r\n    width: 990px;\r\n    margin: 0 auto;\r\n    padding: 10px 0;\r\n  }\r\n.profilePage .dashboard {\r\n    /* padding: 20px; */\r\n    min-height: 210px;\r\n    margin-left: -31px;\r\n  }\r\n.profilePage .dashboard .img-wrapper {\r\n    width: 60px;\r\n    padding: 0;\r\n    cursor: pointer;\r\n  }\r\n.col.s2{\r\n    margin-left: auto;\r\n  }\r\n.profilePage .dashboard .user-img {\r\n    border-radius: 50%;\r\n    width: 84px;\r\n    height: 101px;\r\n    display: inline-block;\r\n    margin-left: -1830px;\r\n  }\r\n.center{\r\n    text-align: center;\r\n  }\r\n.profilePage .dashboard .icon.upload {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: -8px;\r\n    background: #fff;\r\n    padding: 3px 4px 5px 5px;\r\n    border-radius: 50%;\r\n    color: #4A90E2;\r\n    transition: .2s all;\r\n    width: 26px;\r\n    height: 26px;\r\n    line-height: 20px;\r\n    z-index: 9;\r\n    -webkit-font-feature-settings: 'liga';\r\n            font-feature-settings: 'liga';\r\n      overflow: hidden;\r\n      margin-right: 858px;\r\n  }\r\n.icon{\r\n    font-family: fontIcons;\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n    \r\n      font-weight: 400;\r\n      font-style: normal;\r\n      text-decoration: inherit;\r\n      text-transform: none;\r\n      text-rendering: auto;\r\n      -webkit-font-smoothing: antialiased;\r\n  }\r\n.profilePage .dashboard .img-wrapper {\r\n    \r\n    cursor: pointer;\r\n  }\r\nh2{\r\n    margin-top: -176px;\r\n    margin-left: 50px;\r\n    padding-bottom: 20px;\r\n    color: blue;\r\n  }\r\n.start img{\r\n    float: right;\r\n    width: 183px;\r\n    height: 180px;\r\n    margin-top: 30px;\r\n    margin-right: 83px; \r\n    min-width: 332px;\r\n    border-radius: 125px\r\n  }\r\nh4{\r\n      margin-left: 50px;\r\n      margin-top: 50px;\r\n  }\r\n.container10{\r\n      margin-left: 35px;\r\n  }\r\np{\r\n      margin-left: 50px;\r\n  }\r\n.name{\r\n      margin-top: 20px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL3NhbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO1FBQ3pCLGtCQUFrQjtRQUNsQixpQkFBaUI7Q0FDeEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGdCQUFnQjtLQUNmLGFBQWE7S0FDYiwrQkFBK0I7S0FDL0IsbUJBQW1CO0VBQ3RCO0FBQ0Q7S0FDSSw4Q0FBOEM7S0FFOUMsc0NBQXNDO0VBQ3pDO0FBRUQ7S0FDSSxHQUFHLFdBQVcsQ0FBQztLQUNmLElBQUksV0FBVyxDQUFDO0tBQ2hCLEtBQUssV0FBVyxDQUFDO0VBQ3BCO0FBTUQ7S0FDSSxHQUFHLFdBQVcsQ0FBQztLQUNmLElBQUksV0FBVyxDQUFDO0tBQ2hCLEtBQUssV0FBVyxDQUFDO0VBQ3BCO0FBR0Q7S0FDSSxpQkFBaUI7S0FDakIsY0FBYztLQUNkLGlCQUFpQjtFQUNwQjtBQUNEO0tBQ0ksaUJBQWlCO0tBQ2pCLGFBQWE7S0FDYixpQkFBaUI7RUFDcEI7QUFDRDtLQUNJLGlCQUFpQjtLQUNqQixhQUFhO0lBQ2QsaUJBQWlCO0VBQ25CO0FBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsYUFBYTtLQUNiLGlCQUFpQjtFQUNwQjtBQUNEO0tBQ0ksaUJBQWlCO0tBQ2pCLGFBQWE7S0FDYixpQkFBaUI7RUFDcEI7QUFDRDtLQUNJLGlCQUFpQjtLQUNqQixhQUFhO0tBQ2IsaUJBQWlCO0VBQ3BCO0FBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsYUFBYTtLQUNiLGlCQUFpQjtFQUNwQjtBQUdEO0dBQ0UsaUJBQWlCO0dBQ2pCLGtCQUFrQjtFQUNuQjtBQUVEO0tBQ0ksaUJBQWlCO0VBQ3BCO0FBSUQseUNBQXlDO0FBR3pDO0lBQ0csOENBQThDO0lBRTlDLHNDQUFzQztDQUN6QztBQUNEO0lBQ0ksR0FBRyxXQUFXLENBQUM7SUFDZixJQUFJLFdBQVcsQ0FBQztJQUNoQixLQUFLLFdBQVcsQ0FBQztDQUNwQjtBQU1EO0lBQ0ksR0FBRyxXQUFXLENBQUM7SUFDZixJQUFJLFdBQVcsQ0FBQztJQUNoQixLQUFLLFdBQVcsQ0FBQztDQUNwQjtBQU9BO0tBQ0ksaUJBQWlCO0tBQ2pCLGlCQUFpQjtLQUNqQiwwRkFBMEY7S0FDMUYsdUJBQXVCO0tBQ3ZCLDRCQUE0QjtLQUM1QixjQUFjO0tBQ2Qsd0JBQXdCO0tBQ3hCLGtCQUFrQjtLQUNsQixtQkFBbUI7RUFDdEI7QUFDRDtLQUNJLGlCQUFpQjtFQUNwQjtBQUNEOztJQUVHLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7O0NBRWhCO0FBRUQsc0NBQXNDO0FBQ3RDO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjs7Q0FFckI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiO0FBQ0M7SUFDRSxzQkFBc0I7Q0FDekI7QUFDQTtJQUNHLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFFRCxnQ0FBZ0M7QUFFaEM7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtHQUNqQjtBQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0dBQ2pCO0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7R0FDdEI7QUFFRDtJQUNFLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0NBQThCO1lBQTlCLDhCQUE4QjtNQUM1QixpQkFBaUI7TUFDakIsb0JBQW9CO0dBQ3ZCO0FBQ0Q7SUFDRSx1QkFBdUI7TUFDckIsc0JBQXNCO01BQ3RCLHVCQUF1Qjs7TUFFdkIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixvQ0FBb0M7R0FDdkM7QUFDRDs7SUFFRSxnQkFBZ0I7R0FDakI7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7R0FDYjtBQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0dBQ3JCO0FBQ0Q7TUFDSSxrQkFBa0I7TUFDbEIsaUJBQWlCO0dBQ3BCO0FBRUQ7TUFDSSxrQkFBa0I7R0FDckI7QUFHRDtNQUNJLGtCQUFrQjtHQUNyQjtBQUNEO01BQ0ksaUJBQWlCO0dBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2FtcGxlL3NhbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMDV2aDtcclxufVxyXG4uY29udGFpbmVyMXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBmb250LWZhbWlseTogUm9ib3RvLHNhbnMtc2VyaWY7IFxyXG4gICAgIG1hcmdpbi1sZWZ0OiAtMTVweDsgICBcclxuIH1cclxuIC5ibGlua3tcclxuICAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgLW1vei1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiB9XHJcbiBcclxuIEAtd2Via2l0LWtleWZyYW1lcyBibGlua3tcclxuICAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAgMTAwJXtvcGFjaXR5OiAxO31cclxuIH1cclxuIEAtbW96LWtleWZyYW1lcyBibGlua3tcclxuICAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAgMTAwJXtvcGFjaXR5OiAxO31cclxuIH1cclxuIEBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbiB9XHJcbiBcclxuIFxyXG4gLkpQIGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgICAgXHJcbiB9XHJcbiAuY2VudHJhbCBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDYwcHg7ICBcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxuIH1cclxuIC5ib296IGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG4gfVxyXG4gLndpcHJvIGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogNjBweDsgICBcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxuIH1cclxuIC51cHMgaW1ne1xyXG4gICAgIG1heC13aWR0aDogMTAwdmg7XHJcbiAgICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxuIH1cclxuIC5pbmZvc3lzIGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgXHJcbiB9XHJcbiAuZGVsb2l0IGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgXHJcbiB9XHJcbiBcclxuIFxyXG4gLnJvdyAucmVnaXN0ZXItZm9ybXtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiB9XHJcblxyXG4gLmluZntcclxuICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gfVxyXG4gXHJcblxyXG5cclxuIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuIC5ibGlua3tcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAucHJlbWl1bXtcclxuICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC43KSxyZ2JhKDAsMCwwLDAuNykpLHVybChcIi9hc3NldHMvcGl4LmpwZ1wiKTtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDMzcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xyXG4gfVxyXG4gLnByZW1pdW0gdWx7XHJcbiAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuIH1cclxuIC5yZWdpc3Rlci1mb3Jte1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICAgIFxyXG59XHJcbi5uYXYtbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgXHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5qb2JzLWxpc3QtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTRweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1sYXRlc3QtYmxvY2sge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZTA4ZTQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIFxyXG59XHJcbi5oZWFkaW5nLWxhdGVzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUxM2YxO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAxMjFweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiAgLmRpc3BsYXktaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICBcclxufVxyXG4gLmRpc3BsYXktaW5saW5lIGF7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSBcclxuLm5hdi1saW5re1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiAjMWUwOGU0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiA5OTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZVBhZ2UgLmRhc2hib2FyZCB7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogMjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlUGFnZSAuZGFzaGJvYXJkIC5pbWctd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jb2wuczJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGVQYWdlIC5kYXNoYm9hcmQgLnVzZXItaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTgzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZVBhZ2UgLmRhc2hib2FyZCAuaWNvbi51cGxvYWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgcmlnaHQ6IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDRweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICM0QTkwRTI7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnMgYWxsO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4NThweDtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICBmb250LWZhbWlseTogZm9udEljb25zO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIC5wcm9maWxlUGFnZSAuZGFzaGJvYXJkIC5pbWctd3JhcHBlciB7XHJcbiAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGgye1xyXG4gICAgbWFyZ2luLXRvcDogLTE3NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAuc3RhcnQgaW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDE4M3B4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgzcHg7IFxyXG4gICAgbWluLXdpZHRoOiAzMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyNXB4XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIxMHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/sample/sample.component.html":
/*!**********************************************!*\
  !*** ./src/app/sample/sample.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <!---------------------------------------------------------------------------------------------------------->\n    \n                <div class=\"container1\">\n\n\n\n\n                        <div class=\"profilePage\">\n                                <div class=\"wrapper\">\n                                  \n                                    <div class=\"dashboard blue-bg card\">\n                            \n                                        <div class=\"img-wrapper col s2 center\" data-ga-track=\"spa-event|EditProfile|UploadPhoto|EditOpen\">\n                                            <div class=\"photoTrigger\"><img class=\"user-img\"\n                                                    src=\"/assets/LGI.png\"><span><span></span></span>\n                            \n                                            </div>\n   \n   \n                                        </div>\n\n                                        <span class=\"blink\">                                       \n<div class=\"start\">\n        <img src=\"/assets/d.jpg\">\n        </div>\n\n        </span>\n<br><br><br>\n<div class=\"name\">\n\n        <app-namescroll></app-namescroll>\n    </div>\n<br>\n<br><br>\n\n<h2 class=\"em\">\n    Employeer Member Referal Program \n    </h2>\n\n    <h4>Indroducing Employee Refera;l Bonus Program / Help us Grow / We are Hiring!<br>\n        can you Help?\n    </h4>\n\n\n<br>\n\n<div class=\"container10\">\n\n\n        &nbsp;  &nbsp;  &nbsp;   <b>Dear Team,</b> <br>\n \n        &nbsp;  &nbsp;  &nbsp; <p>Greetings from LETSGETTIN PVT LTD !!!</p>  <br>\n     \n                          <p>  As you know, here at LETSGETTIN, we are always looking to grow our teams with talented people, just like you. That’s why, we are excited to announce our Member Referral Program (MRP).\n                                    Refer qualified candidates and as a “thank you,” we will offer you [Member referral bonus as an incentive for referrers.\n                          </p>\n                             <p>       \n     \n                                     In order to be eligible for the referral bonus, you need to refer you friends who are talented, hard workers and dedicated who is need of job [Any member can refer].\n                                    </p>\n                                    <p>\n                                     If you know someone who you think would be a good fit for our company, let us know. [It’s best to be clear about the employee referral process, please find the below to understand more \n                                     about MRP programme.\n                                    </p>\n\n</div>\n\n\n\n<div class=\"row1\">\n    \n        <div class=\"premium\">\n           <ul>\n               <li>Member Referal Program Benfits</li>\n               <!-- <li>Take CEAT and show that you're ready for a corporate Job</li>\n               <li>Premium Members can track Result status of all the Interviews</li> -->\n           </ul>\n\n       </div>\n\n   </div>\n\n   <br><br>\n\n   <p>\n  &nbsp;  &nbsp;   <i> 1. For the closure of<b> Train & Hire Model - JAVA,</b> Member will get<b> Rs.5000/- </b>per closure (Calculated monthly).</i>\n   </p>\n   <p>\n        &nbsp;  &nbsp;   <i>  2. For the first closure of<b> Train & Hire Model-TESTING,</b> Member will get<b>Rs.3,500/-</b> per closure (Calculated monthly).\n        </i>\n    </p>\n    <p>\n            &nbsp;  &nbsp;  <i>     3. Once the agreement received from the Organization, bonus will credit with the salary as an incentive which will give you more\n                   <br> &nbsp;  &nbsp; &nbsp;  &nbsp credibility to your Employment (payslip as well as  statement).\n    </i> \n</p>\n    <p>\n            &nbsp;  &nbsp;        <i>\n        4.  HR's, PE’s and CPE’s are not eligible for the MRP – Member referral programme.   </i>          \n</p>\n\n<p>\n        For more details about the MRP - Member referral program, please contact to \n        <br>Shalini Gandra Mobile -7019725348 and<a  href=\"\"> E-Mail ID- shalini.gandra@letsgettin.com.</a>\n</p>\n\n                       \n                            \n                                    </div>\n                            \n                                </div>\n                            </div>\n\n\n\n\n\n\n<!--  -->\n            \n    \n                </div>\n    \n    \n               \n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/sample/sample.component.ts":
/*!********************************************!*\
  !*** ./src/app/sample/sample.component.ts ***!
  \********************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    SampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.css */ "./src/app/sample/sample.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/app/sample1/sample1.component.css":
/*!***********************************************!*\
  !*** ./src/app/sample1/sample1.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 20px;\r\n  padding-top: 30px;\r\n  background-color: whitesmoke;\r\n  padding-bottom: 30px;\r\n}\r\n.card{\r\n  background-color: blue;\r\n  height: 240px;\r\n  margin-left: 55px;\r\n    width: 1000px;\r\n}\r\n.row img{\r\n    margin-top: 25px;\r\n    margin-left: 16px;\r\n    height: 73px;\r\n    width: 73px;\r\n    border-radius: 100%;\r\n}\r\n.row i{\r\n  color: white;\r\n}\r\n/* ----------- */\r\n.profile-image-style {\r\n  border-radius: 100%;\r\n  width: 89px;\r\n  height: 90px;\r\n}\r\n.id h6{\r\n  padding-top: 11px;\r\n  padding-left: 13px;\r\n  color: white;\r\n}\r\nimg {\r\n  vertical-align: middle;\r\n}\r\n.edit-image-upload {\r\n  position: absolute;\r\n  margin-left: 59px;\r\n  margin-top: -69px;\r\n  cursor: pointer;\r\n  background: blue;\r\n  border-radius: 12px;\r\n  padding: 2px 5px;\r\n}\r\n.name{\r\n  padding-top: 30px;\r\n  margin-left: -75px;\r\n}\r\n.name h5{\r\n  padding-left: 40px;\r\n  color: white;\r\n \r\n}\r\n.name i{\r\n  padding-left: 6px;\r\n}\r\n.name .education i{\r\n  padding-left: 34px;\r\n  padding-right: 2px;\r\n}\r\n.name .education h6{\r\n  color: aliceblue;\r\n}\r\n.name .yearofpass i{\r\n  padding-left: 35px;\r\n  padding-right: 6px;\r\n}\r\n.name .yearofpass h6{\r\n  color: aliceblue;\r\n}\r\n.name .college i{\r\n  padding-left: 35px;\r\n  padding-right: 5px;\r\n}\r\n.name .college h6{\r\n  color: aliceblue;\r\n}\r\n.name .location i{\r\n  padding-left: 40px;\r\n  padding-right: 10px;\r\n}\r\n.name .location h6{\r\n  color: aliceblue;\r\n}\r\n.status h6{\r\ncolor: white;\r\n\r\n}\r\n#profilestatus{\r\n  height: 16px;\r\n}\r\n.progress-bar{\r\n width: 70%;\r\n background-color: indianred;\r\n}\r\n.complete{\r\n  color: white;\r\n  float: right;\r\n}\r\n.card1{\r\n  background-color: cornflowerblue;\r\n  height: 152px;\r\n  width: 265px;\r\n  margin-top: 20px;\r\n  color: white;\r\n}\r\n.card1 h6{\r\n  padding-left: 14px;\r\n  padding-top: 10px;\r\n}\r\n.card1 p{\r\n  padding-left: 15px;\r\n  padding-top: 2px;\r\n}\r\n.card1 a{\r\n  color: firebrick;\r\n  padding-left: 95px;\r\n}\r\n/* ------------------ */\r\n.card2{\r\n  margin-top: 20px;\r\n\r\n  background-color: darkgray;\r\n  height: 100px;\r\n  margin-left: 55px;\r\n    width: 1000px;\r\n}\r\n.para{\r\n  padding-left: 75px;\r\n  padding-top: 10px;\r\n  color: white;\r\n}\r\n.premium .badge{\r\n float: right;\r\n margin-right: 170px;\r\n height: 35px;\r\n width: 235px;\r\n padding-top: 9px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlMS9zYW1wbGUxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0lBQ2hCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNELGlCQUFpQjtBQUNqQjtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhOztDQUVkO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0FBQ0EsYUFBYTs7Q0FFWjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Qsd0JBQXdCO0FBRXhCO0VBQ0UsaUJBQWlCOztFQUVqQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUNEO0NBQ0MsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZTEvc2FtcGxlMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxufVxyXG4ucm93IGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGhlaWdodDogNzNweDtcclxuICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4ucm93IGl7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tICovXHJcbi5wcm9maWxlLWltYWdlLXN0eWxlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiA4OXB4O1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG4uaWQgaDZ7XHJcbiAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5lZGl0LWltYWdlLXVwbG9hZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1OXB4O1xyXG4gIG1hcmdpbi10b3A6IC02OXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG59XHJcbi5uYW1lIGg1e1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiBcclxufVxyXG4ubmFtZSBpe1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcbi5uYW1lIC5lZHVjYXRpb24gaXtcclxuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG59XHJcbi5uYW1lIC5lZHVjYXRpb24gaDZ7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4ubmFtZSAueWVhcm9mcGFzcyBpe1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuLm5hbWUgLnllYXJvZnBhc3MgaDZ7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4ubmFtZSAuY29sbGVnZSBpe1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLm5hbWUgLmNvbGxlZ2UgaDZ7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLm5hbWUgLmxvY2F0aW9uIGl7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm5hbWUgLmxvY2F0aW9uIGg2e1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLnN0YXR1cyBoNntcclxuY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4jcHJvZmlsZXN0YXR1c3tcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLnByb2dyZXNzLWJhcntcclxuIHdpZHRoOiA3MCU7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbn1cclxuLmNvbXBsZXRle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNhcmQxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIGhlaWdodDogMTUycHg7XHJcbiAgd2lkdGg6IDI2NXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkMSBoNntcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmNhcmQxIHB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkMSBhe1xyXG4gIGNvbG9yOiBmaXJlYnJpY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiA5NXB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNhcmQye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG59XHJcbi5wYXJhe1xyXG4gIHBhZGRpbmctbGVmdDogNzVweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnByZW1pdW0gLmJhZGdle1xyXG4gZmxvYXQ6IHJpZ2h0O1xyXG4gbWFyZ2luLXJpZ2h0OiAxNzBweDtcclxuIGhlaWdodDogMzVweDtcclxuIHdpZHRoOiAyMzVweDtcclxuIHBhZGRpbmctdG9wOiA5cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sample1/sample1.component.html":
/*!************************************************!*\
  !*** ./src/app/sample1/sample1.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"profile-img\">\r\n                    <img src=\"/assets/c.jpg\">\r\n\r\n                    <div class=\"id\">\r\n                        <h6>FW20573317</h6>\r\n                    </div>\r\n\r\n                    <div class=\"edit-image-upload\">\r\n                        <i class=\"fa fa-camera\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"name\">\r\n                    <h5><b>Chandraleka Thinakaran</b><i class=\"fa fa-edit\"></i></h5>\r\n\r\n                    <div class=\"education\">\r\n\r\n                        <h6> <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\r\n                            BE/B.Tech(Electronics & Communication Engineering(ECE))</h6>\r\n                    </div>\r\n\r\n                    <div class=\"yearofpass\">\r\n                        <h6>\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            2016 Passout\r\n                        </h6>\r\n                    </div>\r\n\r\n                    <div class=\"college\">\r\n                        <h6>\r\n                            <i class=\"fa fa-university\" aria-hidden=\"true\"></i>\r\n                            S.K.P Engineering College,Thiruvannamalai\r\n                        </h6>\r\n                    </div>\r\n\r\n                    <div class=\"location\">\r\n                        <h6>\r\n                            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                            Hosur\r\n                        </h6>\r\n                    </div>\r\n\r\n                    <div class=\"status\">\r\n                        <h6><small>Profile Completion Status 60%</small></h6>\r\n                    </div>\r\n\r\n                    <div class=\"progress\" id=\"profilestatus\">\r\n                        <div class=\"progress-bar\"></div>\r\n                    </div>\r\n\r\n                    <div class=\"complete\">\r\n                        <h6><small>Complete Your Profile</small></h6>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card1\">\r\n                    <h6>Non-Premium Member</h6>\r\n                    <p>\r\n                        <small> Please complete your pending Actions to\r\n                            Make your profile attractive to recruiters.\r\n                        </small>\r\n                    </p>\r\n                    <a href=\"\">Change To Premium</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n<!-- -------------------------------------------------------------------------------- -->\r\n\r\n                                 <div class=\"card2\">\r\n                                     <div class=\"para\">\r\n                                    <p>Upgrade to get Shortlisted Faster. Access Premium Jobs,\r\n                                     Power Placement Preparation(P3) Kit, & Take CEAT Test</p>\r\n                                    </div>\r\n                                    <div class=\"premium\">\r\n                                    <span class=\"badge badge-primary\"><b>Upgrade to Premium Membership</b></span>  \r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sample1/sample1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sample1/sample1.component.ts ***!
  \**********************************************/
/*! exports provided: Sample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample1Component", function() { return Sample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Sample1Component = /** @class */ (function () {
    function Sample1Component() {
    }
    Sample1Component.prototype.ngOnInit = function () {
    };
    Sample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sample1',
            template: __webpack_require__(/*! ./sample1.component.html */ "./src/app/sample1/sample1.component.html"),
            styles: [__webpack_require__(/*! ./sample1.component.css */ "./src/app/sample1/sample1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sample1Component);
    return Sample1Component;
}());



/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  /* background-color: whitesmoke;\r\n  padding: 20px;\r\n  margin-left: 12px;\r\n  min-width: 214vh; */\r\n  \r\n    background-color: whitesmoke;\r\n    padding: 40px;\r\n    margin-left: 26px;\r\n    min-width: 210vh;\r\n    height: 234px;\r\n    padding-top: 20px;\r\n    margin-bottom: 20px;\r\n\r\n\r\n}\r\n.user{\r\n    width: 160px;\r\n    height: 160px;\r\n    border-radius: 50%;\r\n    margin-top: 42px;\r\n   \r\n   \r\n  }\r\n.header{\r\n    height: 30vh;\r\n    background-image: linear-gradient(rgba(66, 109, 238, 0.7),rgba(66, 109, 238, 0.7)),url(\"/assets/lg.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;\r\n    margin-bottom: 30px;\r\n   \r\n  }\r\n.form-box .user{\r\n    width: 160px;\r\n    height: 160px;\r\n    border-radius: 50%;\r\n    margin-left: 60px;\r\n    margin-top: -28px;\r\n  }\r\n.letters{\r\n      padding-left: 268px;\r\n      margin-top: -100px;\r\n  }\r\n.carousel-caption{\r\n    top: 30%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsY2FuZGlkYXRlcy9zY3JvbGxjYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7O3NCQUdvQjs7SUFFbEIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9COzs7Q0FHdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjs7O0dBR2xCO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IseUdBQXlHO0lBQ3pHLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjs7R0FFckI7QUFDRDtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7R0FDbkI7QUFDRDtNQUNJLG9CQUFvQjtNQUNwQixtQkFBbUI7R0FDdEI7QUFHRDtJQUNFLFNBQVM7SUFDVCxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1COztHQUVwQiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbGNhbmRpZGF0ZXMvc2Nyb2xsY2FuZGlkYXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgbWluLXdpZHRoOiAyMTR2aDsgKi9cclxuICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICBtaW4td2lkdGg6IDIxMHZoO1xyXG4gICAgaGVpZ2h0OiAyMzRweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblxyXG59XHJcbi51c2Vye1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgIFxyXG4gICBcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDY2LCAxMDksIDIzOCwgMC43KSxyZ2JhKDY2LCAxMDksIDIzOCwgMC43KSksdXJsKFwiL2Fzc2V0cy9sZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgXHJcbiAgfVxyXG4gIC5mb3JtLWJveCAudXNlcntcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIH1cclxuICAubGV0dGVyc3tcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNjhweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDEyNywgMjIxLCAwLjQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.html":
/*!******************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n\n    <div class=\"container\">\n\n        <div class=\"carousel-item active\" style=\"color:rgb(103, 15, 218)\">\n            <div class=\"header\">\n              <form>          \n                <div class=\"form-box\">\n                  <img src=\"/assets/sm.jpg\" class=\"user\"> \n                  <p class=\"letters\"> <b> \"I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \"</b> </p>\n               </div>\n              </form>\n            </div>\n    \n          </div>\n    \n    \n\n      <div class=\"carousel-item\" style=\"color:rgb(26, 214, 228)\">\n          <div class=\"header\">\n            <form>          \n              <div class=\"form-box\">\n                <img src=\"/assets/c.jpg\" class=\"user\"> \n                <p class=\"letters\"><b> \" I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \" </b> </p>\n             </div>\n            </form>\n          </div>\n  \n        </div>\n  \n  \n      <div class=\"carousel-item\" style=\"color:rgb(240, 12, 164)\">\n        <div class=\"header\">\n          <form>          \n            <div class=\"form-box\">\n              <img src=\"/assets/t.jpg\" class=\"user\"> \n              <p class=\"letters\"> <b>\" I followed a link for a job on SahiUdhyog and uploaded my resume.About two hours later. I received an email from an employer looking for someone with my skills.In a week's time and four interviews later I have a fantastic new job!! Thanks SahiUdhyog!! \" </b> </p>\n           </div>\n          </form>\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n\n\n</div>"

/***/ }),

/***/ "./src/app/scrollcandidates/scrollcandidates.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/scrollcandidates/scrollcandidates.component.ts ***!
  \****************************************************************/
/*! exports provided: ScrollcandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollcandidatesComponent", function() { return ScrollcandidatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollcandidatesComponent = /** @class */ (function () {
    function ScrollcandidatesComponent() {
    }
    ScrollcandidatesComponent.prototype.ngOnInit = function () {
    };
    ScrollcandidatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrollcandidates',
            template: __webpack_require__(/*! ./scrollcandidates.component.html */ "./src/app/scrollcandidates/scrollcandidates.component.html"),
            styles: [__webpack_require__(/*! ./scrollcandidates.component.css */ "./src/app/scrollcandidates/scrollcandidates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollcandidatesComponent);
    return ScrollcandidatesComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.searchbar{\r\n    margin-bottom: auto;\r\n    margin-top: auto;\r\n    height: 50px;\r\n    background-color: blue;\r\n    border-radius: 30px;\r\n    padding: 10px;\r\n    \r\n    }\r\n  \r\n    .search_input{\r\n    color: white;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    width: 0;\r\n    caret-color:transparent;\r\n    line-height: 40px;\r\n    transition: width 0.4s linear;\r\n    }\r\n  \r\n    .searchbar:hover > .search_input{\r\n    padding: 0 10px;\r\n    width: 450px;\r\n    caret-color:red;\r\n    transition: width 0.4s linear;\r\n    }\r\n  \r\n    .searchbar:hover > .search_icon{\r\n    background: white;\r\n    color: #e74c3c;\r\n    }\r\n  \r\n    .search_icon{\r\n    height: 40px;\r\n    width: 40px;\r\n    float: right;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    color:white;\r\n    margin-top: -5px;\r\n    }\r\n  \r\n    /*-----------------------------------------------------------------------------\r\n    \r\n    .header{\r\n        height: 8vh;\r\n        width: 600px;\r\n        margin-left: 30px;\r\n     \r\n        background-size: cover;\r\n        background-position: center;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        font-family: sans-serif;\r\n    }\r\n\r\n   \r\n    .search-field{\r\n          \r\n        height: 20px;\r\n        padding: 15px;\r\n   \r\n    }\r\n    #search{\r\n        margin: 13px;\r\n        width: 365px;\r\n        margin-left: 2px;\r\n    }\r\n    .skills{\r\n        width: 200px;\r\n\r\n    }\r\n    .location{\r\n        width: 100px;\r\n    }\r\n\r\n    #location{\r\n        margin: 5px;\r\n    }\r\n    .search-btn{\r\n\r\n        height: 34px;\r\n        width: 75px;\r\n        margin-left: 20px;\r\n        background: #0eb6e9;\r\n        border: none;\r\n        color: #fff;\r\n\r\n    }\r\n\r\n    .search-btn:hover\r\n    {\r\n \r\n        background: #1d0fda;\r\n       cursor: pointer;       \r\n    }\r\n \r\n\r\n---------------------------------------------------*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsY0FBYzs7S0FFYjs7SUFFRDtJQUNBLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7S0FDN0I7O0lBRUQ7SUFDQSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw4QkFBOEI7S0FDN0I7O0lBRUQ7SUFDQSxrQkFBa0I7SUFDbEIsZUFBZTtLQUNkOztJQUVEO0lBQ0EsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7S0FDaEI7O0lBWUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREF5RHFEIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2hiYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlYXJjaF9pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGNhcmV0LWNvbG9yOnJlZDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaWNvbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoX2ljb257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICB9ICBcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDh2aDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICAuc2VhcmNoLWZpZWxke1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgIFxyXG4gICAgfVxyXG4gICAgI3NlYXJjaHtcclxuICAgICAgICBtYXJnaW46IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxze1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgICB9XHJcbiAgICAubG9jYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNsb2NhdGlvbntcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYnRue1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBlYjZlOTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYnRuOmhvdmVyXHJcbiAgICB7XHJcbiBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWQwZmRhO1xyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICBcclxuICAgIH1cclxuIFxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"container h-100\">\n        \n        <div class=\"d-flex justify-content-center h-100\">\n          <div class=\"searchbar\">\n           \n            \n            <!----------------------------------------\n            <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Key Skills Search here...\">\n            ----------------------------------------->\n            <input  type=\"text\" class=\"search_input\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Key Skills Search Here.............\" />\n  <span *ngIf=\"searching\" style=\"color:white\"> Searching... </span>\n\n\n\n\n            <a href=\"#\" class=\"search_icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n          \n          </div>\n        </div>\n      </div>\n    \n\n\n\n\n\n\n<!---------------------------------\n<body>\n  <div class=\"header\">\n    <form>\n    \n       <div class=\"form-box\">\n         <input class=\"search-field skills\" id=\"search\" name=\"search\" type=\"text\" placeholder=\"Skills,keywords.....\"/>\n         \n         <input class=\"search-field location\" id=\"location\" name=\"location\" type=\"text\" placeholder=\"location\"/>\n\n         <button class=\"search-btn\" type=\"button\"> Search </button>\n         \n       </div>\n    </form>\n  </div>\n</body>\n----------------->"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: WikipediaService, SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());

var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = false; }));
        };
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            providers: [WikipediaService],
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [WikipediaService])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        if (c.value === null || c.value.length === 0) {
            return null; // dont validate empty value
        }
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    var CompareValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
}());



/***/ }),

/***/ "./src/app/side/side.component.css":
/*!*****************************************!*\
  !*** ./src/app/side/side.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-left: 25px;\r\n    min-width: 210vh;\r\n    background-color: whitesmoke; \r\n    padding-top: 20px;\r\n    margin-bottom: 40px;  \r\n}\r\n\r\nimg{\r\n   max-width: 20vh;\r\n    height: 50px;\r\n    font-family: Roboto,sans-serif;    \r\n}\r\n\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n}\r\n\r\n.container1{\r\n    margin-left: -72px;\r\n}\r\n\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n.JP img{\r\n    max-width: 100vh;\r\n    height: 250px;\r\n    margin-top: 50px;    \r\n}\r\n\r\n.central img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;    \r\n}\r\n\r\n.booz img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n   margin-top: 50px;    \r\n}\r\n\r\n.wipro img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n    margin-top: 50px;    \r\n}\r\n\r\n.ups img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n\r\n.infosys img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n\r\n.deloit img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n}\r\n\r\n.row .register-form{\r\n  margin-top: 30px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.nav-link{\r\n    /*--------------------Innodata India Pvt. Ltd.-----------------------*/\r\n    display: block;\r\n    padding: 1px;\r\n    font-size: 12px;\r\n}\r\n\r\n.inf{\r\n    font-weight: 700;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0dBQ0csZ0JBQWdCO0lBQ2YsYUFBYTtJQUNiLCtCQUErQjtDQUNsQzs7QUFDRDtJQUNJLDhDQUE4QztJQUU5QyxzQ0FBc0M7Q0FDekM7O0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0NBQ3BCOztBQU1EO0lBQ0ksR0FBRyxXQUFXLENBQUM7SUFDZixJQUFJLFdBQVcsQ0FBQztJQUNoQixLQUFLLFdBQVcsQ0FBQztDQUNwQjs7QUFHRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtHQUNkLGlCQUFpQjtDQUNuQjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUdEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7QUFDRDtJQUNJLHVFQUF1RTtJQUN2RSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZGUvc2lkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyMTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IFxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyAgXHJcbn1cclxuXHJcbmltZ3tcclxuICAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxzYW5zLXNlcmlmOyAgICBcclxufVxyXG4uYmxpbmt7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5jb250YWluZXIxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03MnB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcblxyXG4uSlAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4uY2VudHJhbCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4uYm9veiBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgIFxyXG4gICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxufVxyXG4ud2lwcm8gaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG59XHJcbi51cHMgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxufVxyXG4uaW5mb3N5cyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgIFxyXG59XHJcbi5kZWxvaXQgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxufVxyXG5cclxuXHJcbi5yb3cgLnJlZ2lzdGVyLWZvcm17XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tSW5ub2RhdGEgSW5kaWEgUHZ0LiBMdGQuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmluZntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/side/side.component.html":
/*!******************************************!*\
  !*** ./src/app/side/side.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 bg\">\n\n            <table>\n\n                <tr>\n                    <!---------------------------\n          <button class=\"btn btn-primary\"><h6> Top Employeers</h6></button>\n          -------------->\n\n                    <span class=\"b\">\n\n                        <td><img src=\"assets/conan.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/fis.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cgi.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/gen.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/syn.gif\" class=\"d-block w-100\"></td><br><br>\n                        \n                        <td><img src=\"assets/will.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/air.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/epa.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/dbs.gif\" class=\"d-block w-100\"></td><br><br>\n\n                        <td><img src=\"assets/condu.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/orac.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cme.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/bpo.gif\" class=\"d-block w-100\"></td><br><br>\n<!---------------------------------------------------------------------------------------------\n                        <td><img src=\"assets/ril.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/mav.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/in.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/bar.gif\" class=\"d-block w-100\"></td><br>\n\n----------------------------------------------------------------------------------------------->\n\n\n                    </span>\n\n                </tr>\n            </table>\n\n        </div>\n        <div class=\"col-md-7\">\n            <!---------------------------------------------------------------------------------------------------------->\n\n            <div class=\"container1\">\n\n                <h6 style=\"color:blue\"><b> Best Places To Work </b></h6>\n\n                <ngb-tabset #t=\"ngbTabset\">\n                    <ngb-tab id=\"tab-selectbyid1\" title=\"All Sectors\">\n                        <ng-template ngbTabContent>\n\n                            <div class=\"row register-form\">\n         <!----------------------------------------------------------------------------------->\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <span class=\"inf\">Information Technology </span>\n\n                                        <br> <br>\n\n                                        ITES/BPO/.COM\n                                       <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\n                                   </div>\n                                </div>\n\n          <!------------------------------------------------------------------------------->\n\n                                <div class=\"col-md-4\">\n\n                                  <div class=\"form-group\">\n                                            Durable/FMCG/Electr.\n\n                                 <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\n                                 <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\n                                 <a class=\"nav-link\" href=\"#\">Miraj Group</a>\n                                 <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\n\n                                    </div>\n                                </div>\n\n     <!------------------------------------------------------------------------------->\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                      RealEstate/Constr.\n\n                                      <a class=\"nav-link\" href=\"#\">DLF Ltd.</a>\n                                 <a class=\"nav-link\" href=\"#\">IREO Pvt. Ltd.</a>\n\n                                    </div>\n                                </div>\n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Product Software\n\n          <a class=\"nav-link\" href=\"#\">Seven Lakes Technologies Pvt. Ltd. </a>\n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Engg./Infra./Mining\n\n              <a class=\"nav-link\" href=\"#\">Nuberg Engineering Ltd</a>\n         <a class=\"nav-link\" href=\"#\">Rockwell</a>\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        <span class=\"inf\">Services </span>\n\n                        Dotcom/Internet/E-Commerce\n\n                  <a class=\"nav-link\" href=\"#\">IndiaMart InterMesh Ltd.</a>\n            \n                </div>\n            </div>\n\n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Software Services\n\n          <a class=\"nav-link\" href=\"#\">Birlasoft (India) Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">ESDS Software Solution </a>\n          <a class=\"nav-link\" href=\"#\">Judge India Solutions </a>\n          <a class=\"nav-link\" href=\"#\">Neoris Consulting Services </a>\n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Healthcare/Pharma\n\n              <a class=\"nav-link\" href=\"#\">Indegene Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Wockhardt Hospitals Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Zydus Hospitals.</a>\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Education/Media\n\n                  <a class=\"nav-link\" href=\"#\">EINS Education</a>\n            \n                </div>\n            </div>\n\n            \n <!------------------------------------------------------------------------------->\n\n\n <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                <span class=\"inf\">Manufacturing </span>\n                  <br><br>\n                Auto/ Auto Equip.\n\n          <a class=\"nav-link\" href=\"#\">Endurance Technologies Limited</a>\n         \n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Interior Solutions/FMCG\n\n              <a class=\"nav-link\" href=\"#\">Merino Group.</a>\n              \n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Finance/Insurance\n\n                  <a class=\"nav-link\" href=\"#\">Sun Life India Service Centre Pvt. Ltd.</a>\n            \n                </div>\n            </div>\n\n\n<!------------------------------------------------------------------------------->\n\n\n<div class=\"col-md-4\">\n        <div class=\"form-group\">\n                Diversified/Retail\n\n          <a class=\"nav-link\" href=\"#\">Lakshmi - Life Science/Cargo/Technology</a>\n          <a class=\"nav-link\" href=\"#\">LENSKART SOLUTIONS PRIVATE LIMITED</a>\n          <a class=\"nav-link\" href=\"#\">Shoppers Stop Limited</a>\n          <a class=\"nav-link\" href=\"#\">Unison International</a>\n          <a class=\"nav-link\" href=\"#\">Xpert Conexions</a>\n               \n         \n    \n        </div>\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    Logistics/Shipping\n\n              <a class=\"nav-link\" href=\"#\">Total Group.</a>\n\n              Printing & Packaging\n              <a class=\"nav-link\" href=\"#\">UFLEX</a>\n              <a class=\"nav-link\" href=\"#\">Mancer Consulting Services.</a>\n              <a class=\"nav-link\" href=\"#\">Mastermind Network</a>\n              <a class=\"nav-link\" href=\"#\">SV Management Consultant’s Indore</a>\n\n\n            </div>\n        </div>\n\n\n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        Search Firms\n\n                  <a class=\"nav-link\" href=\"#\">Adeo Consultancy Private Limited</a>\n                  <a class=\"nav-link\" href=\"#\">Careerist</a>\n                  <a class=\"nav-link\" href=\"#\">Crescendo Global</a>\n                  <a class=\"nav-link\" href=\"#\">e-Solutions IT Services Pvt. Ltd.</a>\n                  <a class=\"nav-link\" href=\"#\">Highpoints Technologies</a>\n                  <a class=\"nav-link\" href=\"#\">KRM Global</a>\n                 \n                \n                </div>\n            </div>\n\n\n\n<!------------------------------------------------------------------------------->\n\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        ChipDsg/Semicond.\n\n      <a class=\"nav-link\" href=\"#\">Einfochips Ltd</a>\n      <a class=\"nav-link\" href=\"#\">GLOBALFOUNDRIES Engineering Private Limited</a>\n      <a class=\"nav-link\" href=\"#\">Intel</a>\n      <a class=\"nav-link\" href=\"#\">Invescas Technologies India Ltd</a>\n      <a class=\"nav-link\" href=\"#\">Maxim Integrated</a>\n\n      <a class=\"nav-link\" href=\"#\">Micron</a>\n      <a class=\"nav-link\" href=\"#\">Sankalp Semiconductors</a>\n      <a class=\"nav-link\" href=\"#\">XILINX</a>\n      <a class=\"nav-link\" href=\"#\">Western Digital</a>\n     \n      Cloud Computing\n      <a class=\"nav-link\" href=\"#\"> Secure - 24 IT Services Pvt Ltd  </a>\n     \n     \n\n    </div>\n</div>\n\n\n\n<div class=\"col-md-4\">\n        <div class=\"form-group\">\n            Digital Agencies\n\n          <a class=\"nav-link\" href=\"#\">BORN Commerce Private Limited</a>\n\n          Engineering Services\n          <a class=\"nav-link\" href=\"#\">DesignTech Systems Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">Hinduja Tech Limited</a>\n          <a class=\"nav-link\" href=\"#\">QuEST Global</a>\n          <a class=\"nav-link\" href=\"#\">Robert Bosch Engineering and Business Solution Limited</a>\n          <a class=\"nav-link\" href=\"#\">TÜV SÜD South Asia Pvt. Ltd.</a>\n\n\n\n        </div>\n    </div>\n\n\n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                Financial Services & Software\n\n              <a class=\"nav-link\" href=\"#\">BLACKROCK</a>\n              <a class=\"nav-link\" href=\"#\">Factset Systems Inc.</a>\n             \n              Gaming\n\n              <a class=\"nav-link\" href=\"#\">Electronic Arts Games (India) Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">UBISOFT</a>\n              Healthcare/Pharma\n              <a class=\"nav-link\" href=\"#\">AstraZeneca</a>\n              <a class=\"nav-link\" href=\"#\">Cotiviti India Private Limited</a>\n             \n            \n            </div>\n        </div>\n\n\n\n<!------------------------------------------------------------------------------->\n\n\n\n\n\n\n                            </div>\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n                    <ngb-tab id=\"tab-selectbyid2\" title=\"Information Technology\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n\n\n\n                    <ngb-tab id=\"tab-selectbyid3\" title=\"Manufacturing\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n                    <ngb-tab id=\"tab-selectbyid4\" title=\"Services\">\n                        <ng-template ngbTabContent>\n\n\n\n\n                        </ng-template>\n                    </ngb-tab>\n\n\n\n\n\n                </ngb-tabset>\n            </div>\n            <!------------------------------------------------------------------------------------------------------->\n        </div>\n\n        <div class=\"col-md-3\">\n\n            <div class=\"container2\">\n\n                <span class=\"JP\">\n\n                    <img src=\"assets/jp.jpg\" class=\"d-block w-100\">\n\n                </span>\n                <span class=\"central\">\n\n                    <img src=\"assets/cental.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"booz\">\n\n                    <img src=\"assets/booz.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"wipro\">\n\n                    <img src=\"assets/wipro1.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"ups\">\n\n                    <img src=\"assets/ups.gif\" class=\"d-block w-100\">\n\n                </span>\n\n                <span class=\"infosys\">\n\n                    <img src=\"assets/infjob.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n\n                <span class=\"deloit\">\n\n                    <img src=\"assets/deljob.jpg\" class=\"d-block w-100\">\n\n                </span>\n\n            </div>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideComponent = /** @class */ (function () {
    function SideComponent() {
    }
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.css */ "./src/app/side/side.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/side1/side1.component.css":
/*!*******************************************!*\
  !*** ./src/app/side1/side1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-left: 25px;\r\n    min-width: 210vh;\r\n    background-color: whitesmoke; \r\n    padding-top: 20px;\r\n    margin-bottom: 40px;  \r\n  }\r\n  \r\n  img{\r\n   max-width: 20vh;\r\n    height: 50px;\r\n    font-family: Roboto,sans-serif;    \r\n  }\r\n  \r\n  .blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n  }\r\n  \r\n  .container1{\r\n    margin-left: -72px;\r\n  }\r\n  \r\n  @-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n  }\r\n  \r\n  @keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n  }\r\n  \r\n  .JP img{\r\n    max-width: 100vh;\r\n    height: 250px;\r\n    margin-top: 50px;    \r\n  }\r\n  \r\n  .central img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;    \r\n  }\r\n  \r\n  .booz img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n   margin-top: 50px;    \r\n  }\r\n  \r\n  .wipro img{\r\n    max-width: 100vh;\r\n    height: 60px;   \r\n    margin-top: 50px;    \r\n  }\r\n  \r\n  .ups img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n  }\r\n  \r\n  .infosys img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n  }\r\n  \r\n  .deloit img{\r\n    max-width: 100vh;\r\n    height: 60px;  \r\n    margin-top: 50px;   \r\n  }\r\n  \r\n  .row .register-form{\r\n  margin-top: 30px;\r\n  margin-left: 10px;\r\n  }\r\n  \r\n  .nav-link{\r\n    /*--------------------Innodata India Pvt. Ltd.-----------------------*/\r\n    display: block;\r\n    padding: 1px;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .inf{\r\n    font-weight: 700;\r\n  }\r\n  \r\n  /* ------------------------------------------------------------ */\r\n  \r\n  .jobs-list-block {\r\n    background-color: #fff;\r\n    border: 1px solid #dcdcdc;\r\n    padding: 15px 0 14px 10px;\r\n    margin-bottom: 7px;\r\n    margin-left: 5px;\r\n    \r\n  }\r\n  \r\n  .heading-latest-block {\r\n    border-bottom: 1px solid #1e08e4;\r\n    padding-left: 1px;\r\n   \r\n    \r\n  }\r\n  \r\n  .heading-latest {\r\n    background-color: #5513f1;\r\n    padding: 15px 0 14px 10px;\r\n    width: 121px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    margin: 0;\r\n    \r\n  }\r\n  \r\n  .display-inline {\r\n    display: inline-block;\r\n    padding-right: 3px;\r\n       \r\n  }\r\n  \r\n  .display-inline a{\r\n    margin: 5px;\r\n    \r\n  }\r\n  \r\n  .nav-link{\r\n    color: black;\r\n}\r\n  \r\n  .nav-link:hover{\r\n    color: #1e08e4;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZTEvc2lkZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixvQkFBb0I7R0FDckI7O0VBRUQ7R0FDQyxnQkFBZ0I7SUFDZixhQUFhO0lBQ2IsK0JBQStCO0dBQ2hDOztFQUNEO0lBQ0UsOENBQThDO0lBRTlDLHNDQUFzQztHQUN2Qzs7RUFDRDtJQUNFLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLEdBQUcsV0FBVyxDQUFDO0lBQ2YsSUFBSSxXQUFXLENBQUM7SUFDaEIsS0FBSyxXQUFXLENBQUM7R0FDbEI7O0VBTUQ7SUFDRSxHQUFHLFdBQVcsQ0FBQztJQUNmLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssV0FBVyxDQUFDO0dBQ2xCOztFQUdEO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjs7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0dBQ2QsaUJBQWlCO0dBQ2pCOztFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjs7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7O0VBR0Q7RUFDQSxpQkFBaUI7RUFDakIsa0JBQWtCO0dBQ2pCOztFQUNEO0lBQ0UsdUVBQXVFO0lBQ3ZFLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCOztFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVELGtFQUFrRTs7RUFFbEU7SUFDRSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsaUJBQWlCOztHQUVsQjs7RUFFRDtJQUNFLGlDQUFpQztJQUNqQyxrQkFBa0I7OztHQUduQjs7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTs7R0FFWDs7RUFDRDtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7O0dBRXBCOztFQUNEO0lBQ0UsWUFBWTs7R0FFYjs7RUFHRDtJQUNFLGFBQWE7Q0FDaEI7O0VBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZGUxL3NpZGUxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtaW4td2lkdGg6IDIxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7ICBcclxuICB9XHJcbiAgXHJcbiAgaW1ne1xyXG4gICBtYXgtd2lkdGg6IDIwdmg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLHNhbnMtc2VyaWY7ICAgIFxyXG4gIH1cclxuICAuYmxpbmt7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICAuY29udGFpbmVyMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNzJweDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAwJXtvcGFjaXR5OiAxO31cclxuICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5KUCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG4gIH1cclxuICAuY2VudHJhbCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxuICB9XHJcbiAgLmJvb3ogaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgICBcclxuICAgbWFyZ2luLXRvcDogNTBweDsgICAgXHJcbiAgfVxyXG4gIC53aXBybyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICAgXHJcbiAgfVxyXG4gIC51cHMgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxuICB9XHJcbiAgLmluZm9zeXMgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgICBcclxuICB9XHJcbiAgLmRlbG9pdCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAucm93IC5yZWdpc3Rlci1mb3Jte1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5uYXYtbGlua3tcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS1Jbm5vZGF0YSBJbmRpYSBQdnQuIEx0ZC4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmluZntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIFxyXG4gIC5qb2JzLWxpc3QtYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTRweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuaGVhZGluZy1sYXRlc3QtYmxvY2sge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZTA4ZTQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgXHJcbiAgICBcclxuICB9XHJcbiAgLmhlYWRpbmctbGF0ZXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTEzZjE7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTRweCAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxuICB9XHJcbiAgLmRpc3BsYXktaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgIFxyXG4gIH1cclxuICAuZGlzcGxheS1pbmxpbmUgYXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgXHJcbiAgfSBcclxuICBcclxuICBcclxuICAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5hdi1saW5rOmhvdmVye1xyXG4gICAgY29sb3I6ICMxZTA4ZTQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/side1/side1.component.html":
/*!********************************************!*\
  !*** ./src/app/side1/side1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2 bg\">\n  \n            <table>\n  \n                <tr>\n                    <!---------------------------\n          <button class=\"btn btn-primary\"><h6> Top Employeers</h6></button>\n          -------------->\n  \n                    <span class=\"b\">\n  \n                        <td><img src=\"assets/conan.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/fis.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cgi.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/gen.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/syn.gif\" class=\"d-block w-100\"></td><br><br>\n                        \n                        <td><img src=\"assets/will.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/air.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/epa.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/dbs.gif\" class=\"d-block w-100\"></td><br><br>\n  \n                        <td><img src=\"assets/condu.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/orac.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/cme.gif\" class=\"d-block w-100\"></td><br><br>\n                        <td><img src=\"assets/bpo.gif\" class=\"d-block w-100\"></td><br><br>\n  <!---------------------------------------------------------------------------------------------\n                        <td><img src=\"assets/ril.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/mav.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/in.gif\" class=\"d-block w-100\"></td><br>\n                        <td><img src=\"assets/bar.gif\" class=\"d-block w-100\"></td><br>\n  \n  ----------------------------------------------------------------------------------------------->\n  \n  \n                    </span>\n  \n                </tr>\n            </table>\n  \n        </div>\n        <div class=\"col-md-7\">\n            <!---------------------------------------------------------------------------------------------------------->\n  \n            <div class=\"container1\">\n  \n                <!-- <h6 style=\"color:blue\"><b> Best Places To Work </b></h6> -->\n  \n                <!-- <ngb-tabset #t=\"ngbTabset\">\n                    <ngb-tab id=\"tab-selectbyid1\" title=\"All Sectors\">\n                        <ng-template ngbTabContent> -->\n  \n  \n                       <!--  -->\n  \n                       <div class=\"jobs-list-block\">\n                              <div class=\"col-md-12 padding-none heading-latest-block\">\n                        \n                                  <h1 class=\"col-md-2 heading-latest display-inline\">Updated JOBS</h1>\n  \n  \n                       <div class=\"col-md-10 padding-none latest-sub-heading-text display-inline\"\n                       itemscope=\"\" itemtype=\"http://www.schema.org/SiteNavigationElement\">&nbsp;\n         \n                       <div class=\"display-inline latest-all-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\"><b>All Jobs</b></a>\n                       </div>\n         \n                       <span class=\"color-b9\">|</span>\n         \n                       <div class=\"display-inline latest-other-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\"><b>Software Jobs</b></a>\n                       </div>\n         \n                       <span class=\"color-b9\">|</span>\n         \n                       <div class=\"display-inline latest-other-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\"><b>Govt Jobs</b></a>\n                       </div>\n         \n                       <span class=\"color-b9\">|</span>\n         \n                       <div class=\"display-inline latest-other-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\"><b>Core Technical Jobs</b></a>\n                       </div>\n         \n                       <!-- <span class=\"color-b9\">|</span>\n         \n                       <div class=\"display-inline latest-other-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">MBA Jobs</a>\n                       </div> -->\n         \n                       <span class=\"color-b9\">|</span>\n         \n                       <div class=\"display-inline latest-other-jobs font-13\">\n                           <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\"><b>Bank Jobs</b></a>\n                       </div>\n         \n                       <span class=\"color-b9\">|</span>\n         \n                       <div class=\"dropdown more-dropdown display-inline latest-other-jobs font-13\">\n                           <a href=\"#\" data-toggle=\"dropdown\"\n                               class=\"dropdown-toggle latest-other-jobs-head\" style=\"color: red\"><b>More</b><b\n                                   class=\"caret more_caret\"></b></a>\n                           <ul class=\"dropdown-menu\">\n                               <li itemprop=\"name\"><a href=\"\">Defence Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Research Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">BPO Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Walk-ins</a></li>\n                               <li itemprop=\"name\"><a href=\"\">BSc/BCA/BBM</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Teaching Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Diploma Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">1-3Yrs Exp</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Internships</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Scholarships</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Bank Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Tech Support</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Health Care</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Hospitality</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Part Time Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">Finance Jobs</a></li>\n                               <li itemprop=\"name\"><a href=\"\">More Jobs</a></li>\n                           </ul>\n                       </div>\n         \n                   </div>\n         </div>\n  \n  \n                          <!--  -->\n  \n                            <div class=\"row register-form\">\n         <!----------------------------------------------------------------------------------->\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <span class=\"inf\" style=\"color: cornflowerblue\">Information Technology </span>\n  \n                                        <br> <br>\n  \n                                      <span style=\"color: cornflowerblue\">  ITES/BPO/.COM </span>\n                                       <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\n                                   </div>\n                                </div>\n  \n          <!------------------------------------------------------------------------------->\n  \n                                <div class=\"col-md-4\">\n  \n                                  <div class=\"form-group\">\n                                          <span style=\"color: cornflowerblue\"> Durable/FMCG/Electr. </span>\n  \n                                 <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\n                                 <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\n                                 <a class=\"nav-link\" href=\"#\">Miraj Group</a>\n                                 <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\n  \n                                    </div>\n                                </div>\n  \n     <!------------------------------------------------------------------------------->\n  \n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                    <span style=\"color: cornflowerblue\"> RealEstate/Constr. </span>\n  \n                                      <a class=\"nav-link\" href=\"#\">DLF Ltd.</a>\n                                 <a class=\"nav-link\" href=\"#\">IREO Pvt. Ltd.</a>\n  \n                                    </div>\n                                </div>\n  <!------------------------------------------------------------------------------->\n  \n  \n  <div class=\"col-md-4\">\n        <div class=\"form-group\">\n               <span style=\"color: cornflowerblue\"> Product Software </span>\n  \n          <a class=\"nav-link\" href=\"#\">Seven Lakes Technologies Pvt. Ltd. </a>\n    \n        </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                   <span style=\"color: cornflowerblue\"> Engg./Infra./Mining </span>\n  \n              <a class=\"nav-link\" href=\"#\">Nuberg Engineering Ltd</a>\n         <a class=\"nav-link\" href=\"#\">Rockwell</a>\n  \n            </div>\n        </div>\n  \n  \n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        <span class=\"inf\" style=\"color: cornflowerblue\">Services </span>\n  <br><br>\n                       <span style=\"color: cornflowerblue\"> Dotcom/Internet/E-Commerce </span>\n  \n                  <a class=\"nav-link\" href=\"#\">IndiaMart InterMesh Ltd.</a>\n            \n                </div>\n            </div>\n  \n  <!------------------------------------------------------------------------------->\n  \n  \n  <div class=\"col-md-4\">\n        <div class=\"form-group\">\n              <span style=\"color: cornflowerblue\"> Software Services </span>\n  \n          <a class=\"nav-link\" href=\"#\">Birlasoft (India) Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">ESDS Software Solution </a>\n          <a class=\"nav-link\" href=\"#\">Judge India Solutions </a>\n          <a class=\"nav-link\" href=\"#\">Neoris Consulting Services </a>\n    \n        </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                  <span style=\"color: cornflowerblue\">  Healthcare/Pharma </span>\n  \n              <a class=\"nav-link\" href=\"#\">Indegene Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Wockhardt Hospitals Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">Zydus Hospitals.</a>\n  \n            </div>\n        </div>\n  \n  \n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                        <span style=\"color: cornflowerblue\"> Education/Media </span>\n  \n                  <a class=\"nav-link\" href=\"#\">EINS Education</a>\n            \n                </div>\n            </div>\n  \n            \n  <!------------------------------------------------------------------------------->\n  \n  \n  <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                <span class=\"inf\" style=\"color: cornflowerblue\">Manufacturing </span>\n                  <br><br>\n               <span style=\"color: cornflowerblue\"> Auto/ Auto Equip. </span>\n  \n          <a class=\"nav-link\" href=\"#\">Endurance Technologies Limited</a>\n         \n    \n        </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                    <span style=\"color: cornflowerblue\"> Interior Solutions/FMCG </span>\n  \n              <a class=\"nav-link\" href=\"#\">Merino Group.</a>\n              \n  \n            </div>\n        </div>\n  \n  \n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                      <span style=\"color: cornflowerblue\"> Finance/Insurance </span>\n  \n                  <a class=\"nav-link\" href=\"#\">Sun Life India Service Centre Pvt. Ltd.</a>\n            \n                </div>\n            </div>\n  \n  \n  <!------------------------------------------------------------------------------->\n  \n  \n  <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                <span style=\"color: cornflowerblue\"> Diversified/Retail </span>\n  \n          <a class=\"nav-link\" href=\"#\">Lakshmi - Life Science/Cargo/Technology</a>\n          <a class=\"nav-link\" href=\"#\">LENSKART SOLUTIONS PRIVATE LIMITED</a>\n          <a class=\"nav-link\" href=\"#\">Shoppers Stop Limited</a>\n          <a class=\"nav-link\" href=\"#\">Unison International</a>\n          <a class=\"nav-link\" href=\"#\">Xpert Conexions</a>\n               \n         \n    \n        </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                     <span style=\"color: cornflowerblue\"> Logistics/Shipping </span>\n  \n              <a class=\"nav-link\" href=\"#\">Total Group.</a>\n  \n              <span style=\"color: cornflowerblue\"> Printing & Packaging </span>\n\n              <a class=\"nav-link\" href=\"#\">UFLEX</a>\n              <a class=\"nav-link\" href=\"#\">Mancer Consulting Services.</a>\n              <a class=\"nav-link\" href=\"#\">Mastermind Network</a>\n              <a class=\"nav-link\" href=\"#\">SV Management Consultant’s Indore</a>\n  \n  \n            </div>\n        </div>\n  \n  \n        <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                      <span style=\"color: cornflowerblue\"> Search Firms </span>\n  \n                  <a class=\"nav-link\" href=\"#\">Adeo Consultancy Private Limited</a>\n                  <a class=\"nav-link\" href=\"#\">Careerist</a>\n                  <a class=\"nav-link\" href=\"#\">Crescendo Global</a>\n                  <a class=\"nav-link\" href=\"#\">e-Solutions IT Services Pvt. Ltd.</a>\n                  <a class=\"nav-link\" href=\"#\">Highpoints Technologies</a>\n                  <a class=\"nav-link\" href=\"#\">KRM Global</a>\n                 \n                \n                </div>\n            </div>\n  \n  \n  \n  <!------------------------------------------------------------------------------->\n  \n  \n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n       <span style=\"color: cornflowerblue\"> ChipDsg/Semicond. </span>\n  \n      <a class=\"nav-link\" href=\"#\">Einfochips Ltd</a>\n      <a class=\"nav-link\" href=\"#\">GLOBALFOUNDRIES Engineering Private Limited</a>\n      <a class=\"nav-link\" href=\"#\">Intel</a>\n      <a class=\"nav-link\" href=\"#\">Invescas Technologies India Ltd</a>\n      <a class=\"nav-link\" href=\"#\">Maxim Integrated</a>\n  \n      <a class=\"nav-link\" href=\"#\">Micron</a>\n      <a class=\"nav-link\" href=\"#\">Sankalp Semiconductors</a>\n      <a class=\"nav-link\" href=\"#\">XILINX</a>\n      <a class=\"nav-link\" href=\"#\">Western Digital</a>\n     \n    <span style=\"color: cornflowerblue\">  Cloud Computing </span>\n      <a class=\"nav-link\" href=\"#\"> Secure - 24 IT Services Pvt Ltd  </a>\n     \n     \n  \n    </div>\n  </div>\n  \n  \n  \n  <div class=\"col-md-4\">\n        <div class=\"form-group\">\n            <span style=\"color: cornflowerblue\"> Digital Agencies </span>\n  \n          <a class=\"nav-link\" href=\"#\">BORN Commerce Private Limited</a>\n  \n          <span style=\"color: cornflowerblue\"> Engineering Services </span>\n\n          <a class=\"nav-link\" href=\"#\">DesignTech Systems Ltd.</a>\n          <a class=\"nav-link\" href=\"#\">Hinduja Tech Limited</a>\n          <a class=\"nav-link\" href=\"#\">QuEST Global</a>\n          <a class=\"nav-link\" href=\"#\">Robert Bosch Engineering and Business Solution Limited</a>\n          <a class=\"nav-link\" href=\"#\">TÜV SÜD South Asia Pvt. Ltd.</a>\n  \n  \n  \n        </div>\n    </div>\n  \n  \n    <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <span style=\"color: cornflowerblue\"> Financial Services & Software </span>\n  \n              <a class=\"nav-link\" href=\"#\">BLACKROCK</a>\n              <a class=\"nav-link\" href=\"#\">Factset Systems Inc.</a>\n             \n              <span style=\"color: cornflowerblue\"> Gaming </span>\n  \n              <a class=\"nav-link\" href=\"#\">Electronic Arts Games (India) Pvt. Ltd.</a>\n              <a class=\"nav-link\" href=\"#\">UBISOFT</a>\n            <span style=\"color: cornflowerblue\">  Healthcare/Pharma </span>\n              <a class=\"nav-link\" href=\"#\">AstraZeneca</a>\n              <a class=\"nav-link\" href=\"#\">Cotiviti India Private Limited</a>\n             \n            \n            </div>\n        </div>\n  \n  \n  \n  <!------------------------------------------------------------------------------->\n  \n  \n  \n  \n  \n  <!--  -->\n  \n                            </div>\n  \n  \n  \n  </div>\n  \n  \n  <!--  -->\n  \n                        <!-- </ng-template>\n                    </ngb-tab> -->\n  \n  <!-- \n  \n                    <ngb-tab id=\"tab-selectbyid2\" title=\"Information Technology\">\n                        <ng-template ngbTabContent>\n  \n  \n  \n  \n                        </ng-template>\n                    </ngb-tab>\n  \n  \n  \n  \n  \n  \n  \n                    <ngb-tab id=\"tab-selectbyid3\" title=\"Manufacturing\">\n                        <ng-template ngbTabContent>\n  \n  \n  \n  \n                        </ng-template>\n                    </ngb-tab> -->\n  \n  \n  \n  <!-- \n                    <ngb-tab id=\"tab-selectbyid4\" title=\"Services\">\n                        <ng-template ngbTabContent>\n  \n  \n  \n  \n                        </ng-template>\n                    </ngb-tab> -->\n  \n  \n  \n  \n  \n                <!-- </ngb-tabset> -->\n            </div>\n            <!------------------------------------------------------------------------------------------------------->\n        </div>\n  \n        <div class=\"col-md-3\">\n  \n            <div class=\"container2\">\n  \n                <span class=\"JP\">\n  \n                    <img src=\"assets/jp.jpg\" class=\"d-block w-100\">\n  \n                </span>\n                <span class=\"central\">\n  \n                    <img src=\"assets/cental.jpg\" class=\"d-block w-100\">\n  \n                </span>\n  \n                <span class=\"booz\">\n  \n                    <img src=\"assets/booz.jpg\" class=\"d-block w-100\">\n  \n                </span>\n  \n                <span class=\"wipro\">\n  \n                    <img src=\"assets/wipro1.jpg\" class=\"d-block w-100\">\n  \n                </span>\n  \n                <span class=\"ups\">\n  \n                    <img src=\"assets/ups.gif\" class=\"d-block w-100\">\n  \n                </span>\n  \n                <span class=\"infosys\">\n  \n                    <img src=\"assets/infjob.jpg\" class=\"d-block w-100\">\n  \n                </span>\n  \n  \n                <span class=\"deloit\">\n  \n                    <img src=\"assets/deljob.jpg\" class=\"d-block w-100\">\n  \n                </span>\n  \n            </div>\n  \n        </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/side1/side1.component.ts":
/*!******************************************!*\
  !*** ./src/app/side1/side1.component.ts ***!
  \******************************************/
/*! exports provided: Side1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Side1Component", function() { return Side1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Side1Component = /** @class */ (function () {
    function Side1Component() {
    }
    Side1Component.prototype.ngOnInit = function () {
    };
    Side1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side1',
            template: __webpack_require__(/*! ./side1.component.html */ "./src/app/side1/side1.component.html"),
            styles: [__webpack_require__(/*! ./side1.component.css */ "./src/app/side1/side1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Side1Component);
    return Side1Component;
}());



/***/ }),

/***/ "./src/app/subfooter/subfooter.component.css":
/*!***************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer-main-div{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n  /*  background: dodgerblue; */\r\n    padding: 20px 0px;\r\n}\r\n.footer-social-icons{\r\n    width: 100%;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n.footer-social-icons ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n.footer-social-icons ul li{\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 0px 10px;\r\n    border-radius: 100%;\r\n    background: darkslategray;\r\n}\r\n.footer-social-icons ul li a{\r\n    color: aliceblue;\r\n    font-size: 25px;\r\n    display: block;\r\n}\r\na{\r\n   text-decoration: none;\r\n   outline: none;\r\n}\r\n.footer-social-icons ul li a i{\r\n  line-height: 50px; \r\n}\r\n.footer-menu-one{\r\n   width: 100%;\r\n   height: auto;\r\n   margin: auto;\r\n   margin-top: 20px;\r\n}\r\n.footer-menu-one ul{\r\n   margin: 0px;\r\n   padding: 0px;\r\n   text-align: center;\r\n}\r\n.footer-menu-one ul li{\r\n   display: inline-block;\r\n   margin: 0px 20px;\r\n}\r\n.footer-menu-one ul li a{\r\n   font-family: arial;\r\n   font-size: 15px;\r\n   font-weight: 600;\r\n   color: #fff;\r\n   letter-spacing: 1px;\r\n}\r\n.footer-bottom{\r\n   width: 100%;\r\n   height: auto;\r\n   margin: auto;\r\n   background:darkslategray;\r\n   padding: 5px; \r\n}\r\n.footer-bottom p{\r\n   font-family: arial;\r\n   font-size: 14px;\r\n   text-align: center;\r\n   color: #fff;\r\n   font-weight: 600;\r\n   letter-spacing: 1px;\r\n}\r\n.footer-bottom p a{\r\n    color: #fff;\r\n}\r\n/*---------------------------------------------------\r\n#footer{\r\n   background: dodgerblue;\r\n   color: #fff;\r\n   padding: 20px;\r\n}\r\n.fa-heart-o{\r\n   margin: 3px;\r\n   color: red;\r\n}---------*/\r\n/*--------------------------------------------------------------------------------------*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtFQUNmLDhCQUE4QjtJQUM1QixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtHQUNHLHNCQUFzQjtHQUN0QixjQUFjO0NBQ2hCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsYUFBYTtHQUNiLGlCQUFpQjtDQUNuQjtBQUNEO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixtQkFBbUI7Q0FDckI7QUFDRDtHQUNHLHNCQUFzQjtHQUN0QixpQkFBaUI7Q0FDbkI7QUFDRDtHQUNHLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLFlBQVk7R0FDWixvQkFBb0I7Q0FDdEI7QUFDRDtHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsYUFBYTtHQUNiLHlCQUF5QjtHQUN6QixhQUFhO0NBQ2Y7QUFDRDtHQUNHLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsb0JBQW9CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFNRDs7Ozs7Ozs7O1lBU1k7QUFJWiwwRkFBMEYiLCJmaWxlIjoic3JjL2FwcC9zdWJmb290ZXIvc3ViZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3Rlci1tYWluLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIC8qICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlOyAqL1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbnN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9vdGVyLXNvY2lhbC1pY29ucyB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb25zIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbnMgdWwgbGkgYXtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5he1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbnMgdWwgbGkgYSBpe1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4OyBcclxufVxyXG4uZm9vdGVyLW1lbnUtb25le1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1tZW51LW9uZSB1bHtcclxuICAgbWFyZ2luOiAwcHg7XHJcbiAgIHBhZGRpbmc6IDBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItbWVudS1vbmUgdWwgbGl7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG4uZm9vdGVyLW1lbnUtb25lIHVsIGxpIGF7XHJcbiAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uZm9vdGVyLWJvdHRvbXtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBiYWNrZ3JvdW5kOmRhcmtzbGF0ZWdyYXk7XHJcbiAgIHBhZGRpbmc6IDVweDsgXHJcbn1cclxuLmZvb3Rlci1ib3R0b20gcHtcclxuICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1ib3R0b20gcCBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jZm9vdGVye1xyXG4gICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uZmEtaGVhcnQtb3tcclxuICAgbWFyZ2luOiAzcHg7XHJcbiAgIGNvbG9yOiByZWQ7XHJcbn0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/subfooter/subfooter.component.html":
/*!****************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-main-div bg-primary\">\n  <div class=\"footer-social-icons\">\n       <ul>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-facebook\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-twitter\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-google-plus\"></i></a></li>\n         <li><a href=\"#\" target=\"blank\"><i class=\"fa fa-youtube\"></i></a></li>\n       </ul>\n  </div>\n  <div class=\"footer-menu-one\">\n     <ul>\n       <li><a href=\"#\">Home</a></li>\n       <li><a href=\"#\">About Us</a></li>\n       <li><a href=\"#\">Services</a></li>\n       <li><a href=\"#\">Products</a></li>\n       <li><a href=\"#\">Contact Us</a></li>\n     </ul>\n  </div>\n\n</div>\n<div class=\"footer-bottom\">\n   <p>Copy Right by:<a href=\"#\">@Sahiudhyogh </a></p>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-----------------------Footer----------------------\n <section id=\"footer\">\n   <div class=\"container text-center\">\n      <p> Sahiudhyogh <i class=\"fa fa-heart-o\"></i></p>\n   </div>\n </section>\n ---------------->\n <!-----------------------Footer End-----------------------\n <script src=\"C:\\Users\\yes boss\\Desktop\\website.js\"></script>\n <script>\n var scroll =  new SmoothScroll('a[href*=\"#\"]');\n </script>\n --->"

/***/ }),

/***/ "./src/app/subfooter/subfooter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subfooter/subfooter.component.ts ***!
  \**************************************************/
/*! exports provided: SubfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubfooterComponent", function() { return SubfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubfooterComponent = /** @class */ (function () {
    function SubfooterComponent() {
    }
    SubfooterComponent.prototype.ngOnInit = function () {
    };
    SubfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subfooter',
            template: __webpack_require__(/*! ./subfooter.component.html */ "./src/app/subfooter/subfooter.component.html"),
            styles: [__webpack_require__(/*! ./subfooter.component.css */ "./src/app/subfooter/subfooter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubfooterComponent);
    return SubfooterComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.css":
/*!*********************************************!*\
  !*** ./src/app/tables/tables.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/*!**********************************************!*\
  !*** ./src/app/tables/tables.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Village</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Mekala</td>\n        <td>Mallikarjuna Redddy</td>\n        <td>Reddy Palem</td>\n      </tr>\n      <tr>\n        <td>Chandhra Leka</td>\n        <td>Thinakaran</td>\n        <td>Hosur</td>\n      </tr>\n      <tr>\n        <td>Palaparthi</td>\n        <td>Sunanda</td>\n        <td>Vindhuru</td>\n      </tr>\n\n    </tbody>\n  </table>\n\n</div>\n\n<!-- --------------------- -->\n\n<dl>\n  <dt>Mekala</dt>\n  <dd>Mallikarjuna Reddy</dd>\n  <dt>Chandhraleka</dt>\n  <dd>Thinakaran</dd>\n  Mallikarjuna <mark>Reddy</mark><abbr title=\"sirname\">Mekala</abbr><kbd>Reddy+Palem</kbd>\n</dl>\n<pre>\n\n<b>Mallikarjuna</b>\n           Reddy\n               Mekala\n</pre>\n\n<p>\n    &nbsp;&nbsp;&nbsp;&nbsp; Mallikarjuna\n     &nbsp;    Reddy\n                    Mekala\n               \n</p>"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/*!********************************************!*\
  !*** ./src/app/tables/tables.component.ts ***!
  \********************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.css */ "./src/app/tables/tables.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: whitesmoke;\r\n        margin-left: 40px;\r\n        min-width: 205vh;\r\n}\r\n.container1{\r\n    margin-top: 10px;\r\n    margin-left: 30px;\r\n}\r\nimg{\r\n    max-width: 20vh;\r\n     height: 50px;\r\n     font-family: Roboto,sans-serif; \r\n     margin-left: -15px;   \r\n }\r\n.blink{\r\n     -webkit-animation: blink 0.5s linear infinite;\r\n     animation: blink 0.5s linear infinite;\r\n }\r\n@-webkit-keyframes blink{\r\n     0%{opacity: 1;}\r\n     50%{opacity: 0;}\r\n     100%{opacity: 1;}\r\n }\r\n@keyframes blink{\r\n     0%{opacity: 1;}\r\n     50%{opacity: 0;}\r\n     100%{opacity: 1;}\r\n }\r\n.JP img{\r\n     max-width: 100vh;\r\n     height: 250px;\r\n     margin-top: 50px;    \r\n }\r\n.central img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;    \r\n }\r\n.booz img{\r\n     max-width: 100vh;\r\n     height: 60px;   \r\n    margin-top: 50px;    \r\n }\r\n.wipro img{\r\n     max-width: 100vh;\r\n     height: 60px;   \r\n     margin-top: 50px;    \r\n }\r\n.ups img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.infosys img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.deloit img{\r\n     max-width: 100vh;\r\n     height: 60px;  \r\n     margin-top: 50px;   \r\n }\r\n.row .register-form{\r\n   margin-top: 10px;\r\n   margin-left: 10px;\r\n }\r\n.inf{\r\n     font-weight: 700;\r\n }\r\n/* ----------------------------------- */\r\n.premium{\r\n     margin-top: 30px;\r\n     color: aliceblue;\r\n     background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/assets/pix.jpg\");\r\n     background-size: cover;\r\n     background-position: center;\r\n     display: flex;  \r\n     font-family: sans-serif;\r\n }\r\n.premium ul{\r\n     margin-top: 15px;\r\n }\r\n.register-form{\r\n   \r\n    margin-top: 20px;    \r\n}\r\n.nav-link{\r\n    font-size: 15px;\r\n    padding: 3px;\r\n   \r\n}\r\n/* -------------------------------- */\r\n.jobs-list-block {\r\n    background-color: #fff;\r\n    border: 1px solid #dcdcdc;\r\n    padding: 15px 0 14px 10px;\r\n    margin-bottom: 7px;\r\n    margin-left: -31px;\r\n}\r\n.heading-latest-block {\r\n    border-bottom: 1px solid #1e08e4;\r\n    padding-left: 1px;\r\n    \r\n}\r\n.heading-latest {\r\n    background-color: #5513f1;\r\n    padding: 15px 0 14px 10px;\r\n    width: 121px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    margin: 0;\r\n}\r\n.display-inline {\r\n    display: inline-block;   \r\n}\r\n.display-inline a{\r\n    margin: 5px;\r\n}\r\n.nav-link{\r\n    color: black;\r\n}\r\n.nav-link:hover{\r\n    color: #1e08e4;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7UUFDekIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtDQUN4QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksZ0JBQWdCO0tBQ2YsYUFBYTtLQUNiLCtCQUErQjtLQUMvQixtQkFBbUI7RUFDdEI7QUFDRDtLQUNJLDhDQUE4QztLQUU5QyxzQ0FBc0M7RUFDekM7QUFFRDtLQUNJLEdBQUcsV0FBVyxDQUFDO0tBQ2YsSUFBSSxXQUFXLENBQUM7S0FDaEIsS0FBSyxXQUFXLENBQUM7RUFDcEI7QUFNRDtLQUNJLEdBQUcsV0FBVyxDQUFDO0tBQ2YsSUFBSSxXQUFXLENBQUM7S0FDaEIsS0FBSyxXQUFXLENBQUM7RUFDcEI7QUFHRDtLQUNJLGlCQUFpQjtLQUNqQixjQUFjO0tBQ2QsaUJBQWlCO0VBQ3BCO0FBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsYUFBYTtLQUNiLGlCQUFpQjtFQUNwQjtBQUNEO0tBQ0ksaUJBQWlCO0tBQ2pCLGFBQWE7SUFDZCxpQkFBaUI7RUFDbkI7QUFDRDtLQUNJLGlCQUFpQjtLQUNqQixhQUFhO0tBQ2IsaUJBQWlCO0VBQ3BCO0FBQ0Q7S0FDSSxpQkFBaUI7S0FDakIsYUFBYTtLQUNiLGlCQUFpQjtFQUNwQjtBQUNEO0tBQ0ksaUJBQWlCO0tBQ2pCLGFBQWE7S0FDYixpQkFBaUI7RUFDcEI7QUFDRDtLQUNJLGlCQUFpQjtLQUNqQixhQUFhO0tBQ2IsaUJBQWlCO0VBQ3BCO0FBR0Q7R0FDRSxpQkFBaUI7R0FDakIsa0JBQWtCO0VBQ25CO0FBRUQ7S0FDSSxpQkFBaUI7RUFDcEI7QUFJRCx5Q0FBeUM7QUFFekM7S0FDSSxpQkFBaUI7S0FDakIsaUJBQWlCO0tBQ2pCLDBGQUEwRjtLQUMxRix1QkFBdUI7S0FDdkIsNEJBQTRCO0tBQzVCLGNBQWM7S0FDZCx3QkFBd0I7RUFDM0I7QUFDRDtLQUNJLGlCQUFpQjtFQUNwQjtBQUNEOztJQUVHLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7O0NBRWhCO0FBRUQsc0NBQXNDO0FBQ3RDO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjs7Q0FFckI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtDQUNiO0FBQ0M7SUFDRSxzQkFBc0I7Q0FDekI7QUFDQTtJQUNHLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjA1dmg7XHJcbn1cclxuLmNvbnRhaW5lcjF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMjB2aDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IFJvYm90byxzYW5zLXNlcmlmOyBcclxuICAgICBtYXJnaW4tbGVmdDogLTE1cHg7ICAgXHJcbiB9XHJcbiAuYmxpbmt7XHJcbiAgICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgIC1tb3otYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gfVxyXG4gXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbiB9XHJcbiBALW1vei1rZXlmcmFtZXMgYmxpbmt7XHJcbiAgICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgIDEwMCV7b3BhY2l0eTogMTt9XHJcbiB9XHJcbiBAa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgIDUwJXtvcGFjaXR5OiAwO31cclxuICAgICAxMDAle29wYWNpdHk6IDE7fVxyXG4gfVxyXG4gXHJcbiBcclxuIC5KUCBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG4gfVxyXG4gLmNlbnRyYWwgaW1ne1xyXG4gICAgIG1heC13aWR0aDogMTAwdmg7XHJcbiAgICAgaGVpZ2h0OiA2MHB4OyAgXHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgICAgXHJcbiB9XHJcbiAuYm9veiBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDYwcHg7ICAgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAgICBcclxuIH1cclxuIC53aXBybyBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDYwcHg7ICAgXHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgICAgXHJcbiB9XHJcbiAudXBzIGltZ3tcclxuICAgICBtYXgtd2lkdGg6IDEwMHZoO1xyXG4gICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgXHJcbiB9XHJcbiAuaW5mb3N5cyBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDYwcHg7ICBcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4OyAgIFxyXG4gfVxyXG4gLmRlbG9pdCBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOiAxMDB2aDtcclxuICAgICBoZWlnaHQ6IDYwcHg7ICBcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4OyAgIFxyXG4gfVxyXG4gXHJcbiBcclxuIC5yb3cgLnJlZ2lzdGVyLWZvcm17XHJcbiAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gfVxyXG5cclxuIC5pbmZ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuIH1cclxuIFxyXG5cclxuXHJcbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuIC5wcmVtaXVte1xyXG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjcpLHJnYmEoMCwwLDAsMC43KSksdXJsKFwiL2Fzc2V0cy9waXguanBnXCIpO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7ICBcclxuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuIH1cclxuIC5wcmVtaXVtIHVse1xyXG4gICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiB9XHJcbiAucmVnaXN0ZXItZm9ybXtcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgICBcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgIFxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uam9icy1saXN0LWJsb2NrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgcGFkZGluZzogMTVweCAwIDE0cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxufVxyXG5cclxuLmhlYWRpbmctbGF0ZXN0LWJsb2NrIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWUwOGU0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICBcclxufVxyXG4uaGVhZGluZy1sYXRlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MTNmMTtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAxNHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMTIxcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4gIC5kaXNwbGF5LWlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgXHJcbn1cclxuIC5kaXNwbGF5LWlubGluZSBhe1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0gXHJcbi5uYXYtbGlua3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzFlMDhlNDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n            <!---------------------------------------------------------------------------------------------------------->\r\n\r\n            <div class=\"container1\">\r\n\r\n                <div class=\"row\">\r\n                    <table>\r\n                        <tr>\r\n\r\n                            <span class=\"b\">\r\n\r\n                                <td><img src=\"assets/conan.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/fis.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/cgi.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/gen.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/syn.gif\" class=\"d-block w-100\"></td>\r\n\r\n                                <td><img src=\"assets/will.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/air.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/epa.gif\" class=\"d-block w-100\"></td>\r\n                                <td><img src=\"assets/dbs.gif\" class=\"d-block w-100\"></td>\r\n\r\n                            </span>\r\n\r\n                        </tr>\r\n                    </table>\r\n\r\n                </div>\r\n\r\n                <br>\r\n                <!-- ------------------------------ -->\r\n                <div class=\"content-left-side\">\r\n                    <div class=\"jobs-list-block\">\r\n                        <div class=\"col-md-12 col-xs-12 col-lg-12 padding-none heading-latest-block\">\r\n\r\n                            <h1 class=\"col-md-2 col-xs-2 col-lg-2 heading-latest display-inline\">Updated JOBS</h1>\r\n\r\n                            <div class=\"col-md-10 col-xs-10 col-lg-10 padding-none latest-sub-heading-text display-inline\"\r\n                                itemscope=\"\" itemtype=\"http://www.schema.org/SiteNavigationElement\">&nbsp;\r\n\r\n                                <div class=\"display-inline latest-all-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">All Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"display-inline latest-other-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">Software Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"display-inline latest-other-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">Govt Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"display-inline latest-other-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">Core Technical Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"display-inline latest-other-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">MBA Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"display-inline latest-other-jobs font-13\">\r\n                                    <a class=\"latest-other-jobs-head\" href=\"\" style=\"color: red\">Bank Jobs</a>\r\n                                </div>\r\n\r\n                                <span class=\"color-b9\">|</span>\r\n\r\n                                <div class=\"dropdown more-dropdown display-inline latest-other-jobs font-13\">\r\n                                    <a href=\"#\" data-toggle=\"dropdown\"\r\n                                        class=\"dropdown-toggle latest-other-jobs-head\" style=\"color: red\">More<b\r\n                                            class=\"caret more_caret\"></b></a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li itemprop=\"name\"><a href=\"\">Defence Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Research Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">BPO Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Walk-ins</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">BSc/BCA/BBM</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Teaching Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Diploma Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">1-3Yrs Exp</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Internships</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Scholarships</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Bank Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Tech Support</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Health Care</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Hospitality</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Part Time Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">Finance Jobs</a></li>\r\n                                        <li itemprop=\"name\"><a href=\"\">More Jobs</a></li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <!-- --------------------------------- -->\r\n                        <div class=\"row register-form\">\r\n\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                    <a class=\"nav-link\" href=\"#\">Innodata India Pvt. Ltd.</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Eureka Forbes</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Luminous Power Technologies</a>\r\n                                    <a class=\"nav-link\" href=\"#\">Miraj Group</a>\r\n                                    <a class=\"nav-link\" href=\"#\">RSPL Limited</a>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <!-- --------------------------------- -->\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <!------------------------------------------------------------------------------------------------------->\r\n\r\n            <div class=\"row1\">\r\n\r\n                <div class=\"premium\">\r\n                    <ul>\r\n                        <li>Priority Shortlisting & Assured Call Letters</li>\r\n                        <li>Take CEAT and show that you're ready for a corporate Job</li>\r\n                        <li>Premium Members can track Result status of all the Interviews</li>\r\n                    </ul>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n<!-- --------- Videos Selector Is here------------------------- -->\r\n<!-- <br>\r\n<app-videos2></app-videos2> -->\r\n\r\n <!-- ------------------------------------------------------------ -->\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n\r\n            <div class=\"container2\">\r\n\r\n                <span class=\"JP\">\r\n\r\n                    <img src=\"assets/jp.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n                <span class=\"central\">\r\n\r\n                    <img src=\"assets/cental.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n                <span class=\"booz\">\r\n\r\n                    <img src=\"assets/booz.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n                <span class=\"wipro\">\r\n\r\n                    <img src=\"assets/wipro1.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n                <span class=\"ups\">\r\n\r\n                    <img src=\"assets/ups.gif\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n                <span class=\"infosys\">\r\n\r\n                    <img src=\"assets/infjob.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n                <span class=\"deloit\">\r\n\r\n                    <img src=\"assets/deljob.jpg\" class=\"d-block w-100\">\r\n\r\n                </span>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/test1/test1.component.css":
/*!*******************************************!*\
  !*** ./src/app/test1/test1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-side-menu {\r\n    overflow: auto;\r\n    font-family: verdana;\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n    background-color: #2e353d;\r\n    position: fixed;\r\n    top: 0px;\r\n    width: 300px;\r\n    height: 100%;\r\n    color: #e1ffff;\r\n  }\r\n  .nav-side-menu .brand {\r\n    background-color: #23282e;\r\n    line-height: 50px;\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n  .nav-side-menu .toggle-btn {\r\n    display: none;\r\n  }\r\n  .nav-side-menu ul,\r\n  .nav-side-menu li {\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    line-height: 35px;\r\n    cursor: pointer;\r\n   \r\n  }\r\n  .nav-side-menu ul :not(collapsed) .arrow:before,\r\n  .nav-side-menu li :not(collapsed) .arrow:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f078\";\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n    /* float: right; */\r\n  }\r\n  .nav-side-menu ul .active,\r\n  .nav-side-menu li .active {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n  }\r\n  .nav-side-menu ul .sub-menu li.active,\r\n  .nav-side-menu li .sub-menu li.active {\r\n    color: #d19b3d;\r\n  }\r\n  .nav-side-menu ul .sub-menu li.active a,\r\n  .nav-side-menu li .sub-menu li.active a {\r\n    color: #d19b3d;\r\n  }\r\n  .nav-side-menu ul .sub-menu li,\r\n  .nav-side-menu li .sub-menu li {\r\n    background-color: #181c20;\r\n    border: none;\r\n    line-height: 28px;\r\n    border-bottom: 1px solid #23282e;\r\n    margin-left: 0px;\r\n  }\r\n  .nav-side-menu ul .sub-menu li:hover,\r\n  .nav-side-menu li .sub-menu li:hover {\r\n    background-color: #020203;\r\n  }\r\n  .nav-side-menu ul .sub-menu li:before,\r\n  .nav-side-menu li .sub-menu li:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    vertical-align: middle;\r\n  }\r\n  .nav-side-menu li {\r\n    padding-left: 0px;\r\n    border-left: 3px solid #2e353d;\r\n    border-bottom: 1px solid #23282e;\r\n  }\r\n  .nav-side-menu li a {\r\n    text-decoration: none;\r\n    color: #e1ffff;\r\n  }\r\n  .nav-side-menu li a i {\r\n    padding-left: 10px;\r\n    width: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  .nav-side-menu li:hover {\r\n    border-left: 3px solid #d19b3d;\r\n    background-color: #4f5b69;\r\n    transition: all 1s ease;\r\n  }\r\n  @media (max-width: 767px) {\r\n    .nav-side-menu {\r\n      position: relative;\r\n      width: 100%;\r\n      margin-bottom: 10px;\r\n    }\r\n    .nav-side-menu .toggle-btn {\r\n      display: block;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      right: 10px;\r\n      top: 10px;\r\n      z-index: 10 !important;\r\n      padding: 3px;\r\n      background-color: #ffffff;\r\n      color: #000;\r\n      width: 40px;\r\n      text-align: center;\r\n    }\r\n    .brand {\r\n      text-align: left !important;\r\n      font-size: 22px;\r\n      padding-left: 20px;\r\n      line-height: 50px !important;\r\n    }\r\n  }\r\n  @media (min-width: 767px) {\r\n    .nav-side-menu .menu-list .menu-content {\r\n      display: block;\r\n    }\r\n  }\r\n  body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdDEvdGVzdDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7R0FDaEI7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGNBQWM7R0FDZjtFQUNEOztJQUVFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0dBRWpCO0VBQ0Q7O0lBRUUseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0VBQ0Q7O0lBRUUsK0JBQStCO0lBQy9CLDBCQUEwQjtHQUMzQjtFQUNEOztJQUVFLGVBQWU7R0FDaEI7RUFDRDs7SUFFRSxlQUFlO0dBQ2hCO0VBQ0Q7O0lBRUUsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtHQUNsQjtFQUNEOztJQUVFLDBCQUEwQjtHQUMzQjtFQUNEOztJQUVFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGlDQUFpQztHQUNsQztFQUNEO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7R0FDaEI7RUFDRDtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBSzFCLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLG9CQUFvQjtLQUNyQjtJQUNEO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsYUFBYTtNQUNiLDBCQUEwQjtNQUMxQixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtLQUNwQjtJQUNEO01BQ0UsNEJBQTRCO01BQzVCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsNkJBQTZCO0tBQzlCO0dBQ0Y7RUFDRDtJQUNFO01BQ0UsZUFBZTtLQUNoQjtHQUNGO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvdGVzdDEvdGVzdDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc2lkZS1tZW51IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzUzZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNlMWZmZmY7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IC5icmFuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyODJlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm5hdi1zaWRlLW1lbnUgLnRvZ2dsZS1idG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm5hdi1zaWRlLW1lbnUgdWwsXHJcbiAgLm5hdi1zaWRlLW1lbnUgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIFxyXG4gIH1cclxuICAubmF2LXNpZGUtbWVudSB1bCA6bm90KGNvbGxhcHNlZCkgLmFycm93OmJlZm9yZSxcclxuICAubmF2LXNpZGUtbWVudSBsaSA6bm90KGNvbGxhcHNlZCkgLmFycm93OmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IHVsIC5hY3RpdmUsXHJcbiAgLm5hdi1zaWRlLW1lbnUgbGkgLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNkMTliM2Q7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1YjY5O1xyXG4gIH1cclxuICAubmF2LXNpZGUtbWVudSB1bCAuc3ViLW1lbnUgbGkuYWN0aXZlLFxyXG4gIC5uYXYtc2lkZS1tZW51IGxpIC5zdWItbWVudSBsaS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNkMTliM2Q7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IHVsIC5zdWItbWVudSBsaS5hY3RpdmUgYSxcclxuICAubmF2LXNpZGUtbWVudSBsaSAuc3ViLW1lbnUgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICNkMTliM2Q7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IHVsIC5zdWItbWVudSBsaSxcclxuICAubmF2LXNpZGUtbWVudSBsaSAuc3ViLW1lbnUgbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWMyMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMzI4MmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAubmF2LXNpZGUtbWVudSB1bCAuc3ViLW1lbnUgbGk6aG92ZXIsXHJcbiAgLm5hdi1zaWRlLW1lbnUgbGkgLnN1Yi1tZW51IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAyMDM7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IHVsIC5zdWItbWVudSBsaTpiZWZvcmUsXHJcbiAgLm5hdi1zaWRlLW1lbnUgbGkgLnN1Yi1tZW51IGxpOmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IGxpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMmUzNTNkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMzI4MmU7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNlMWZmZmY7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IGxpIGEgaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5uYXYtc2lkZS1tZW51IGxpOmhvdmVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2QxOWIzZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjViNjk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm5hdi1zaWRlLW1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi1zaWRlLW1lbnUgLnRvZ2dsZS1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgIC5uYXYtc2lkZS1tZW51IC5tZW51LWxpc3QgLm1lbnUtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/test1/test1.component.html":
/*!********************************************!*\
  !*** ./src/app/test1/test1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Brand Logo</div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n  \r\n        <div class=\"menu-list\">\r\n  \r\n            <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n                <li>\r\n                  <a href=\"\">\r\n                  <i class=\"fa fa-dashboard fa-lg\"></i> Dashboard\r\n                  </a>\r\n                </li>\r\n\r\n                <li  data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active\">\r\n                  <a><i class=\"fa fa-gift fa-lg\"></i> UI Elements <span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"products\">\r\n                    <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\r\n                    <li><a routerLink=\"/sample1\">General</a></li>\r\n                    <li><a href=\"\">Buttons</a></li>\r\n                    <li><a href=\"\">Tabs & Accordions</a></li>\r\n                    <li><a href=\"\">Typography</a></li>\r\n                    <li><a href=\"\">FontAwesome</a></li>\r\n                    <li><a href=\"\">Slider</a></li>\r\n                    <li><a href=\"\">Panels</a></li>\r\n                    <li><a href=\"\">Widgets</a></li>\r\n                    <li><a href=\"\">Bootstrap Model</a></li>\r\n                </ul>\r\n\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n                  <a><i class=\"fa fa-globe fa-lg\"></i> Services <span class=\"arrow\"></span></a>\r\n                </li>  \r\n                <ul class=\"sub-menu collapse\" id=\"service\">\r\n                  <li>New Service 1</li>\r\n                  <li>New Service 2</li>\r\n                  <li>New Service 3</li>\r\n                </ul>\r\n\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\r\n                  <a><i class=\"fa fa-car fa-lg\"></i> New <span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"new\">\r\n                  <li>New New 1</li>\r\n                  <li>New New 2</li>\r\n                  <li>New New 3</li>\r\n                </ul>\r\n\r\n\r\n                 <li>\r\n                  <a>\r\n                  <i class=\"fa fa-user fa-lg\"></i> Profile\r\n                  </a>\r\n                  </li>\r\n\r\n                 <li>\r\n                  <a>\r\n                  <i class=\"fa fa-users fa-lg\"></i> Users\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n     </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/test1/test1.component.ts":
/*!******************************************!*\
  !*** ./src/app/test1/test1.component.ts ***!
  \******************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Test1Component = /** @class */ (function () {
    function Test1Component(config) {
        config.justify = 'center';
        config.type = 'pills';
    }
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/test1/test1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabsetConfig"]])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/testimonails/testimonails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---------Testimonials------------*/\r\n.container{\r\n   /* background: #3ab1cf; */\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 25px;  \r\n    min-width: 210vh;\r\n    background-color: whitesmoke;\r\n    \r\n}\r\n#testimonials{\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    \r\n}\r\n.container h1{\r\n    text-align: center;\r\n}\r\n#testimonials .row{\r\n    margin-top: 30px;\r\n}\r\ncol-md-4{\r\n    margin: 40px auto;\r\n}\r\n.profile{\r\n    padding: 70px 10px 10px;\r\n    background-color: lavender;\r\n}\r\n.user{\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}\r\n.profile img{\r\n    top: -60px;\r\n    position: absolute;\r\n    border: 10px solid rgb(255, 255, 255);\r\n    left: calc(50% - 60px)\r\n   \r\n}\r\n.profile h3{\r\n    font-size: 20px;\r\n    margin-top: 15px;\r\n    color: #007bff;\r\n}\r\n#testimonials span{\r\n    font-size: 12px;\r\n    color: #333;\r\n}\r\nblockquote{\r\n     font-size: 16px;\r\n     line-height: 30px;\r\n }\r\nblockquote::before{\r\n     content: '\\93';\r\n     font-size: 50px;\r\n     color: #007bff;\r\n     position: relative;\r\n     line-height: 20px;\r\n     bottom: -15px;\r\n     right: 5px;\r\n }\r\nblockquote::after{\r\n    content: '\\94';\r\n    font-size: 50px;\r\n    color: #007bff;\r\n    position: relative;\r\n    line-height: 10px;\r\n    bottom: -15px;\r\n    left: 5px;\r\n}\r\n.profile:hover{\r\n    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.2);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n/*--------------------------------------------------------------------------------------\r\n\r\nimg{\r\n    width: 100px;\r\n    height: 90px;\r\n}\r\n.blink{\r\n    -webkit-animation: blink 0.5s linear infinite;\r\n    -moz-animation: blink 0.5s linear infinite;\r\n    animation: blink 0.5s linear infinite;\r\n\r\n}\r\n@-webkit-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@-moz-keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n@keyframes blink{\r\n    0%{opacity: 1;}\r\n    50%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n.carousel-caption{\r\n    top: 30%;\r\n    transform: translateY(-50%);\r\n    bottom: initial !important;\r\n    background: rgba(11, 127, 221, 0.4);\r\n   \r\n   \r\n   \r\n    position: absolute !important;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n.carousel-item{\r\npadding: 5px;\r\n}\r\n\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n}\r\n----------------------------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25haWxzL3Rlc3RpbW9uYWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQztHQUNHLDBCQUEwQjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCOztDQUVoQztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjs7Q0FFeEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxzQkFBc0I7O0NBRXpCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFDQTtLQUNJLGdCQUFnQjtLQUNoQixrQkFBa0I7RUFDckI7QUFDRDtLQUNJLGVBQWU7S0FDZixnQkFBZ0I7S0FDaEIsZUFBZTtLQUNmLG1CQUFtQjtLQUNuQixrQkFBa0I7S0FDbEIsY0FBYztLQUNkLFdBQVc7RUFDZDtBQUNEO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtDQUNiO0FBQ0Q7SUFDSSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFrRHNEIiwiZmlsZSI6InNyYy9hcHAvdGVzdGltb25haWxzL3Rlc3RpbW9uYWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS1UZXN0aW1vbmlhbHMtLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVye1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjM2FiMWNmOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDsgIFxyXG4gICAgbWluLXdpZHRoOiAyMTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBcclxufVxyXG4jdGVzdGltb25pYWxze1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIFxyXG59XHJcbi5jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3Rlc3RpbW9uaWFscyAucm93e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5jb2wtbWQtNHtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG59XHJcbi5wcm9maWxle1xyXG4gICAgcGFkZGluZzogNzBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcclxufVxyXG4udXNlcntcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnByb2ZpbGUgaW1ne1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpXHJcbiAgIFxyXG59XHJcbi5wcm9maWxlIGgze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcbiN0ZXN0aW1vbmlhbHMgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbiBibG9ja3F1b3Rle1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuIH1cclxuIGJsb2NrcXVvdGU6OmJlZm9yZXtcclxuICAgICBjb250ZW50OiAnXFw5Myc7XHJcbiAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICBib3R0b206IC0xNXB4O1xyXG4gICAgIHJpZ2h0OiA1cHg7XHJcbiB9XHJcbiBibG9ja3F1b3RlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdcXDk0JztcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG59XHJcbi5wcm9maWxlOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLmJsaW5re1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJsaW5rIDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBibGlua3tcclxuICAgIDAle29wYWNpdHk6IDE7fVxyXG4gICAgNTAle29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgMCV7b3BhY2l0eTogMTt9XHJcbiAgICA1MCV7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm90dG9tOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAxMjcsIDIyMSwgMC40KTtcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuLmNhcm91c2VsLWl0ZW17XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIl19 */"

/***/ }),

/***/ "./src/app/testimonails/testimonails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!----------Testimonials---------->\n<div class=\"container\">\n <section id=\"testimonials\">\n  \n      <h1> Testimonials </h1>\n      <p class=\"text-center\"> DEDICATED DEVELOPMENT TEAM Hire top tech talent and quickly scale your delivery capacity.</p>\n      <br>\n        <div class=\"row\">\n            <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/sai.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Saikumar  <span>CEO/Foundaer</span></h3>     \n                </div>\n             </div>\n             <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/sa.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Shalini Reddy <span>Manager</span></h3>     \n                </div>\n             </div>\n             <div class=\"col-md-2 text-center\">\n                <div class=\"profile\">\n                  <img src=\"/assets/ramya.jpg\" class=\"user\">\n                  <blockquote>\n                   Ask ur question in comment\n                  </blockquote>\n             <h3> Ramya Reddy <span>Project Lead</span></h3>     \n                </div>\n             </div>\n        \n          <!-------------------------------------------->\n          <div class=\"col-md-2 text-center\">\n             <div class=\"profile\">\n               <img src=\"/assets/c.jpg\" class=\"user\">\n               <blockquote>\n                Ask ur question in comment\n               </blockquote>\n          <h3> Chandra Leka <span>Team Lead</span></h3>     \n             </div>\n          </div>\n         <div class=\"col-md-2 text-center\">\n             <div class=\"profile\">\n               <img src=\"/assets/sm.jpg\" class=\"user\">\n               <blockquote>\n                 Ask ur question in comment\n               </blockquote>\n          <h3> Arjun Reddy <br><span>UI Developer</span></h3>     \n             </div>\n          </div>\n          <div class=\"col-md-2 text-center\">\n            <div class=\"profile\">\n              <img src=\"/assets/t.jpg\" class=\"user\">\n              <blockquote>\n               Ask ur question in comment\n              </blockquote>\n         <h3> Sunandha <br> <span>Java Developer</span></h3>     \n            </div>\n         </div>\n         \n        </div>\n    \n</section>\n\n</div>\n\n\n<!-------------------------------------------------------------------------------------\n\n\n\n<div class=\"container\">\n\n   <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n           <div class=\"carousel-inner\">\n\n\n\n\n<table>\n<tr>\n<span class=\"blink\">\n<td>\n       <div class=\"carousel-item active\">\n    <img src=\"assets/bha.png\" class=\"d-block w-100\"> \n       </div> \n   \n</td> \n\n\n<td>\n       <div class=\"carousel-item active\">\n    <img src=\"assets/info.jpg\" class=\"d-block w-100\">\n    </div>\n</td>\n\n\n <td>\n       <div class=\"carousel-item active\">\n     <img src=\"assets/lti.png\" class=\"d-block w-100\">\n   </div>\n   </td>\n\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/meg.jpg\" class=\"d-block w-100\">\n      </div>\n</td>\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/ora.png\" class=\"d-block w-100\">\n       </div>\n</td>\n\n <td>\n       <div class=\"carousel-item active\">\n   <img src=\"assets/vir.png\" class=\"d-block w-100\">\n        </div>\n</td>\n</span>\n</tr>\n</table> \n\n\n\n</div>\n\n\n\n<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n       <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n       <span class=\"sr-only\">Previous</span>\n     </a>\n     <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n       <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n       <span class=\"sr-only\">Next</span>\n     </a>\n\n\n       </div>\n\n\n\n</div>\n\n-------------------->\n<!----------------------------------------------------------------------------------------------\n\n\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n   <div class=\"carousel-inner\">\n\n      <div class=\"container\">\n\n     <div class=\"carousel-item active\" style=\"color:blue\">\n   \n       <img src=\"assets/bha.png\">\n       <img src=\"assets/info.jpg\">\n       <img src=\"assets/lti.png\">\n       <img src=\"assets/meg.jpg\">\n       <img src=\"assets/ora.png\">\n       <img src=\"assets/vir.png\">\n       <img src=\"assets/inf.png\">\n       <img src=\"assets/wip.png\">\n       <img src=\"assets/tcs.jpg\">\n      \n    <b>  Mekala Mallikarjuna Reddy Reddy Palem PedakodamaGundala Karampudi Mandal Palnadu Area Guntur District\n      AndhraPradesh</b>\n      \n     </div>\n\n\n     <div class=\"carousel-item\" style=\"color:green\">\n<i>\nChandhraleka Thinakaran Hosur Village Krishna Giri District Tamilnadu State Pet Name Aandalu From Athibelli\n</i>\n   \n        <img src=\"assets/bha.png\">\n        <img src=\"assets/info.jpg\">\n        <img src=\"assets/cog.png\">\n        <img src=\"assets/cgi.png\">\n        <img src=\"assets/cog.png\">\n        <img src=\"assets/hcl.jpg\">\n        <img src=\"assets/hp.png\">\n        <img src=\"assets/wip.png\">\n        <img src=\"assets/vir.png\">\n       \n     </div>\n    \n   \n    </div>\n   </div>\n\n\n   <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n     <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Previous</span>\n   </a>\n   <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n     <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n     <span class=\"sr-only\">Next</span>\n   </a>\n  \n   \n </div>\n\n--------------------------------------------------->\n\n\n \n \n \n"

/***/ }),

/***/ "./src/app/testimonails/testimonails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonails/testimonails.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonailsComponent", function() { return TestimonailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonailsComponent = /** @class */ (function () {
    function TestimonailsComponent() {
    }
    TestimonailsComponent.prototype.ngOnInit = function () {
    };
    TestimonailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonails',
            template: __webpack_require__(/*! ./testimonails.component.html */ "./src/app/testimonails/testimonails.component.html"),
            styles: [__webpack_require__(/*! ./testimonails.component.css */ "./src/app/testimonails/testimonails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonailsComponent);
    return TestimonailsComponent;
}());



/***/ }),

/***/ "./src/app/trail/trail.component.css":
/*!*******************************************!*\
  !*** ./src/app/trail/trail.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen {\r\n  .dropdown:hover .dropdown-menu {\r\n    display: block;\r\n  }\r\n}\r\n.dropdown-menu{\r\n  max-width: 182px;\r\n}\r\n.navbar-brand img{\r\n   \r\n  height: 50px;\r\n  padding-left: 30px;\r\n  border-radius: 100%;\r\n\r\n}\r\n#ma i{\r\n  width: 26px;\r\n  float: left;\r\n  text-align: center;\r\n  margin-bottom: -35px;\r\n  margin-top: 8px;\r\n  color:blue;\r\n}\r\n/*--------------------------------------------\r\nheader .gnb{\r\n  height:90px;\r\n  width:990px;\r\n  margin:auto\r\n  ;color:#707070;\r\n  padding-top:34px\r\n}\r\n\r\nheader .banner .nLogo img{\r\n  border-radius: 50%;\r\n    height: 50px;\r\n    margin-top: 4px;\r\n    margin-left: -1200px;\r\n}\r\nheader .gnb p{\r\n  float:right;\r\n  width:auto;\r\n  max-width:400px;\r\n  word-break:break-all\r\n}\r\nheader .banner{\r\n  background:rgb(10, 174, 224);height:60px;color:#fff;text-align:center\r\n}\r\nheader .banner .title{\r\n  font-size:16px\r\n}\r\n\r\nheader{\r\n  margin-bottom:20px\r\n}\r\nheader .banner .title{\r\n margin-top: -34px;\r\n}\r\n\r\n\r\nfooter{\r\n  text-align:center;\r\n  font-size:12px;\r\n  margin-bottom:30px;\r\n  margin-top:65px}\r\nfooter a{\r\n  color:#27A7D4;\r\n  display:inline-block;\r\n  font-size:12px;\r\n  line-height:1\r\n  ;padding:0 10px;\r\n  border-left:solid 1px #A7A7A7\r\n}\r\nfooter a:hover{\r\n  color:#0F89B2\r\n}\r\nfooter a:first-child{\r\n  border-left:none\r\n}\r\nfooter p{\r\n  color:#A7A7A7;\r\n  margin-top:5px\r\n}\r\nbody{\r\n  font-family:Roboto,sans-serif;\r\n  font-size:15px;\r\n  font-weight:100;\r\n  background-color:rgb(190, 221, 220)\r\n}\r\n.container{\r\n  width:990px;\r\n  margin:0 auto;\r\n  text-align:center;\r\n  color:#707070\r\n}\r\n.container .box{\r\n  display:inline-block;\r\n  width:304px;\r\n  padding:50px;\r\n  text-align:center\r\n}\r\n.container .box .icon{\r\n  font-family:ResmanFont;\r\n  margin:auto auto 25px;\r\n  cursor:pointer;\r\n  color:rgb(39, 212, 117);\r\n  display:inline-block;\r\n  overflow:hidden;\r\n  vertical-align:bottom\r\n}\r\n.container .box .icon.fresher{\r\n  font-size:130px;\r\n  width:120px;\r\n  line-height:130px\r\n}\r\n.container .box .icon.experience{\r\n  font-size:130px;\r\n  width:120px;\r\n  line-height:130px\r\n}\r\n.container .box .action-btn{\r\n  color:#FFF;\r\n  background-color: rgb(10, 174, 224);\r\n  border:none;display:inline-block;\r\n  font-size:16px;\r\n  font-weight:400;\r\n  line-height:1.42857143;\r\n  text-align:center;\r\n  vertical-align:middle;\r\n  cursor:pointer;\r\n  overflow:hidden;\r\n  outline:0;\r\n  padding:15px;\r\n  width:100%\r\n}\r\n.container .box .action-btn:active{\r\n  -moz-animation-name:push;\r\n  animation-name:push;\r\n  -moz-animation-duration:.3s;\r\n  animation-duration:.3s;\r\n  -moz-animation-timing-function:linear;\r\n  animation-timing-function:linear;\r\n  -moz-animation-iteration-count:1;\r\n  animation-iteration-count:1\r\n}\r\n.container .box .description{\r\n  padding-top:10px;\r\n}\r\n.container .box .expCont:hover .icon,.container .box .fresherCont:hover .icon{\r\n  color:rgb(13, 213, 240);\r\n}\r\n.container .job-text{\r\n  width:435px;\r\n  margin:auto;\r\n}\r\n.container .info-text .numbers{\r\n  font-size:17px;\r\n}\r\n.container .info-text .numbers i{\r\n  border-right:1px solid #707070;\r\n  margin:0 15px;\r\n}\r\n.container .info-text .head{\r\n  margin-top:25px;\r\n  font-weight:400;\r\n}\r\n.container .info-text ul{\r\n  list-style:none;\r\n  display:inline-block;\r\n}\r\n.container .info-text ul li{\r\n  text-align:left;\r\n  padding:4px 0;\r\n}\r\n\r\n-----------------------------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaWwvdHJhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBZTtHQUNoQjtDQUNGO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFHRDs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjs7Q0FFckI7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztDQUNaO0FBWUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBdUppRCIsImZpbGUiOiJzcmMvYXBwL3RyYWlsL3RyYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4ge1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgbWF4LXdpZHRoOiAxODJweDtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICBcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblxyXG59XHJcbiNtYSBpe1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAtMzVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaGVhZGVyIC5nbmJ7XHJcbiAgaGVpZ2h0OjkwcHg7XHJcbiAgd2lkdGg6OTkwcHg7XHJcbiAgbWFyZ2luOmF1dG9cclxuICA7Y29sb3I6IzcwNzA3MDtcclxuICBwYWRkaW5nLXRvcDozNHB4XHJcbn1cclxuXHJcbmhlYWRlciAuYmFubmVyIC5uTG9nbyBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAwcHg7XHJcbn1cclxuaGVhZGVyIC5nbmIgcHtcclxuICBmbG9hdDpyaWdodDtcclxuICB3aWR0aDphdXRvO1xyXG4gIG1heC13aWR0aDo0MDBweDtcclxuICB3b3JkLWJyZWFrOmJyZWFrLWFsbFxyXG59XHJcbmhlYWRlciAuYmFubmVye1xyXG4gIGJhY2tncm91bmQ6cmdiKDEwLCAxNzQsIDIyNCk7aGVpZ2h0OjYwcHg7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbmhlYWRlciAuYmFubmVyIC50aXRsZXtcclxuICBmb250LXNpemU6MTZweFxyXG59XHJcblxyXG5oZWFkZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4XHJcbn1cclxuaGVhZGVyIC5iYW5uZXIgLnRpdGxle1xyXG4gbWFyZ2luLXRvcDogLTM0cHg7XHJcbn1cclxuXHJcblxyXG5mb290ZXJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gIG1hcmdpbi10b3A6NjVweH1cclxuZm9vdGVyIGF7XHJcbiAgY29sb3I6IzI3QTdENDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6MTJweDtcclxuICBsaW5lLWhlaWdodDoxXHJcbiAgO3BhZGRpbmc6MCAxMHB4O1xyXG4gIGJvcmRlci1sZWZ0OnNvbGlkIDFweCAjQTdBN0E3XHJcbn1cclxuZm9vdGVyIGE6aG92ZXJ7XHJcbiAgY29sb3I6IzBGODlCMlxyXG59XHJcbmZvb3RlciBhOmZpcnN0LWNoaWxke1xyXG4gIGJvcmRlci1sZWZ0Om5vbmVcclxufVxyXG5mb290ZXIgcHtcclxuICBjb2xvcjojQTdBN0E3O1xyXG4gIG1hcmdpbi10b3A6NXB4XHJcbn1cclxuYm9keXtcclxuICBmb250LWZhbWlseTpSb2JvdG8sc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6MTVweDtcclxuICBmb250LXdlaWdodDoxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTkwLCAyMjEsIDIyMClcclxufVxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOjk5MHB4O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6IzcwNzA3MFxyXG59XHJcbi5jb250YWluZXIgLmJveHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDozMDRweDtcclxuICBwYWRkaW5nOjUwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmljb257XHJcbiAgZm9udC1mYW1pbHk6UmVzbWFuRm9udDtcclxuICBtYXJnaW46YXV0byBhdXRvIDI1cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgY29sb3I6cmdiKDM5LCAyMTIsIDExNyk7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHZlcnRpY2FsLWFsaWduOmJvdHRvbVxyXG59XHJcbi5jb250YWluZXIgLmJveCAuaWNvbi5mcmVzaGVye1xyXG4gIGZvbnQtc2l6ZToxMzBweDtcclxuICB3aWR0aDoxMjBweDtcclxuICBsaW5lLWhlaWdodDoxMzBweFxyXG59XHJcbi5jb250YWluZXIgLmJveCAuaWNvbi5leHBlcmllbmNle1xyXG4gIGZvbnQtc2l6ZToxMzBweDtcclxuICB3aWR0aDoxMjBweDtcclxuICBsaW5lLWhlaWdodDoxMzBweFxyXG59XHJcbi5jb250YWluZXIgLmJveCAuYWN0aW9uLWJ0bntcclxuICBjb2xvcjojRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTc0LCAyMjQpO1xyXG4gIGJvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICBsaW5lLWhlaWdodDoxLjQyODU3MTQzO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgb3V0bGluZTowO1xyXG4gIHBhZGRpbmc6MTVweDtcclxuICB3aWR0aDoxMDAlXHJcbn1cclxuLmNvbnRhaW5lciAuYm94IC5hY3Rpb24tYnRuOmFjdGl2ZXtcclxuICAtbW96LWFuaW1hdGlvbi1uYW1lOnB1c2g7XHJcbiAgYW5pbWF0aW9uLW5hbWU6cHVzaDtcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjouM3M7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOi4zcztcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MVxyXG59XHJcbi5jb250YWluZXIgLmJveCAuZGVzY3JpcHRpb257XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uY29udGFpbmVyIC5ib3ggLmV4cENvbnQ6aG92ZXIgLmljb24sLmNvbnRhaW5lciAuYm94IC5mcmVzaGVyQ29udDpob3ZlciAuaWNvbntcclxuICBjb2xvcjpyZ2IoMTMsIDIxMywgMjQwKTtcclxufVxyXG4uY29udGFpbmVyIC5qb2ItdGV4dHtcclxuICB3aWR0aDo0MzVweDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4uY29udGFpbmVyIC5pbmZvLXRleHQgLm51bWJlcnN7XHJcbiAgZm9udC1zaXplOjE3cHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IC5udW1iZXJzIGl7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjNzA3MDcwO1xyXG4gIG1hcmdpbjowIDE1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IC5oZWFke1xyXG4gIG1hcmdpbi10b3A6MjVweDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mby10ZXh0IHVse1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4uY29udGFpbmVyIC5pbmZvLXRleHQgdWwgbGl7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHBhZGRpbmc6NHB4IDA7XHJcbn1cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8iXX0= */"

/***/ }),

/***/ "./src/app/trail/trail.component.html":
/*!********************************************!*\
  !*** ./src/app/trail/trail.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink=\"/main\"><img src=\"/assets/logoo.png\"></a>\r\n\r\n    </div>\r\n\r\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\r\n\r\n      <li *ngIf=\"!isLoggedIn\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/auth/login\" href=\"#\"><b>Login</b></a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\r\n\r\n      <div class=\"btn-group mr-3\" *ngIf=\"isLoggedIn\">\r\n        <!--------------------------------------------------\r\n      <button type=\"button\" class=\"btn btn-primary\"><b>Welcome</b></button>\r\n      <button routerLink='/candidate' class=\"dropdown-item\">Profile</button>\r\n\r\n     <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home1\"><b>Logout</b></a></li>\r\n-------------->\r\n\r\n\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n          <button class=\"btn btn-primary\" type=\"button\" id=\"dropdownMenuButton\">\r\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n            Arjun Reddy</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\" id=\"ma\">\r\n              <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n            <button routerLink='/candidate' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\">Profile</button>\r\n            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\r\n            <button routerLink='/accountsettings' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\">Account Settings</button>\r\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n            <button routerLink='/home1' class=\"dropdown-item\" style=\"color:rgb(14, 214, 14)\" >Logout</button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/trail/trail.component.ts":
/*!******************************************!*\
  !*** ./src/app/trail/trail.component.ts ***!
  \******************************************/
/*! exports provided: TrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailComponent", function() { return TrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TrailComponent = /** @class */ (function () {
    function TrailComponent(tokenStorage, authService) {
        this.tokenStorage = tokenStorage;
        this.authService = authService;
        this.isLoggedIn = false;
    }
    TrailComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.tokenStorage.getToken(),
            username: this.tokenStorage.getUsername(),
        };
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
    };
    TrailComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        window.location.reload();
    };
    TrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trail',
            template: __webpack_require__(/*! ./trail.component.html */ "./src/app/trail/trail.component.html"),
            styles: [__webpack_require__(/*! ./trail.component.css */ "./src/app/trail/trail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TrailComponent);
    return TrailComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.css":
/*!*********************************************!*\
  !*** ./src/app/videos/videos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: whitesmoke;\r\n     margin-left: 25px;\r\n     min-width: 210vh;\r\n}  \r\n #videos{   \r\n     padding-top: 20px;\r\n     padding-bottom: 10px;\r\n     margin-left: 450px;\r\n    color: blue;\r\n  }  \r\n .embed-responsive-item{\r\n    padding-bottom: 40px;\r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0tBQzVCLGtCQUFrQjtLQUNsQixpQkFBaUI7Q0FDckI7Q0FDQTtLQUNJLGtCQUFrQjtLQUNsQixxQkFBcUI7S0FDckIsbUJBQW1CO0lBQ3BCLFlBQVk7R0FDYjtDQUNEO0lBQ0UscUJBQXFCO0dBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgbWluLXdpZHRoOiAyMTB2aDtcclxufSAgXHJcbiAjdmlkZW9zeyAgIFxyXG4gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAuZW1iZWQtcmVzcG9uc2l2ZS1pdGVte1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfSAgIl19 */"

/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n <div class=\"form-group\">\n    <h4 id=\"videos\">Sahiudhyogh Related Videos</h4>\n  \n  </div> \n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-4\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n  \n        </iframe>\n  \n      </div>\n  \n    </div>\n  \n    <!-- <div class=\"col-sm-4\">\n      <video controls=\"controls\" autoplay=\"autoplay\" width=\"100%\">\n        <source src=\"/assets/chandhra.mp4\" type=\"video/mp4\">\n       <source src=\"/assets/sunanda.mp4\" type=\"video/mp4\"> \n      </video>\n  \n      </div> -->\n  \n      <div class=\"col-md-4\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n      \n            </iframe>\n      \n          </div>\n      \n        </div>\n  \n  \n        <div class=\"col-md-4\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n        \n              </iframe>\n        \n            </div>\n        \n          </div>\n  \n        </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/videos/videos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/videos2/videos2.component.css":
/*!***********************************************!*\
  !*** ./src/app/videos2/videos2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#videos{   \r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n   margin-left: 300px;\r\n   color: blue;\r\n }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zMi92aWRlb3MyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCLG1CQUFtQjtHQUNuQixZQUFZO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC92aWRlb3MyL3ZpZGVvczIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWRlb3N7ICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgIGNvbG9yOiBibHVlO1xyXG4gfSAgIl19 */"

/***/ }),

/***/ "./src/app/videos2/videos2.component.html":
/*!************************************************!*\
  !*** ./src/app/videos2/videos2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"form-group\">\n      <h4 id=\"videos\">Sahiudhyogh Related Videos</h4>      \n    </div>   \n\n<div class=\"row\">\n<div class=\"col-md-4\">\n  <div class=\"embed-responsive embed-responsive-16by9\">\n    <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n\n    </iframe>\n\n  </div>\n\n</div>\n\n<!-- <div class=\"col-sm-4\">\n  <video controls=\"controls\" autoplay=\"autoplay\" width=\"100%\">\n    <source src=\"/assets/chandhra.mp4\" type=\"video/mp4\">\n   <source src=\"/assets/sunanda.mp4\" type=\"video/mp4\"> \n  </video>\n\n  </div> -->\n\n  <div class=\"col-md-4\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n  \n        </iframe>\n  \n      </div>\n  \n    </div>\n\n\n    <div class=\"col-md-4\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe allowfullscreen src=\"/assets/MMREDDY.mp4\" class=\"embed-responsive-item\">\n    \n          </iframe>\n    \n        </div>\n    \n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/videos2/videos2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/videos2/videos2.component.ts ***!
  \**********************************************/
/*! exports provided: Videos2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos2Component", function() { return Videos2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Videos2Component = /** @class */ (function () {
    function Videos2Component() {
    }
    Videos2Component.prototype.ngOnInit = function () {
    };
    Videos2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos2',
            template: __webpack_require__(/*! ./videos2.component.html */ "./src/app/videos2/videos2.component.html"),
            styles: [__webpack_require__(/*! ./videos2.component.css */ "./src/app/videos2/videos2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Videos2Component);
    return Videos2Component;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\malli\Desktop\Angular\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map