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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\n    width: 100%;\n    height: 100%;\n}\n.body > div:nth-of-type(1){\n    height: 100vh;\n}\n.body > div:nth-of-type(1) > div{\n    width: 100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"displayFlex\">\n    <div> \n        <mis-home></mis-home>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.roles = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_core_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var src_app_core_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var src_app_core_updateTeam_updateTeam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/updateTeam/updateTeam.component */ "./src/app/core/updateTeam/updateTeam.component.ts");
/* harmony import */ var src_app_core_updateSchedule_updateSchedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/updateSchedule/updateSchedule.component */ "./src/app/core/updateSchedule/updateSchedule.component.ts");
/* harmony import */ var src_app_core_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/schedule/schedule.component */ "./src/app/core/schedule/schedule.component.ts");
/* harmony import */ var src_app_shared_components_single_select_dropdown_single_select_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/single-select-dropdown/single-select-dropdown.component */ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.ts");
/* harmony import */ var src_app_shared_components_popUpLayout_popUpLayout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/popUpLayout/popUpLayout.component */ "./src/app/shared/components/popUpLayout/popUpLayout.component.ts");
/* harmony import */ var src_app_shared_components_searchEmployee_searchEmployee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/searchEmployee/searchEmployee.component */ "./src/app/shared/components/searchEmployee/searchEmployee.component.ts");
/* harmony import */ var src_app_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var src_app_shared_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/pipes/displayDate.pipe */ "./src/app/shared/pipes/displayDate.pipe.ts");
/* harmony import */ var src_app_shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/pipes/time.pipe */ "./src/app/shared/pipes/time.pipe.ts");
/* harmony import */ var src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/tms-data.service */ "./src/app/shared/services/tms-data.service.ts");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var src_app_shared_directives_outside_click_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/directives/outside-click.directive */ "./src/app/shared/directives/outside-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                src_app_core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                src_app_core_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                src_app_core_updateTeam_updateTeam_component__WEBPACK_IMPORTED_MODULE_8__["UpdateTeamComponent"],
                src_app_core_updateSchedule_updateSchedule_component__WEBPACK_IMPORTED_MODULE_9__["UpdateScheduleComponent"],
                src_app_core_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
                src_app_shared_components_popUpLayout_popUpLayout_component__WEBPACK_IMPORTED_MODULE_12__["PopUpLayoutComponent"],
                src_app_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                src_app_shared_components_single_select_dropdown_single_select_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["SingleSelectDropdownComponent"],
                src_app_shared_components_searchEmployee_searchEmployee_component__WEBPACK_IMPORTED_MODULE_13__["SearchEmployeeComponent"],
                src_app_shared_directives_outside_click_directive__WEBPACK_IMPORTED_MODULE_20__["OutsideClickDirective"],
                src_app_shared_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_15__["DisplayDatePipe"],
                src_app_shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_16__["TimePipe"]
            ],
            imports: [
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_0__["MbscModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_17__["TmsDataService"],
                src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"],
                src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_19__["UtilityService"]
            ],
            exports: [src_app_shared_directives_outside_click_directive__WEBPACK_IMPORTED_MODULE_20__["OutsideClickDirective"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"justifyBetween alignItemsCenter\">\n    <img src=\"../../../assets/logo.png\" alt=\"\" style=\"height:30px;\">\n    <div class=\"alignItemsCenter\">\n        <img src=\"../../../assets/user.svg\" alt=\"\" class=\"roundedCircle\" style=\"height:30px;\">\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mis-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"teams paddingAll10\" *ngIf=\"!showTeamSchedule\">\n    <header *ngIf=\"!isMobileView\">\n        <span class=\"headingFont\"> TEAM NAME </span>\n        <span class=\"headingFont\"> TEAM MANAGER </span>\n        <span class=\"headingFont\"> NO.OF EMPLOYEES </span>\n        <span> </span>\n    </header>\n    <div *ngIf=\"teams && !isMobileView\">\n        <div *ngFor=\"let team of teams;let ti = index;\" class=\"rows\">\n            <span> {{team.label}} </span>\n            <span>\n                <ng-container *ngFor=\"let manager of team.managers; let i = index;\">\n                    <div> {{i+1+'.' +manager.employeeName}} </div>\n                </ng-container>\n                <span *ngIf=\"team.managers && team.managers.length == 0\"> NA </span>\n            </span>\n            <span> {{team.employees && team.employees.length}} </span>\n            <span class=\"displayFlex\">\n                <button class=\"whiteBGButton marginLeftRight10\" (click)=\"editTeam(ti)\">\n                    <img src=\"{{imageURL}}/assets/edit.png\" alt=\"\" class=\"iconSize\"/>\n                    <span class=\"marginLeft5\"> Edit Team </span>\n                </button>\n                <button class=\"blueBGButton marginLeftRight10\" (click)=\"scheduleTeam(ti)\">\n                    <img src=\"{{imageURL}}/assets/schedule.png\" alt=\"\" class=\"iconSize\"/>\n                    <span class=\"marginLeft5\"> Schedule </span>\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- Mobile view -->\n    <div *ngIf=\"teams && isMobileView\">\n        <div *ngFor=\"let team of teams;let ti = index;\" class=\"flexColumn rows\">\n            <span class=\"displayFlex margintopBottom10\">\n                <span class=\"header\"> TEAM NAME </span>\n                <span> {{team.label}} </span>\n            </span>\n            <span class=\"displayFlex margintopBottom10\">\n                <span class=\"header\"> TEAM MANAGER </span>\n                <ng-container *ngFor=\"let manager of team.managers; let i = index;\">\n                    {{i+1+'.' +manager}}\n                </ng-container>\n                <span *ngIf=\"team.managers && team.managers.length == 0\"> NA </span>\n            </span>\n            <span class=\"displayFlex margintopBottom10\">\n                <span class=\"header\"> NO. OF EMP. </span>\n                <span> {{team.employees && team.employees.length}} </span>\n            </span>\n            <span class=\"displayFlex margintopBottom10\">\n                <button class=\"whiteBGButton marginLeftRight10\" (click)=\"editTeam(ti)\">\n                    <img src=\"{{imageURL}}/assets/edit.png\" alt=\"Edit\" class=\"iconSize\"/>\n                    <span class=\"marginLeft5\"> Edit Team </span>\n                </button>\n                <button class=\"blueBGButton marginLeftRight10\" (click)=\"scheduleTeam(ti)\">\n                    <img src=\"{{imageURL}}/assets/schedule.png\" alt=\"Schedule\" class=\"iconSize\"/>\n                    <span class=\"marginLeft5\"> Schedule </span>\n                </button>\n            </span>\n        </div>\n    </div>\n</section>\n<app-update-team *ngIf=\"showTeamEdit\" [team]=\"selectedTeam\" (saveTeam)=\"saveTeam($event)\" (closeTeamEdit)=\"closeTeamEdit($event)\"> </app-update-team>\n<app-schedule *ngIf=\"showTeamSchedule\" [team]=\"selectedTeam\"> </app-schedule>\n<app-loader *ngIf=\"showLoader\"></app-loader>"

/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1200px){.teams{width:1200px !important}}@media only screen and (max-width: 550px){.header{color:#3277d8;font-weight:bold;width:40%}.rows{box-shadow:0 2px 6px 0 rgba(0,0,0,0.16);background-color:#ffffff !important;border:none !important;margin:5px !important;padding:10px !important}.rows>span{width:100% !important}}.teams{width:90%;margin:0 auto;font-size:13px}.teams>header{color:#3277d8;padding:12px 0px;border-top:solid 1px #d6dce2;border-bottom:solid 1px #3277d8;display:flex;font-weight:bold}.teams>header>span{width:25%;padding:0px 5px}.teams .rows{padding:12px 0px;display:flex}.teams .rows:nth-child(odd){background-color:#f4f5f6;border-top:1px solid lightgray;border-bottom:1px solid lightgray}.teams .rows>span{width:25%;padding:0px 5px}.teams button{width:90px;border:1px solid;display:flex;align-items:center;padding:4px 5px;border-radius:15px;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService, utilityService) {
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.teams = [];
        this.showTeamEdit = false;
        this.showTeamSchedule = false;
        this.isMobileView = false;
        this.showLoader = false;
        this.imageURL = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.imageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imageEndPoint;
        this.isMobileView = this.utilityService.getResponsivenessStatus();
        this.getTeams();
    };
    HomeComponent.prototype.getTeams = function () {
        var _this = this;
        this.showLoader = true;
        this.httpService.getTeams('').subscribe(function (res) {
            _this.showLoader = false;
            if (res)
                _this.teams = res;
        }, function (err) {
            _this.showLoader = false;
        });
    };
    HomeComponent.prototype.saveTeam = function (team) {
        var _this = this;
        this.showLoader = true;
        this.httpService.saveTeam(team).subscribe(function (res) {
            _this.showLoader = false;
            _this.closeTeamEdit();
            _this.getTeams();
        }, function (err) {
            _this.showLoader = false;
            console.log("Error occured while saving the project");
        });
    };
    HomeComponent.prototype.editTeam = function (index) {
        this.selectedTeam = this.teams[index];
        this.showTeamEdit = true;
    };
    HomeComponent.prototype.closeTeamEdit = function () {
        this.showTeamEdit = false;
    };
    HomeComponent.prototype.scheduleTeam = function (index) {
        this.selectedTeam = this.teams[index];
        this.showTeamSchedule = true;
    };
    HomeComponent.prototype.closeScheduleTeam = function () {
        this.showTeamSchedule = false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mis-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/schedule/schedule.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/schedule/schedule.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"schedules\">\n    <div class=\"alignItemsCenter\">\n        <span class=\"marginRight10\"> Date(s) </span>\n        <div><input mbsc-calendar [mbsc-options]=\"maxSettings\" placeholder=\"\" id=\"calendar\" /> </div>\n    </div>\n    <div class=\"margintopBottom20\">\n        <span class=\"clickable\" (click)=\"editSchedule('BOTH')\"> Update Shift Details </span>\n    </div>\n    <div class=\"scheduleTable\">\n        <div class=\"header alignItemsCenter\">\n            <input type=\"checkbox\" (click)=\"selectAllEmployees($event)\">\n            <span class=\"headingFont\"> EMPLOYEE DETAILS </span>\n            <span class=\"headingFont\" *ngFor=\"let date of scheduleDateRangeArr;\">\n                {{date | displayDate}}\n            </span>\n        </div>\n        <div class=\"body\">\n            <div *ngFor=\"let schedule of schedules;\" class=\"alignItemsCenter\">\n                <input type=\"checkbox\" [checked]=\"selectedEmpList.includes(schedule.employeeId)\" (click)=\"selectEmployee(schedule.employeeId)\">\n                <span class=\"flexColumn\"> \n                    <span class=\"margintopBottom5 clickable\"> {{schedule.employeeName}} </span>\n                    <span class=\"margintopBottom5\"> {{schedule.employeeOrganizationId}} </span>\n                </span>\n                <span *ngFor=\"let date of scheduleDateRangeArr; let i=index;\" [ngClass]=\"{'flexColumn': true, ' greyedOut': isGreyedOut(date, schedule)}\">\n                    <span class=\"margintopBottom5 alignItemsCenter\">\n                        <span> Login : {{getSchedule(schedule, i, 'time', 'LOGIN')}}</span> \n                        <img src=\"{{imageURL}}/assets/edit.png\" (click)=\"editSchedule('LOGIN',schedule,i)\"/>\n                        <img src=\"{{imageURL}}/assets/cancel.png\" (click)=\"cancelSchedule('LOGIN',schedule,i)\"/>\n                    </span>\n                    <span class=\"margintopBottom5 alignItemsCenter\">\n                        <span> Logout : {{getSchedule(schedule, i, 'time', 'LOGOUT')}}</span>\n                        <img src=\"{{imageURL}}/assets/edit.png\" (click)=\"editSchedule('LOGOUT',schedule,i)\"/>\n                        <img src=\"{{imageURL}}/assets/cancel.png\" (click)=\"cancelSchedule('LOGOUT',schedule,i)\"/>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</section>\n<app-update-schedule *ngIf=\"showScheduleEdit\" [type]=\"scheduleEditType\" [schedule]=\"selectedSchedule\" [employeeId]=\"scheduleEmployeeId\" [team]=\"team\" [date]=\"scheduleDateRangeArr[selectedDateIndex]\" (close)=\"closeScheduleEdit()\" (update)=\"updateSchedule($event)\"> </app-update-schedule>\n<app-loader *ngIf=\"showLoader\"></app-loader>"

/***/ }),

/***/ "./src/app/core/schedule/schedule.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/schedule/schedule.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 550px){.scheduleTable>.header>span{width:calc(calc(100% - 50px)/2) !important}.scheduleTable>.body>div>span{width:calc(calc(100% - 50px)/2) !important}}\n.clickable{color:#3277d8;font-weight:bold;cursor:pointer}\n.scheduleTable{width:100%}\n.scheduleTable>.header{padding:8px 0px;color:white;font-weight:bold;background-image:linear-gradient(to right, #3159b5, #162e67)}\n.scheduleTable>.header>input{padding:0px 5px;width:50px;height:15px}\n.scheduleTable>.header>span{padding:0px 15px;width:calc(calc(100% - 50px)/8)}\n.scheduleTable>.body>div>input{padding:5px;width:50px;height:15px}\n.scheduleTable>.body>div>span{padding:5px 15px;width:calc(calc(100% - 50px)/8)}\n.scheduleTable>.body>div>span>span>span{width:80%}\n.scheduleTable>.body>div>span>span img{width:12px;margin-left:5px;cursor:pointer}\n.greyedOut{background-color:lightgray}\n"

/***/ }),

/***/ "./src/app/core/schedule/schedule.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/schedule/schedule.component.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/tms-data.service */ "./src/app/shared/services/tms-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["mobiscroll"].settings = {
    theme: 'ios',
    display: 'bubble'
};
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(httpService, utilityService, dataService, cdr) {
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.dataService = dataService;
        this.cdr = cdr;
        this.teams = [];
        this.isMobileView = false;
        this.selectedEmpList = [];
        this.schedules = [];
        this.scheduleDateRangeArr = [];
        this.showScheduleEdit = false;
        this.showLoader = false;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageEndPoint;
        this.isMobileView = this.utilityService.getResponsivenessStatus();
        var that = this;
        var today = new Date(), nextDate = new Date();
        nextDate.setDate(today.getDate() + 30);
        this.maxSettings = {
            display: 'bubble',
            showOnTap: true,
            weekDays: 'min',
            firstDay: 1,
            selectType: (that.isMobileView ? 'day' : 'week'),
            select: (that.isMobileView ? 1 : 7),
            max: nextDate,
            headerText: '',
            dateFormat: 'dd/mm/yy',
            onSet: function (event) {
                if (event && event['valueText']) {
                    var selDates = event.valueText.split(',');
                    _this.scheduleStartDate = selDates[0].trim();
                    _this.scheduleEndDate = selDates[selDates.length - 1].trim();
                    _this.scheduleDateRangeArr = selDates.map(function (date) {
                        return that.utilityService.getDateFromString(date.trim());
                    });
                    ;
                    _this.getSchedules();
                }
            },
            onInit: function (event, inst) {
                var dateObjArr = [];
                var maxSelection = (that.isMobileView ? 1 : 7);
                today.setHours(0);
                today.setMinutes(0);
                today.setSeconds(0);
                today.setMilliseconds(0);
                today.setDate(today.getDate() - today.getDay() + 1);
                for (var i = 0; i < maxSelection; i++) {
                    dateObjArr.push(new Date(today));
                    today.setDate(today.getDate() + 1);
                }
                that.scheduleStartDate = that.utilityService.getStringDate(dateObjArr[0]);
                that.scheduleEndDate = that.utilityService.getStringDate(dateObjArr[dateObjArr.length - 1]);
                that.scheduleDateRangeArr = dateObjArr;
                inst.setVal(dateObjArr, true);
                that.getSchedules();
            }
        };
        this.httpService.getOffices().subscribe(function (res) {
            if (res)
                _this.dataService.returnOffices.next(res);
        });
    };
    ScheduleComponent.prototype.getSchedules = function () {
        var _this = this;
        if (this.team) {
            this.showLoader = true;
            this.cdr.detectChanges();
            this.httpService.getSchedulesForATeam(this.team.projectId, this.scheduleStartDate, this.scheduleEndDate).subscribe(function (res) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
                if (res)
                    _this.schedules = res;
            }, function (err) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
            });
        }
    };
    ScheduleComponent.prototype.editSchedule = function (type, schedules, index) {
        var scheduleDate = new Date(this.scheduleDateRangeArr[index]);
        scheduleDate.setHours(0, 0, 0, 0);
        this.selectedDateIndex = index;
        this.scheduleEditType = type;
        if (type != 'BOTH')
            this.scheduleEmployeeId = schedules.employeeId;
        if (schedules)
            this.selectedSchedule = this.getSchedule(schedules, index, 'Object', type);
        this.showScheduleEdit = true;
    };
    ScheduleComponent.prototype.updateSchedule = function (scheduleObj) {
        var _this = this;
        this.showScheduleEdit = false;
        this.showLoader = true;
        this.cdr.detectChanges();
        //Checking if it is a bulk edit or single edit
        if (this.scheduleEditType === 'BOTH') {
            scheduleObj['empGuidList'] = this.selectedEmpList;
            this.httpService.updateSchedulesBulk(scheduleObj.projectId, scheduleObj).subscribe(function (res) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
                _this.getSchedules();
            }, function (err) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
            });
        }
        else {
            this.httpService.updateSchedule(scheduleObj.empGuid, scheduleObj.projectId, scheduleObj.schedules).subscribe(function (res) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
                _this.getSchedules();
            }, function (err) {
                _this.showLoader = false;
                _this.cdr.detectChanges();
            });
        }
    };
    ScheduleComponent.prototype.cancelSchedule = function (type, schedule, index) {
        var _this = this;
        var scheduleDate = new Date(this.scheduleDateRangeArr[index]);
        scheduleDate.setHours(0, 0, 0, 0);
        var selectedShift = this.getSchedule(schedule, index, 'Object', type);
        var requestObj = {};
        requestObj['adhoc'] = false;
        requestObj['empGuid'] = schedule.employeeId;
        requestObj['gender'] = 'male';
        requestObj['hours'] = selectedShift.shiftParameters['hours'];
        requestObj['minutes'] = selectedShift.shiftParameters['minutes'];
        requestObj['projectId'] = this.team.projectId;
        requestObj['scheduleDate'] = scheduleDate.getTime();
        requestObj['scheduleRequestType'] = type;
        this.showLoader = true;
        this.httpService.cancelSchedule(schedule.employeeId, this.team.projectId, requestObj).subscribe(function (res) {
            _this.showLoader = false;
            _this.getSchedules();
        }, function (err) {
            _this.showLoader = false;
        });
    };
    ScheduleComponent.prototype.closeScheduleEdit = function () {
        this.showScheduleEdit = false;
    };
    ScheduleComponent.prototype.getSchedule = function (scheduleEle, dateIndex, requiredType, scheduleType) {
        var scheduleDate = new Date(this.scheduleDateRangeArr[dateIndex]);
        scheduleDate.setHours(0, 0, 0, 0);
        var schedule = scheduleEle.sheduleMapForEmployee[scheduleDate.getTime()];
        var requiredSchedule;
        if (schedule) {
            for (var i = 0; i < schedule.length; i++) {
                if (schedule[i].eventName == scheduleType) {
                    requiredSchedule = schedule[i];
                    break;
                }
            }
        }
        if (requiredSchedule) {
            if (requiredType == 'Object')
                return requiredSchedule;
            else {
                var hour = '0' + requiredSchedule.shiftParameters['hours'];
                var minute = '0' + requiredSchedule.shiftParameters['minutes'];
                return hour.substring(hour.length - 2, hour.length) + ':' + minute.substring(minute.length - 2, minute.length);
            }
        }
        else {
            if (requiredType == 'Object')
                return {};
            else
                return '--:--';
        }
    };
    ScheduleComponent.prototype.selectAllEmployees = function (event) {
        var _this = this;
        if (event.srcElement.checked) {
            this.selectedEmpList = [];
            this.schedules.forEach(function (schedule) {
                _this.selectedEmpList.push(schedule.employeeId);
            });
        }
        else {
            this.selectedEmpList = [];
        }
    };
    ScheduleComponent.prototype.selectEmployee = function (empGuid) {
        if (this.selectedEmpList.includes(empGuid))
            this.selectedEmpList.splice(this.selectedEmpList.indexOf(empGuid), 1);
        else
            this.selectedEmpList.push(empGuid);
    };
    ScheduleComponent.prototype.isGreyedOut = function (date, schedule) {
        if (schedule && schedule.scheduleExceptionForEmployee &&
            Object.keys(schedule.scheduleExceptionForEmployee).includes(date.getTime().toString()))
            return true;
        else
            return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScheduleComponent.prototype, "team", void 0);
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/core/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/core/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_5__["TmsDataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/core/updateSchedule/updateSchedule.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/updateSchedule/updateSchedule.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popUpLayout [title]=\"'Update Schedule'\" [width]=\"popupWidth\" (closeEmitter)=\"closeEdit($event)\">\n    <div class=\"alignItemsCenter\" style=\"margin-top: 10px;\" *ngIf=\"type == 'BOTH'\">\n        <span class=\"marginRight10\"> Date(s) </span>\n        <div><input mbsc-calendar [mbsc-options]=\"maxSettings\" placeholder=\"\" /> </div>\n    </div>\n    <div class=\"updateSchedules\">\n            <div *ngIf=\"type == 'BOTH' || type == 'LOGIN'\">\n                <span style=\"width: 100px;\"> Login </span>\n                <span> \n                    <app-single-select-dropdown [width]=\"'100px'\" [values]=\"loginShifts\" [type]=\"'object'\" [keyName]=\"'formattedTime'\" [displayName]=\"'formattedTime'\" [placeHolder]=\"'Shift'\" [selectedValue]=\"selectedLoginShift\" [showSearchBox]=\"false\" (onSelect)=\"selectLoginShift($event)\"></app-single-select-dropdown>    \n                </span>\n                <span> \n                    <app-single-select-dropdown [width]=\"'100px'\" [values]=\"offices\" [type]=\"'object'\" [keyName]=\"'id'\" [displayName]=\"'address'\" [placeHolder]=\"'Office'\" [selectedValue]=\"selectedLoginOffice\" [showSearchBox]=\"false\" (onSelect)=\"selectLoginOffice($event)\"></app-single-select-dropdown>    \n                </span>\n                <span>\n                    <span class=\"alignItemsCenter\">\n                        <input type=\"checkbox\" />\n                        <span> Custom Routing </span>\n                    </span>\n                </span>\n            </div>\n            <div *ngIf=\"type == 'BOTH' || type == 'LOGOUT'\">\n                <span style=\"width: 100px;\"> Logout </span>\n                <span> \n                    <app-single-select-dropdown [width]=\"'100px'\" [values]=\"logoutShifts\" [type]=\"'object'\" [keyName]=\"'formattedTime'\" [displayName]=\"'formattedTime'\" [placeHolder]=\"'Shift'\" [selectedValue]=\"selectedLogoutShift\" [showSearchBox]=\"false\" (onSelect)=\"selectLogoutShift($event)\"></app-single-select-dropdown>    \n                </span>\n                <span> \n                    <app-single-select-dropdown [width]=\"'100px'\" [values]=\"offices\" [type]=\"'object'\" [keyName]=\"'id'\" [displayName]=\"'address'\" [placeHolder]=\"'Office'\" [selectedValue]=\"selectedLogoutOffice\" [showSearchBox]=\"false\" (onSelect)=\"selectLogoutOffice($event)\"></app-single-select-dropdown>    \n                </span>\n                <span>\n                    <span class=\"alignItemsCenter\">\n                        <input type=\"checkbox\" />\n                        <span> Custom Routing </span>\n                    </span>\n                </span>\n            </div>\n            <div *ngIf=\"type == 'BOTH'\">\n                <span style=\"width: 100px;\"> Next Day Logout </span>\n                <input type=\"checkbox\" (click)=\"setSameDayLogout($event)\"/>\n            </div>\n            <div>\n                <span><button class=\"plainButton margintopBottom10\" (click)=\"closeEdit()\"> Cancel </button></span>\n                <span><button class=\"blueButton\" (click)=\"save()\"> Save </button></span>\n            </div>\n        </div>    \n</app-popUpLayout>"

/***/ }),

/***/ "./src/app/core/updateSchedule/updateSchedule.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/updateSchedule/updateSchedule.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".updateSchedules>div{margin-top:20px;display:flex;flex-wrap:wrap;align-items:center}.updateSchedules>div>span:not(:nth-of-type(1)){margin:0px 5px}\n"

/***/ }),

/***/ "./src/app/core/updateSchedule/updateSchedule.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/updateSchedule/updateSchedule.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateScheduleComponent", function() { return UpdateScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/tms-data.service */ "./src/app/shared/services/tms-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





;
_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["mobiscroll"].settings = {
    theme: 'ios',
    display: 'bubble'
};
var UpdateScheduleComponent = /** @class */ (function () {
    function UpdateScheduleComponent(httpService, utilityService, dataService) {
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.dataService = dataService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.offices = [];
        this.selectedLoginOffice = {};
        this.selectedLogoutOffice = {};
        this.isSameDayLogout = false;
    }
    UpdateScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.utilityService.getResponsivenessStatus())
            this.popupWidth = "80%";
        else
            this.popupWidth = "";
        var that = this;
        var today = new Date(), nextDate = new Date();
        nextDate.setDate(today.getDate() + 30);
        this.maxSettings = {
            display: 'bubble',
            showOnTap: true,
            weekDays: 'min',
            select: 7,
            min: today,
            max: nextDate,
            headerText: '',
            dateFormat: 'dd/mm/yy',
            onSet: function (event) {
                if (event && event['valueText']) {
                    var selDate = event.valueText.split(',');
                    _this.selectedDates = selDate.map(function (date) {
                        return that.utilityService.getDateFromString(date.trim()).getTime();
                    });
                }
            },
            onInit: function (event, inst) {
                var dateObjArr = [];
                for (var i = 0; i < 1; i++) {
                    dateObjArr.push(new Date(today));
                    today.setDate(today.getDate() + 1);
                }
                inst.setVal(dateObjArr, true);
            }
        };
        this.dataService.returnOffices.subscribe(function (offices) {
            if (offices) {
                _this.offices = offices;
                _this.selectedLoginOffice = _this.offices[0];
                _this.selectedLogoutOffice = _this.offices[0];
                if (_this.type == 'BOTH')
                    _this.date = new Date();
                _this.getShifts(_this.selectedLoginOffice);
            }
        });
        if (this.type == 'BOTH')
            this.date = new Date();
    };
    UpdateScheduleComponent.prototype.getShifts = function (office) {
        var _this = this;
        this.httpService.getShifts(this.team.projectId, this.utilityService.getStringDate(this.date), this.utilityService.getStringDate(this.date), office['address']).subscribe(function (res) {
            var key1 = Object.keys(res)[0];
            var requiredShifts = res[key1];
            _this.loginShifts = [];
            _this.logoutShifts = [];
            requiredShifts.forEach(function (shift) {
                if (shift.shiftType == 'LOGIN')
                    _this.loginShifts.push(shift);
                if (shift.shiftType == 'LOGOUT')
                    _this.logoutShifts.push(shift);
                if (_this.type != 'BOTH' && _this.schedule && _this.schedule.shiftParameters['hours'] == shift.hours &&
                    _this.schedule.shiftParameters['minutes'] == shift.minutes) {
                    if (_this.type === 'LOGIN')
                        _this.selectedLoginShift = shift;
                    else if (_this.type === 'LOGOUT')
                        _this.selectedLogoutShift = shift;
                }
            });
        }, function (err) {
            console.log("Error in loading the shifts");
        });
    };
    UpdateScheduleComponent.prototype.selectLoginShift = function (shift) {
        this.selectedLoginShift = shift;
    };
    UpdateScheduleComponent.prototype.selectLogoutShift = function (shift) {
        this.selectedLogoutShift = shift;
    };
    UpdateScheduleComponent.prototype.selectLoginOffice = function (office) {
        this.selectedLoginOffice = office;
        this.getShifts(this.selectedLoginOffice);
    };
    UpdateScheduleComponent.prototype.selectLogoutOffice = function (office) {
        this.selectedLogoutOffice = office;
        this.getShifts(this.selectedLogoutOffice);
    };
    UpdateScheduleComponent.prototype.save = function () {
        if (this.type == 'BOTH')
            this.updateSchedulesBulk();
        else
            this.updateSchedule();
    };
    UpdateScheduleComponent.prototype.updateSchedule = function () {
        var selectedShift, object = {}, tempArr = [];
        if (this.type == 'LOGIN')
            selectedShift = this.selectedLoginShift;
        else if (this.type == 'LOGOUT')
            selectedShift = this.selectedLogoutShift;
        object['adhoc'] = false;
        object['empGuid'] = this.employeeId;
        object['gender'] = 'male';
        object['hours'] = selectedShift['hours'];
        object['minutes'] = selectedShift['minutes'];
        object['projectId'] = this.team.projectId;
        object['scheduleDate'] = this.date.getTime();
        object['scheduleRequestType'] = this.type;
        tempArr.push(object);
        this.update.emit({
            'empGuid': this.employeeId,
            'projectId': this.team.projectId,
            'schedules': tempArr
        });
    };
    UpdateScheduleComponent.prototype.updateSchedulesBulk = function () {
        var object = {};
        object['dateList'] = this.selectedDates;
        object['nextDatLogOut'] = this.isSameDayLogout;
        object['logInShift'] = {
            hrs: this.selectedLoginShift['hours'],
            minutes: this.selectedLoginShift['minutes'],
            office: this.selectedLoginOffice['address']
        };
        object['logOutShift'] = {
            hrs: this.selectedLogoutShift['hours'],
            minutes: this.selectedLogoutShift['minutes'],
            office: this.selectedLogoutOffice['address']
        };
        object['projectId'] = this.team.projectId;
        this.update.emit(object);
    };
    UpdateScheduleComponent.prototype.closeEdit = function () {
        this.close.emit();
    };
    UpdateScheduleComponent.prototype.setSameDayLogout = function (event) {
        this.isSameDayLogout = event.srcElement.checked;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "schedule", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "team", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "employeeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateScheduleComponent.prototype, "update", void 0);
    UpdateScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-schedule',
            template: __webpack_require__(/*! ./updateSchedule.component.html */ "./src/app/core/updateSchedule/updateSchedule.component.html"),
            styles: [__webpack_require__(/*! ./updateSchedule.component.scss */ "./src/app/core/updateSchedule/updateSchedule.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            src_app_shared_services_tms_data_service__WEBPACK_IMPORTED_MODULE_4__["TmsDataService"]])
    ], UpdateScheduleComponent);
    return UpdateScheduleComponent;
}());



/***/ }),

/***/ "./src/app/core/updateTeam/updateTeam.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/updateTeam/updateTeam.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popUpLayout [title]=\"'Update Team'\" [width]=\"popupWidth\" (closeEmitter)=\"closeEdit($event)\">\n    <table>\n        <tbody>\n            <tr>\n                <td> Team Name </td>\n                <td><input type=\"text\" class=\"margintopBottom10\" [(ngModel)]=\"team.label\"/></td>\n            </tr>\n            <tr>\n                <td> Team Manager </td>\n                <td> \n                    <mis-searchEmployee (selectedEmployeeEmitter)=\"selectedEmployee($event)\"> </mis-searchEmployee>\n                    <div *ngFor=\"let manager of team.managers; let i = index;\">\n                        <span> {{i+1}} {{manager.employeeName}} ({{manager.employeeId}}) </span>\n                        <span (click)=\"removeManager(i)\"> <i class=\"fa fa-times\" aria-hidden=\"true\"></i> </span>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td> Description </td>\n                <td><textarea class=\"margintopBottom10\" [(ngModel)]=\"team.description\"></textarea></td>\n            </tr>\n            <tr>\n                <td> Send Notification </td>\n                <td><textarea class=\"margintopBottom10\"></textarea></td>\n            </tr>\n            <tr>\n                <td><button class=\"plainButton margintopBottom10\" (click)=\"closeEdit()\"> Cancel </button></td>\n                <td><button class=\"blueButton\" (click)=\"saveProject()\"> Save </button></td>\n            </tr>\n        </tbody>\n    </table>    \n</app-popUpLayout>"

/***/ }),

/***/ "./src/app/core/updateTeam/updateTeam.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/updateTeam/updateTeam.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1200px){.teams{width:1200px !important}}@media only screen and (max-width: 550px){.header{color:#3277d8;font-weight:bold;width:40%}.rows{box-shadow:0 2px 6px 0 rgba(0,0,0,0.16);background-color:#ffffff !important;border:none !important;margin:5px !important;padding:10px !important}.rows>span{width:100% !important}}.teams{width:90%;margin:0 auto;font-size:13px}.teams>header{color:#3277d8;padding:12px 0px;border-top:solid 1px #d6dce2;border-bottom:solid 1px #3277d8;display:flex;font-weight:bold}.teams>header>span{width:25%;padding:0px 5px}.teams .rows{padding:12px 0px;display:flex}.teams .rows:nth-child(odd){background-color:#f4f5f6;border-top:1px solid lightgray;border-bottom:1px solid lightgray}.teams .rows>span{width:25%;padding:0px 5px}.teams button{width:90px;border:1px solid;display:flex;align-items:center;padding:4px 5px;border-radius:15px;cursor:pointer}\n"

/***/ }),

/***/ "./src/app/core/updateTeam/updateTeam.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/updateTeam/updateTeam.component.ts ***!
  \*********************************************************/
/*! exports provided: UpdateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTeamComponent", function() { return UpdateTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
/* harmony import */ var src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/utility.service */ "./src/app/shared/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateTeamComponent = /** @class */ (function () {
    function UpdateTeamComponent(httpService, utilityService) {
        this.httpService = httpService;
        this.utilityService = utilityService;
        this.saveTeam = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeTeamEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UpdateTeamComponent.prototype.ngOnInit = function () {
        if (this.utilityService.getResponsivenessStatus()) {
            this.popupWidth = "80%";
        }
        else {
            this.popupWidth = "350px";
        }
    };
    UpdateTeamComponent.prototype.saveProject = function () {
        this.saveTeam.emit(this.team);
    };
    UpdateTeamComponent.prototype.closeEdit = function () {
        this.closeTeamEdit.emit();
    };
    UpdateTeamComponent.prototype.selectedEmployee = function (employee) {
        console.log(employee);
        this.team.managers.push({
            employeeName: employee.name,
            employeeId: employee.eid,
            empRole: employee.employeeRoles[0].roleName,
        });
    };
    UpdateTeamComponent.prototype.removeManager = function (index) {
        this.team.managers.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateTeamComponent.prototype, "team", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateTeamComponent.prototype, "saveTeam", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateTeamComponent.prototype, "closeTeamEdit", void 0);
    UpdateTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-team',
            template: __webpack_require__(/*! ./updateTeam.component.html */ "./src/app/core/updateTeam/updateTeam.component.html"),
            styles: [__webpack_require__(/*! ./updateTeam.component.scss */ "./src/app/core/updateTeam/updateTeam.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            src_app_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], UpdateTeamComponent);
    return UpdateTeamComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-wrapper\">\n  <div class=\"dimmer\"></div>\n  <div class=\"spinner-wrapper\">\n    <div class=\"html-spinner\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-wrapper{position:fixed;left:0;right:0;top:0;bottom:0;z-index:300}.dimmer{opacity:0.8;background-color:#fff;position:absolute;left:0;right:0;top:0;bottom:0}.spinner-wrapper{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:220px}.html-spinner{width:40px;height:40px;border:4px solid #d6dce2;border-top:4px solid #3277d8;border-radius:50%}.html-spinner{transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-duration:1.2s;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/popUpLayout/popUpLayout.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/popUpLayout/popUpLayout.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1350px) and (max-width: 2000px) {\n    .popUpLayout > div{\n        top: 25% !important;\n        left: 30% !important;\n    }\n}\n\n.popUpLayout{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.35);\n    display: flex;\n    justify-content: center;\n}\n\n.popUpLayout > div{\n    position: absolute;\n    top: 15%;\n    background-color: white;\n    min-height: 150px;\n    max-height: 470px;\n    /* overflow-y: auto;  */\n    border-radius: 5px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    font-family: \"Open Sans\", sans-serif;\n}\n\n.popUpLayout > div > div:nth-child(1){\n    display: flex;\n    width: 100%;\n    color: #425365;\n    font-weight: bold;\n    font-size: 18px;\n}\n\n.popUpLayout > div > div:nth-child(2){\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.popUpLayout > div > div:nth-child(3){\n    width: 100%;\n    font-size: 13px;\n    margin: 10px auto 0px auto;\n}\n\n.popUpLayout button{\n    width: 40%;\n    height: 30px;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/shared/components/popUpLayout/popUpLayout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/popUpLayout/popUpLayout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popUpLayout\">\n    <div [ngStyle]=\"{'width': width}\">\n        <div> {{title}} </div>\n        <div> <i class=\"fas fa-times\" (click)=\"close()\"> </i> </div>\n        <div class=\"lightColor\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/popUpLayout/popUpLayout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/popUpLayout/popUpLayout.component.ts ***!
  \************************************************************************/
/*! exports provided: PopUpLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpLayoutComponent", function() { return PopUpLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpLayoutComponent = /** @class */ (function () {
    function PopUpLayoutComponent() {
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PopUpLayoutComponent.prototype.close = function () {
        this.closeEmitter.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpLayoutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpLayoutComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PopUpLayoutComponent.prototype, "closeEmitter", void 0);
    PopUpLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popUpLayout',
            template: __webpack_require__(/*! ./popUpLayout.component.html */ "./src/app/shared/components/popUpLayout/popUpLayout.component.html"),
            styles: [__webpack_require__(/*! ./popUpLayout.component.css */ "./src/app/shared/components/popUpLayout/popUpLayout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpLayoutComponent);
    return PopUpLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/searchEmployee/searchEmployee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/searchEmployee/searchEmployee.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combo_popup{\n    position: absolute;\n    background-color: White;\n    max-height: 200px;\n    z-index: 999;\n    width: calc(100% - 50px);\n    font-size: 12px;\n    padding-left: 4px;\n    margin-top: 5px;\n    overflow: auto;\n    left: 0px;\n    top: 30px;\n    clear: both;\n    border: 1px solid #d8d8d8;\n    border-radius: 3px;\n}\n.combo_popup li{\n    line-height: 18px;\n    display: block;\n    cursor: pointer;\n    white-space: nowrap;\n    text-align: left;\n}\n.combo_popup ul{\n    list-style-type: none;\n    padding: 5px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.searchEmployee{\n    width: 200px;\n    margin: 10px 0px;\n    position: relative;\n    display: flex;\n    align-items: center; \n}\n.searchEmployee > input{\n    width: calc(100% - 50px);\n    height: 25px;\n    border: 1px solid #d8d8d8;\n    color: #4a4a4a;\n    border-radius: 15px;\n    padding-left: 10px;\n    outline: none;\n}\n.searchEmployee > i{\n    cursor: pointer;\n    margin-left: 5px;\n}\n.searchEmployee > mat-form-field{\n    border: 1px solid #d8d8d8;\n    margin: 0px 10px;\n}"

/***/ }),

/***/ "./src/app/shared/components/searchEmployee/searchEmployee.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/searchEmployee/searchEmployee.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchEmployee\">\n    <input placeholder=\"Search employee by id or name\" value=\"{{selectedEmpName}}\"\n    (input)=\"searchEmployee($event.target.value)\" />\n    <div class=\"combo_popup\" [hidden]=\"!showSearchResult\">\n        <ul>\n            <li *ngFor=\"let item of searchedResult; let i = index;\" (click)=\"selectEmployee(i)\"> {{item.name}} <span *ngIf=\"item.eid != undefined\"> ({{item.eid}}) </span></li>\n        </ul>\n    </div>\n    <i class=\"fas fa-plus\" (click)=\"sendEmployee()\"></i>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/searchEmployee/searchEmployee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/searchEmployee/searchEmployee.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEmployeeComponent", function() { return SearchEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/http-service.service */ "./src/app/shared/services/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchEmployeeComponent = /** @class */ (function () {
    function SearchEmployeeComponent(httpService, zone) {
        this.httpService = httpService;
        this.zone = zone;
        this.selectedEmployeeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchedResult = [];
        this.showSearchResult = false;
        this.selectedEmpName = "";
        this.possibleLocations = [];
        this.selectedAddress = 0;
        this.otherAddress = '';
        this.selectedLocation = {};
    }
    SearchEmployeeComponent.prototype.ngOnInit = function () {
    };
    SearchEmployeeComponent.prototype.changeAddress = function (index) {
        this.selectedAddress = index;
    };
    SearchEmployeeComponent.prototype.searchEmployee = function (searchedValue) {
        if (searchedValue.length > 2) {
            this.showSearchResult = false;
            var _t_1 = this;
            this.httpService.searchEmployee(searchedValue).subscribe(function (data) {
                if (data && data['length'] != 0) {
                    _t_1.searchedResult = data;
                }
                else {
                    _t_1.searchedResult = [{
                            name: "Not present in the list"
                        }];
                }
                _t_1.showSearchResult = true;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.showSearchResult = false;
            return;
        }
    };
    SearchEmployeeComponent.prototype.selectEmployee = function (index) {
        var _this = this;
        if ((this.searchedResult.length > 1) || (this.searchedResult.length == 1 && this.searchedResult[index]['name'] != 'Not present in the list')) {
            this.selectedIndex = index;
            this.selectedEmpName = this.searchedResult[index]['name'] + " (" + this.searchedResult[index]['eid'] + ")";
            if (this.searchedResult[this.selectedIndex].pickup == undefined) {
                var nodalIndex_1 = -1;
                for (var i = 0; i < this.possibleLocations.length; i++) {
                    if (this.possibleLocations[i]['type'] == 'Nodal') {
                        nodalIndex_1 = i;
                        break;
                    }
                }
                this.zone.run(function () {
                    _this.possibleLocations.splice(nodalIndex_1, 1);
                });
            }
        }
        this.showSearchResult = false;
    };
    SearchEmployeeComponent.prototype.sendEmployee = function () {
        if (this.selectedIndex != undefined) {
            this.selectedEmpName = "";
            this.otherAddress = "";
            this.selectedEmployeeEmitter.emit(this.searchedResult[this.selectedIndex]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchEmployeeComponent.prototype, "selectedEmployeeEmitter", void 0);
    SearchEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mis-searchEmployee',
            template: __webpack_require__(/*! ./searchEmployee.component.html */ "./src/app/shared/components/searchEmployee/searchEmployee.component.html"),
            styles: [__webpack_require__(/*! ./searchEmployee.component.css */ "./src/app/shared/components/searchEmployee/searchEmployee.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SearchEmployeeComponent);
    return SearchEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginLeft10{\n    margin-left: 10px;\n}\n.single-select{\n    width: 100%;\n    position: relative;\n}\n.single-select > div:nth-child(1){\n    border: 1px solid #d6dce2;\n    background-color: white;\n    color: #425365;\n    height: 28px;\n    border-radius: 20px;\n    padding: 0px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n}\n.single-select > div:nth-child(1) > span{\n    max-width: 100%;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n}\n.single-select > div:nth-child(1) > i{\n    font-size: 16px;\n}\n.checkbox{\n    height: 13px;\n    width: 13px;\n    border: 1px solid gray;\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.selected{\n    background-color: #425365;\n    color: white;\n}\n.dropDownValues{\n    position: absolute;\n    z-index: 10;\n    color: #425365;\n    margin-top: 0px;\n    width: calc(100% - 10px);\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    padding: 5px;\n    background-color: white;\n}\n.dropDownValues > input{\n    border: none;\n    border-bottom: 1px solid #425365;\n    outline: none;\n    width: 100%;\n    padding: 3px 0px;\n    background: url('/assets/search.png') no-repeat 100%;\n}\n.dropDownValues > div{\n    max-height: 225px;\n    overflow-y: auto;\n    margin: 5px 0px;\n}\n.dropDownValues > div > div{\n    margin-right: 10px;\n}\n::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n}\n::-webkit-scrollbar-thumb{\n    background: #9aa7b4;\n}\n.dropDownValue{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.dropDownValue > div:nth-child(1) > span:nth-child(1){\n    margin-right: 5px;\n}\n.dropDownValue > div:nth-child(1){\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n.dropDownValue > div:nth-child(1) > span:nth-child(2){\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.noData{\n    margin-top: 5px;\n    display: block;\n}"

/***/ }),

/***/ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-select\" [ngStyle]=\"{'width': width}\">\n    <div (click)=\"toggleDropDown()\">\n        <span>\n            {{(selectedValue == null || selectedValue == '') ? placeHolder : (type == 'string' ? selectedValue : selectedValue[displayName] )}}\n        </span>\n        <img src=\"{{imageURL}}/assets/arrow-down.png\" alt=\"down\" style=\"height: 10px;\">\n    </div>\n    <div *ngIf=\"openDropDownList\" class=\"dropDownValues\">\n        <input *ngIf=\"showSearchBox\" type=\"text\" class=\"browser-default\" [(ngModel)]=\"searchedString\">\n        <div>\n            <div class=\"\" *ngFor=\"let value of values; let j = index;\" (click)=\"select(j)\">\n                <div class=\"marginLeft10 dropDownValue\" *ngIf=\"searchedString == '' || (type == 'string' ? value.toLowerCase().indexOf(searchedString.toLowerCase()) : value[displayName].toLowerCase().indexOf(searchedString.toLowerCase())) > -1\">\n                    <div>\n                        <span title=\"{{type == 'string' ? value : value[displayName]}}\"> {{type == 'string' ? value : value[displayName]}} </span>\n                    </div>\n                </div>\n            </div>\n            <span class=\"noData\" *ngIf=\"values.length == 0\"> No data available </span>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SingleSelectDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectDropdownComponent", function() { return SingleSelectDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleSelectDropdownComponent = /** @class */ (function () {
    function SingleSelectDropdownComponent(cdr) {
        this.cdr = cdr;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchedString = "";
        this.imageURL = "";
        this.openDropDownList = false;
        var _t = this;
        //Enabling the listerner to close the dropdown if user clicks outside
        // $(document).mouseup(function(e) 
        // {
        //     let labelContainer = $('.single-select');
        //     // if the target of the click isn't the container nor a descendant of the container
        //     if (!labelContainer.is(e.target) && labelContainer.has(e.target).length === 0) 
        //     {
        //       if(_t.openDropDownList){
        //         _t.openDropDownList = false;
        //         _t.searchedString = "";
        //         _t.cdr.detectChanges();
        //       }
        //     }
        // });
    }
    SingleSelectDropdownComponent.prototype.ngOnInit = function () {
        this.imageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imageEndPoint;
    };
    SingleSelectDropdownComponent.prototype.toggleDropDown = function () {
        this.openDropDownList = !this.openDropDownList;
        if (!this.openDropDownList) {
            this.searchedString = "";
        }
    };
    SingleSelectDropdownComponent.prototype.select = function (index) {
        this.openDropDownList = false;
        this.searchedString = "";
        this.onSelect.emit(this.values[index]);
    };
    SingleSelectDropdownComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "showSearchBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "keyName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "displayName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectDropdownComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SingleSelectDropdownComponent.prototype, "onSelect", void 0);
    SingleSelectDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-select-dropdown',
            template: __webpack_require__(/*! ./single-select-dropdown.component.html */ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./single-select-dropdown.component.css */ "./src/app/shared/components/single-select-dropdown/single-select-dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SingleSelectDropdownComponent);
    return SingleSelectDropdownComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/outside-click.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/outside-click.directive.ts ***!
  \**************************************************************/
/*! exports provided: OutsideClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideClickDirective", function() { return OutsideClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutsideClickDirective = /** @class */ (function () {
    function OutsideClickDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(OutsideClickDirective.prototype, "isActive", {
        set: function (isActive) {
            if (isActive) {
                this.elementRef.nativeElement.closest('body').addEventListener("click", this.eventListenerFunction.bind(this));
            }
            else {
                this.elementRef.nativeElement.closest('body').removeEventListener('click', this.eventListenerFunction.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    OutsideClickDirective.prototype.eventListenerFunction = function (e) {
        var targetElement = e.target;
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside && this.clickOutside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutsideClickDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], OutsideClickDirective.prototype, "isActive", null);
    OutsideClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appClickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OutsideClickDirective);
    return OutsideClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/displayDate.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/displayDate.pipe.ts ***!
  \**************************************************/
/*! exports provided: DisplayDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDatePipe", function() { return DisplayDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayDatePipe = /** @class */ (function () {
    function DisplayDatePipe() {
    }
    DisplayDatePipe.prototype.transform = function (dateobject) {
        if (!dateobject)
            return '';
        else
            return dateobject.getDate() + '/' + (dateobject.getMonth() + 1) + '/' + dateobject.getFullYear();
    };
    DisplayDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'displayDate'
        })
    ], DisplayDatePipe);
    return DisplayDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/time.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/time.pipe.ts ***!
  \*******************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (timeString) {
        if (timeString == '')
            return ' __:__ ';
        else
            return timeString;
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/http-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/http-service.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        var cookies = {};
        document.cookie.split(';').forEach(function (cookie) {
            cookie = cookie.trim();
            cookies[cookie.split('=')[0]] = cookie.split('=')[1];
        });
        //TODO
        //this.buid = cookies['buid'];
        this.nonce = cookies['nonce'];
        //To run the code in local replace this endpoint with API endpoint
        this.endPoint = 'teammanager';
        //this.endPoint = 'http://localhost:9090';
        this.buid = 'preprod-Test2';
    }
    HttpService.prototype.getTeams = function (employeeGuid) {
        //TODO
        return this.http.get(this.endPoint + "/" + this.buid + "/projects/?with_summary=true");
    };
    HttpService.prototype.saveTeam = function (obj) {
        return this.http.put(this.endPoint + "/" + this.buid + "/projects/" + obj.projectId, obj);
    };
    HttpService.prototype.getSchedulesForATeam = function (projectId, startDate, endDate) {
        return this.http.get(this.endPoint + "/" + this.buid + "/" + projectId + "/schedules/?startDate=" + startDate + "&endDate=" + endDate);
    };
    HttpService.prototype.getShifts = function (projectId, startDate, endDate, officeName) {
        return this.http.get(this.endPoint + "/" + this.buid + "/" + projectId + "/shifts/?startDate=" + startDate + "&endDate=" + endDate + "&officeName=" + officeName);
    };
    HttpService.prototype.getOffices = function () {
        return this.http.get(this.endPoint + "/" + this.buid + "/office/?businessId=" + this.buid);
    };
    HttpService.prototype.updateSchedulesBulk = function (projectId, scheduleObj) {
        return this.http.post(this.endPoint + "/" + this.buid + "/" + projectId + "/schedules", scheduleObj);
    };
    HttpService.prototype.updateSchedule = function (empGuid, projectId, schedules) {
        return this.http.post(this.endPoint + "/" + this.buid + "/create/" + projectId + "/?empGuid=" + empGuid, schedules);
    };
    HttpService.prototype.cancelSchedule = function (empGuid, projectId, schedule) {
        return this.http.put(this.endPoint + "/" + this.buid + "/" + projectId + "/cancelSchedule/?empGuid=" + empGuid, schedule);
    };
    HttpService.prototype.searchEmployee = function (value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var body = "searchQuery=" + value + "&status=[1]" + "&method=" + 'searchEmployee';
        return this.http.post('Employee_View_Servlet?CSRF_NONCE=' + this.nonce, body, { headers: headers });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/shared/services/tms-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/tms-data.service.ts ***!
  \*****************************************************/
/*! exports provided: TmsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmsDataService", function() { return TmsDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TmsDataService = /** @class */ (function () {
    function TmsDataService() {
        this.returnTeams = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.returnOffices = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    TmsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TmsDataService);
    return TmsDataService;
}());



/***/ }),

/***/ "./src/app/shared/services/utility.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/utility.service.ts ***!
  \****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.isMobileView = false;
        if (window && window.innerWidth) {
            if (window.innerWidth < 550)
                this.isMobileView = true;
        }
    }
    UtilityService.prototype.getResponsivenessStatus = function () {
        return this.isMobileView;
    };
    UtilityService.prototype.getStringDate = function (date) {
        var dateP = '0' + date.getDate();
        var monthP = '0' + (date.getMonth() + 1);
        return dateP.substring(dateP.length - 2, dateP.length) + '/' + monthP.substring(monthP.length - 2, monthP.length) + '/' + date.getFullYear();
    };
    /*
    date: String: 'dd/mm/yyyy'
    */
    UtilityService.prototype.getDateFromString = function (date) {
        var dateSplit = date.split('/');
        return new Date(parseInt(dateSplit[2]), (parseInt(dateSplit[1]) - 1), parseInt(dateSplit[0]));
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    imageEndPoint: "http://localhost:9090/source/build",
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nanjundan/git/project-management-service/src/main/webapp/source/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map