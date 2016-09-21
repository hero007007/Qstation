/**
 * Created by jlch on 16/9/20.
 */
import { Component,OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { Http }             from '@angular/http';
import { QsService }        from '../qs.service';
import {xgw_service}        from './xgw.service'

@Component({
    selector: 'my-xgw',
    templateUrl:'app/xgw/xgw.component.html',
    styleUrls:['app/xgw/xgw.component.css'],

})
export class XGWComponent implements  OnInit {
    items_info:any ;
    //xgws:any
    constructor(private xgws:xgw_service){
        this.items_info=this.xgws.get_all_info()
    }
    ngOnInit()
    {


        //console.log(this.items_info)
    }

}