import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  public arr = localStorage.getItem('myKey') == null ? [
    {
      name: 'Вова',
      lastname: 'Купріянов',
      checked: false,
      edit: true,
      id: 0
    },
    {
      name: 'Віталій',
      lastname: 'Мельник',
      checked: true,
      edit: false,
      id: 1
    },
    {
      name: 'Анатолій',
      lastname: 'Висоцький',
      checked: false,
      edit: false,
      id: 2
    },
  ] : JSON.parse(localStorage.getItem('myKey'));
  name: any;
  lastname: any;
  valuename: any;
  valuelastname: any;


  constructor() { }

  ngOnInit() {
  }
  public create(name , lastname, valueLast, valueName) {
    const id = this.arr.length > 0 ? this.arr[this.arr.length - 1].id + 1 : 0;
    this.arr.push({name, lastname, checked: false, id });
    this.save();
    this.clearForm(valueLast, valueName);
  }
  public remove(index) {
    this.arr.splice(index, 1);
    this.save();
  }
  public onchange(index) {
    this.arr[index].checked = !this.arr[index].checked;
    this.save();
  }
  private save() {
    const serialObj = JSON.stringify(this.arr);
    localStorage.setItem('myKey', serialObj);
  }
  private clearForm(valueLast, valueName) {
    valueLast.value = '';
    valueName.value = '';
  }
  public edit(index) {
    this.arr[index].edit =  !this.arr[index].edit;
    if (!this.arr[index].edit) {this.save(); }
  }
}
