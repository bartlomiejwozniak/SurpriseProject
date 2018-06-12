import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MyFirstTaskComponent} from "./my-first-task/my-first-task.component";
import {Task} from "./task";
import {MySecondTaskComponent} from "./my-second-task/my-second-task.component";
import {MyThirdTaskComponent} from "./my-third-task/my-third-task.component";
import {MyForthTaskComponent} from "./my-forth-task/my-forth-task.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
    this.initTasks();
  }
  tasks: Task[] = [];
  currentDate: Date;
  initTasks(){
    this.currentDate = new Date();
    this.tasks[0] = new Task();
    this.tasks[0].title = "Zadanie 1 - Quiz";
    this.tasks[0].validDate = new Date("June 11, 2018 14:00:00");
    this.tasks[1] = new Task();
    this.tasks[1].title = "Zadanie 2 - Labirynt!";
    this.tasks[1].validDate = new Date("June 12, 2018 14:00:00");
    this.tasks[2] = new Task();
    this.tasks[2].title = "Zadanie 2 - Zdjęcia!";
    this.tasks[2].validDate = new Date("June 13, 2018 10:00:00");
    this.tasks[3] = new Task();
    this.tasks[3].title = "HEJ!";
    this.tasks[3].validDate = new Date("June 14, 2018 20:00:00");
    this.tasks[4] = new Task();
    this.tasks[4].title = "HEJ!";
    this.tasks[4].validDate = new Date("June 15, 2018 20:00:00");
  }
  openDialog1() {
    this.dialog.open(MyFirstTaskComponent, {
      width:'600px',
      data: { task: this.tasks[0] }
    });
  }

  openDialog2() {
    this.dialog.open(MySecondTaskComponent, {
      width:'800px',
      height: '800px',
      data: { task: this.tasks[1] }
    });
  }

  openDialog3() {
    this.dialog.open(MyThirdTaskComponent, {
      width:'600px',
      data: { task: this.tasks[2] }
    });
  }

  openDialog4() {
    this.dialog.open(MyForthTaskComponent, {
      width:'600px',
      data: { task: this.tasks[3] }
    });
  }

  openDialog5() {
    this.dialog.open(MyFirstTaskComponent, {
      width:'600px',
      data: { task: this.tasks[4] }
    });
  }
}
