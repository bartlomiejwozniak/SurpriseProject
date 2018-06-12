import {Component, Inject, Injectable, } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-my-third-task',
  templateUrl: './my-third-task.component.html',
  styleUrls: ['./my-third-task.component.css']
})
export class MyThirdTaskComponent {
  constructor(public dialogRef: MatDialogRef<MyThirdTaskComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  form = new FormGroup({
    restaurants: new FormControl(),
    places: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.places != null && !(this.replace(this.form.value.places).indexOf('bydgoszcz') >= 0
      && this.replace(this.form.value.places).indexOf('warszawa') >= 0 && this.replace(this.form.value.places).indexOf('zakopane') >= 0)) {
      alert('Nie podałać 3 prawidłowych miast. Zawsze możesz zadzwonić do przyjaciela!')
      result = false;
      return;
    }
    if(this.form.value.restaurants != null && !(this.replace(this.form.value.restaurants).indexOf('cma') >= 0 && this.replace(this.form.value.restaurants).indexOf('grand') >= 0
      && this.replace(this.form.value.restaurants).indexOf('fusion') >= 0 && this.replace(this.form.value.restaurants).indexOf('rozana') >= 0)) {
      alert('Nie podałać 4 prawidłowych restauracji. Zawsze możesz zadzwonić do przyjaciela!')
      result = false;
      return;
    }
    if(this.form.value.restaurants == null || this.form.value.places == null){
      alert('Oj... Uzupełnij wszystkie pola:(')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Superowo! Ukończyłaś trzecie zadanie! Twoją nagrodą to trzeci znak tajnego hasła. Znak to: 'A'. Zapamiętaj i nikomu go nie podawaj :P");
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
