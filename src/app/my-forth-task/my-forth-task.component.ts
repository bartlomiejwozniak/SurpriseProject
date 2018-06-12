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
    result: new FormControl()
  });

  public closeDialog(){
    var result = true;
    if(this.form.value.result != null && this.replace(this.form.value.result) != 'niespodzianka') {
      alert('Błędne hasło! To zadanie nie jest takie łatwe. Zapisz hasło na kartce i pomyśl co jeszcze z nim musisz zrobić :)')
      result = false;
      return;
    }
    if(this.form.value.result == null){
      alert('Oj... Uzupełnij pole:(')
      result = false;
      return;
    }

    if(result) {
      this.dialogRef.close();
      alert("Wow! Ukończyłaś drugie zadanie :D Zawsze mogę na Ciebie liczyć! Zdobyłaś drugi znak do tajnego hasła. Znak to: '&'. Zapamiętaj i nikomu go nie podawaj :P");
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
