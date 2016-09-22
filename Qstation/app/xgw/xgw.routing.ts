/**
 * Created by wang on 2016/9/21.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { rmyz_component }    from './rmyz.component';
import { gn_component }  from './gn.component';
import { XGWComponent }  from './xgw.component';

const xgwRoutes: Routes = [
    //{ path: '',redirectTo:'rmyz',  pathMatch:'full' },
    //{ path: 'xgw/gn', component: gn_component },
    //{ path: 'xgw/rmyz', component: rmyz_component }

    {
        path:'xgw',
        component:XGWComponent,
        children:[
            {
                path:'',
                redirectTo:'rmyz',
                pathMatch:'full'
            },
            {
                path: 'gn', component: gn_component
            },
            { path: 'rmyz', component: rmyz_component }
        ]
    }
];

export const xgwRouting: ModuleWithProviders = RouterModule.forChild(xgwRoutes);
