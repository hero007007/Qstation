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
var ds_component_1 = require('./ds/ds.component');
var gg_component_1 = require('./gg/gg.component');
var jy_component_1 = require('./jy/jy.component');
var wd_component_1 = require('./wd/wd.component');
var xgw_component_1 = require('./xgw/xgw.component');
var zx_component_1 = require('./zx/zx.component');
var zxhq_component_1 = require('./zxhq/zxhq.component');
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
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                ds_component_1.DSComponent,
                gg_component_1.GGComponent,
                jy_component_1.JYComponent,
                wd_component_1.WDComponent,
                xgw_component_1.XGWComponent,
                zx_component_1.ZXComponent,
                zxhq_component_1.ZXHQComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [qs_service_1.QsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map