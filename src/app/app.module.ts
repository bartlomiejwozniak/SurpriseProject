import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatInputModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyFirstTaskComponent } from './my-first-task/my-first-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MySecondTaskComponent } from './my-second-task/my-second-task.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstTaskComponent,
    MySecondTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  entryComponents: [MyFirstTaskComponent, MySecondTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
