import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goals/goal/goal.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
