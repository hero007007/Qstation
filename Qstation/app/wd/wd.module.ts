/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { WDComponent }        from './wd.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ WDComponent ],
    exports:      [ WDComponent ]

})
export class WDModule { }