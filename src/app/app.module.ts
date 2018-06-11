import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatInputModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyFirstTaskComponent } from './my-first-task/my-first-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  entryComponents: [MyFirstTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
