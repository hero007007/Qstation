/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { JYComponent }        from 'jy.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ JYComponent ],
    exports:      [ JYComponent ]

})
export class JYModule { }