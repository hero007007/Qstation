/**
 * Created by jlch on 16/9/20.
 */
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { routing }       from './app.routing';
import { AppComponent }  from './app.component';
import { QsService }     from './qs.service';

import { DSModule }     from './ds/ds.module';
import { GGModule }     from './gg/gg.module';
import { JYModule }     from './jy/jy.module';
import { WDModule }     from './wd/wd.module';
import { XGWModule }    from './xgw/xgw.module';
import { ZXModule }     from './zx/zx.module';
import { ZXHQModule }   from './zxhq/zxhq.module';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        DSModule,
        GGModule,
        JYModule,
        WDModule,
        XGWModule,
        ZXModule,
        ZXHQModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ QsService ]
})
export class AppModule { }
