import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatInputModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyFirstTaskComponent } from './my-first-task/my-first-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MySecondTaskComponent } from './my-second-task/my-second-task.component';
import { MyThirdTaskComponent } from './my-third-task/my-third-task.component';
import { MyForthTaskComponent } from './my-forth-task/my-forth-task.component';
import { MyFifthTaskComponent } from './my-fifth-task/my-fifth-task.component';
import { MyLastTaskComponent } from './my-last-task/my-last-task.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstTaskComponent,
    MySecondTaskComponent,
    MyThirdTaskComponent,
    MyForthTaskComponent,
    MyFifthTaskComponent,
    MyLastTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  entryComponents: [MyFirstTaskComponent, MySecondTaskComponent, MyThirdTaskComponent, MyForthTaskComponent, MyFifthTaskComponent, MyLastTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
