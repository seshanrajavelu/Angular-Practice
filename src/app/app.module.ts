import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { FormModule } from './form/form.module';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { QusestionAndAnswerComponent } from './qusestion-and-answer/qusestion-and-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    LifeCycleHooksComponent,
    CustomPipePipe,
    ReversePipePipe,
    ParentComponent,
    ChildComponent,
    QusestionAndAnswerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
