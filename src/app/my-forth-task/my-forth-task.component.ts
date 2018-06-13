import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-forth-task',
  templateUrl: './my-forth-task.component.html',
  styleUrls: ['./my-forth-task.component.css']
})
export class MyForthTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyForthTaskComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  form = new FormGroup({
    winko: new FormControl(),
    szampan: new FormControl(),
    pizza: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.winko != null && this.replace(this.form.value.winko) != '8') {
      alert('Tylko jeść, pić, a liczyć to nie ma kto. Tyle winko nie kosztuje! :(')
      result = false;
      return;
    }
    if(this.form.value.szampan != null && this.replace(this.form.value.szampan) != '16') {
      alert('Tylko jeść, pić, a liczyć to nie ma kto. Tyle szampan nie kosztuje! :(')
      result = false;
      return;
    }
    if(this.form.value.pizza != null && this.replace(this.form.value.pizza) != '6') {
      alert('Tylko jeść, pić, a liczyć to nie ma kto. Tyle pizza nie kosztuje! :(')
      result = false;
      return;
    }
    if(this.form.value.winko == null || this.form.value.szampan == null || this.form.value.pizza == null){
      alert('Tylko jeść, pić, a liczyć to nie ma kto :( Uzupełnij wszystkie pola:(')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Wow! Ty to jest geniusz matematyczny! <3 Ukończyłaś przedostatnie zadanie- znak to: '4'. Zapamiętaj i nikomu go nie podawaj :P");
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
