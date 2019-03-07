import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TimestampListComponent } from './timestamp-list/timestamp-list.component';
import { RememberButtonComponent } from './remember-button/remember-button.component';
import { SwitchStyleComponent } from './switch-style/switch-style.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TimestampListComponent,
    RememberButtonComponent,
    SwitchStyleComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
