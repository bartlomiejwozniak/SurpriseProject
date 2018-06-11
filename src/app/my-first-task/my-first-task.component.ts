import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-first-task',
  templateUrl: './my-first-task.component.html',
  styleUrls: ['./my-first-task.component.css']
})
export class MyFirstTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyFirstTaskComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  form = new FormGroup({
    year: new FormControl(),
    restaurant: new FormControl(),
    city: new FormControl(),
    club: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.year != null && this.replace(this.form.value.year) != '2011') {
      alert('Oj... Chyba w innym roku się poznaliśmy :(')
      result = false;
      return;
    }
    if(this.form.value.restaurant != null && this.replace(this.form.value.restaurant) != 'polskarozana') {
      alert('Oj... Chyba była to inna restauracja:(')
      result = false;
      return;
    }
    if(this.form.value.city != null && this.replace(this.form.value.city) != 'zakopane') {
      alert('Oj... Chyba była to inna miejscowość:(')
      result = false;
      return;
    }
    if(this.form.value.club != null && this.replace(this.form.value.club) != 'dekompresja') {
      alert('Oj... Chyba był to inny klub :(')
      result = false;
      return;
    }

    if(this.form.value.year == null || this.form.value.restaurant == null || this.form.value.city == null || this.form.value.club == null){
      alert('Oj... Nie wszystkie pola uzupełniłaś :(')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Brawo! Jednak coś jeszcze pamiętasz ;) Zdobyłaś pierwszy znak do tajnego hasła. Znak to: 'B'. Zapamiętaj go i nikomu go nie podawaj :P");
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
