import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-first-task',
  templateUrl: './my-first-task.component.html',
  styleUrls: ['./my-first-task.component.css']
})
export class MyFirstTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyFirstTaskComponent>) {

  }

  form = new FormGroup({
    description: new FormControl(),
    age: new FormControl()
  });

  public closeDialog(){
    console.log(this.form.value.description);
    this.dialogRef.close();
  }
}
