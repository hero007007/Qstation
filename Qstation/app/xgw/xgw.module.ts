/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { XGWComponent }        from 'xgw.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ XGWComponent ],
    exports:      [ XGWComponent ]

})
export class XGWModule { }