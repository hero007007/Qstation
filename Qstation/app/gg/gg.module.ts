/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { GGComponent }        from 'gg.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ GGComponent ],
    exports:      [ GGComponent ]

})
export class GGModule { }