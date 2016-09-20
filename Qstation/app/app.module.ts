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
import { DSComponent }          from './ds/ds.component';
import { GGComponent }          from './gg/gg.component';
import { JYComponent }          from './jy/jy.component';
import { WDComponent }          from './wd/wd.component';
import { XGWComponent }         from './xgw/xgw.component';
import { ZXComponent }          from './zx/zx.component';
import { ZXHQComponent }        from './zxhq/zxhq.component';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        DSComponent,
        GGComponent,
        JYComponent,
        WDComponent,
        XGWComponent,
        ZXComponent,
        ZXHQComponent
    ],
    bootstrap:    [ AppComponent ],
    providers:    [ QsService ]
})
export class AppModule { }
