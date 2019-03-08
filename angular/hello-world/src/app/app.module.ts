import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TimestampListComponent } from './timestamp-list/timestamp-list.component';
import { RememberButtonComponent } from './remember-button/remember-button.component';
import { SwitchStyleComponent } from './switch-style/switch-style.component';
import { CounterComponent } from './counter/counter.component';
import { ObservablesComponent } from './observables/observables.component';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TimestampListComponent,
    RememberButtonComponent,
    SwitchStyleComponent,
    CounterComponent,
    ObservablesComponent,
    JokeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
