import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule, MatFormFieldModule, MatInputModule, MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goals/goal/goal.component';
import { GoalService } from './services/goal.service';
import { SnackbarComponent } from './snackbar/snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents: [SnackbarComponent],
  providers: [GoalService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
