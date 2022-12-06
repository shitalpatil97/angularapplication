import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksAssignComponent } from './hooks-assign/hooks-assign.component';
import { AssignComponent } from './assign/assign.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { BtnassignComponent } from './btnassign/btnassign.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksAssignComponent,
    AssignComponent,
    DirassignComponent,
    BtnassignComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
