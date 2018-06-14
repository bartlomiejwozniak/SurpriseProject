import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-fifth-task',
  templateUrl: './my-fifth-task.component.html',
  styleUrls: ['./my-fifth-task.component.css']
})
export class MyFifthTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyFifthTaskComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  form = new FormGroup({
    haslo: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.haslo != null && this.replace(this.form.value.haslo) != 'podrozwnieznane') {
      alert('Oj... To chyba nie to hasło :(')
      result = false;
      return;
    }

    if(this.form.value.haslo == null){
      alert('Oj... Nie uzupełniłaś pola :(')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Brawo! Odgadłaś ostatni znak: 'E'. Zapamiętaj go i nikomu go nie podawaj :P");
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
