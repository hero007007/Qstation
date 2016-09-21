/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { XGWComponent }        from './xgw.component'
import {xgw_service}           from './xgw.service';
import {gn_component}           from './gn.component';
import {rmyz_component}         from './rmyz.component';
import {xgwRouting}             from './xgw.routing'
@NgModule({
    imports:      [ CommonModule, FormsModule ,
                    xgwRouting
    ],
    declarations: [ XGWComponent ,
                    gn_component ,
                    rmyz_component

    ],
    exports:      [ XGWComponent ],
    providers:[xgw_service]

})
export class XGWModule { }