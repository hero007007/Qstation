/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ZXHQComponent }        from 'zxhq.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ ZXHQComponent ],
    exports:      [ ZXHQComponent ]

})
export class ZXHQModule { }