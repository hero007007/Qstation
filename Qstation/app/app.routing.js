"use strict";
var router_1 = require('@angular/router');
var ds_component_1 = require('./ds/ds.component');
var gg_component_1 = require('./gg/gg.component');
var jy_component_1 = require('./jy/jy.component');
var wd_component_1 = require('./wd/wd.component');
var xgw_component_1 = require('./xgw/xgw.component');
var zx_component_1 = require('./zx/zx.component');
var zxhq_component_1 = require('./zxhq/zxhq.component');
var appRoutes = [
    {
        path: 'zxhq',
        component: zxhq_component_1.ZXHQComponent
    },
    {
        path: 'gg',
        component: gg_component_1.GGComponent
    },
    {
        path: '',
        redirectTo: '/zxhq',
        pathMatch: 'full'
    },
    {
        path: 'xgw',
        component: xgw_component_1.XGWComponent
    },
    {
        path: 'zx',
        component: zx_component_1.ZXComponent
    },
    {
        path: 'jy',
        component: jy_component_1.JYComponent
    },
    {
        path: 'ds',
        component: ds_component_1.DSComponent
    },
    {
        path: 'wd',
        component: wd_component_1.WDComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map