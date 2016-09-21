/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { DSComponent }        from './ds.component'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ DSComponent ],
    exports:      [ DSComponent ]

})
export class DSModule {
}