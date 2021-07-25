import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuzzWordService } from './services/buzzWord.service';
import { RandomService } from './services/random.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        RandomService,
        BuzzWordService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
