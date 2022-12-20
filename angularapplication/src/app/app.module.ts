import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksAssignComponent } from './hooks-assign/hooks-assign.component';
import { AssignComponent } from './assign/assign.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { BtnassignComponent } from './btnassign/btnassign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { StudRegComponent } from './stud-reg/stud-reg.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormcontrolexpComponent } from './formcontrolexp/formcontrolexp.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactstudformComponent } from './reactstudform/reactstudform.component';
import { RectformComponent } from './rectform/rectform.component';
import { TempformComponent } from './tempform/tempform.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { ExpComponent } from './exp/exp.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule} from '@angular/common/http';
import { RectProjectComponent } from './rect-project/rect-project.component';



@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksAssignComponent,
    AssignComponent,
    DirassignComponent,
    BtnassignComponent,
    LifeCycleComponent,
    SimpleformComponent,
    StudRegComponent,
    FormgroupComponent,
    FormcontrolexpComponent,
    ReactiveformComponent,
    ReactstudformComponent,
    RectformComponent,
    TempformComponent,
    TformComponent,
    RformComponent,
    ExpComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    RectProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
