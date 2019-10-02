import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  public arr = localStorage.getItem('myKey') == null ? [
    {
      name: 'sergey',
      lastname: 'lisitskiy',
      checked: false,
      edit: true,
      id: 0
    },
    {
      name: 'sergey1',
      lastname: 'lisitskiy1',
      checked: true,
      edit: false,
      id: 1
    },
    {
      name: 'sergey2',
      lastname: 'lisitskiy2',
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
  public create(name , lastname) {
    const id = this.arr.length > 0 ? this.arr[this.arr.length - 1].id + 1 : 0;
    this.arr.push({name, lastname, checked: false, id });
    this.save();
    this.clearForm();
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
  private clearForm() {
    console.log();
    this.valuelastname = '';
  }
  public edit(index) {
    this.arr[index].edit =  !this.arr[index].edit;
    if (!this.arr[index].edit) {this.save(); }
  }
}
