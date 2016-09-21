/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ZXComponent }        from './zx.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ ZXComponent ],
    exports:      [ ZXComponent ]

})
export class ZXModule { }