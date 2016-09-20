/**
 * Created by jlch on 16/9/20.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DSComponent }          from './ds/ds.component';
import { GGComponent }          from './gg/gg.component';
import { JYComponent }          from './jy/jy.component';
import { WDComponent }          from './wd/wd.component';
import { XGWComponent }         from './xgw/xgw.component';
import { ZXComponent }          from './zx/zx.component';
import { ZXHQComponent }        from './zxhq/zxhq.component';

const appRoutes: Routes = [
    {
        path: 'zxhq',
        component: ZXHQComponent
    },
    {
        path: 'gg',
        component: GGComponent
    },
    {
        path: '',
        redirectTo: '/zxhq',
        pathMatch: 'full'
    },
    {
        path:'xgw',
        component: XGWComponent
    },
    {
        path: 'ZX',
        component: ZXComponent
    },
    {
        path: 'jy',
        component: JYComponent
    },
    {
        path: 'ds',
        component: DSComponent
    },
    {
        path: 'wd',
        component: WDComponent
    }

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);