import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-last-task',
  templateUrl: './my-last-task.component.html',
  styleUrls: ['./my-last-task.component.css']
})
export class MyLastTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyLastTaskComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  form = new FormGroup({
    password: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.password != null && this.replace(this.form.value.password) != 'b&a4e') {
      alert('Odpadłaś z gry:( ')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Brawo! Odgadłaś hasło! Ale to nie koniec, zanim dostaniesz bilet do Azji Express musisz go jeszcze znaleźć w mieszkaniu! <3");
    }
  }

  private replace(value){
    return value.replace(/ą/g, 'a').replace(/Ą/g, 'A')
      .replace(/ć/g, 'c').replace(/Ć/g, 'C')
      .replace(/ę/g, 'e').replace(/Ę/g, 'E')
      .replace(/ł/g, 'l').replace(/Ł/g, 'L')
      .replace(/ń/g, 'n').replace(/Ń/g, 'N')
      .replace(/ó/g, 'o').replace(/Ó/g, 'O')
      .replace(/ś/g, 's').replace(/Ś/g, 'S')
      .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
      .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
      .replace(' ', '').toLowerCase();
  }
}
