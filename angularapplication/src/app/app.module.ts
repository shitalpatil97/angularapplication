import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksAssignComponent } from './hooks-assign/hooks-assign.component';
import { AssignComponent } from './assign/assign.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksAssignComponent,
    AssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
