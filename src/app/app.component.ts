import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MyFirstTaskComponent} from "./my-first-task/my-first-task.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(MyFirstTaskComponent);
  }
}
