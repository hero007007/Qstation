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
 * Created by wang on 2016/9/21.
 */
var core_1 = require('@angular/core');
var info = [
    { factor: '价值', target: [{ value: '每股净资产', checked: false, limit: 0 },
            { value: '每股主营收入', checked: false, limit: 0 },
            { value: '每股现金净流量', checked: false, limit: 0 },
            { value: '每股主营利润', checked: false, limit: 0 }] },
    { factor: '成长', target: [{ value: '营业利润率', checked: false, limit: 0 },
            { value: '净利润率', checked: false, limit: 0 },
            { value: '净资产收益', checked: false, limit: 0 },
            { value: '主营利润率', checked: false, limit: 0 }] },
    { factor: '质量', target: [{ value: '股东权益', checked: false, limit: 0 },
            { value: '资产合计', checked: false, limit: 0 },
            { value: '主营业务收入', checked: false, limit: 0 },
            { value: '净利润', checked: false, limit: 0 }] },
    { factor: '情绪', target: [{ value: '营业利润率', checked: false, limit: 0 },
            { value: '净利润率', checked: false, limit: 0 },
            { value: '净资产收益', checked: false, limit: 0 },
            { value: '主营利润率', checked: false, limit: 0 }] }
];
var xgw_service = (function () {
    function xgw_service() {
    }
    xgw_service.prototype.get_single_info = function (cw_info) { return cw_info; };
    xgw_service.prototype.get_all_info = function () { return info; };
    xgw_service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], xgw_service);
    return xgw_service;
}());
exports.xgw_service = xgw_service;
;
//# sourceMappingURL=xgw.service.js.map