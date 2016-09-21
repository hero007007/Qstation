/**
 * Created by wang on 2016/9/21.
 */
import {Injectable} from '@angular/core' ;
let info:any =[
    {factor:'价值',target:[{value:'每股净资产',checked:false,limit:0},
        {value:'每股主营收入',checked:false,limit:0},
        {value:'每股现金净流量',checked:false,limit:0},
        {value:'每股主营利润',checked:false,limit:0}]},
    {factor:'成长',target:[{value:'营业利润率',checked:false,limit:0},
        {value:'净利润率',checked:false,limit:0},
        {value:'净资产收益',checked:false,limit:0},
        {value:'主营利润率',checked:false,limit:0}]}	,
    {factor:'质量',target:[{value:'股东权益',checked:false,limit:0},
        {value:'资产合计',checked:false,limit:0},
        {value:'主营业务收入',checked:false,limit:0},
        {value:'净利润',checked:false,limit:0}]}	,
    {factor:'情绪',target:[{value:'营业利润率',checked:false,limit:0},
        {value:'净利润率',checked:false,limit:0},
        {value:'净资产收益',checked:false,limit:0},
        {value:'主营利润率',checked:false,limit:0}]}
]




@Injectable()
export class xgw_service{
    get_single_info(cw_info){ return cw_info}
    get_all_info(){return info}
};