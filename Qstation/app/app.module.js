"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jlch on 16/9/20.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var qs_service_1 = require('./qs.service');
var ds_module_1 = require('./ds/ds.module');
var gg_module_1 = require('./gg/gg.module');
var jy_module_1 = require('./jy/jy.module');
var wd_module_1 = require('./wd/wd.module');
var xgw_module_1 = require('./xgw/xgw.module');
var zx_module_1 = require('./zx/zx.module');
var zxhq_module_1 = require('./zxhq/zxhq.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule,
                ds_module_1.DSModule,
                gg_module_1.GGModule,
                jy_module_1.JYModule,
                wd_module_1.WDModule,
                xgw_module_1.XGWModule,
                zx_module_1.ZXModule,
                zxhq_module_1.ZXHQModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [qs_service_1.QsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map