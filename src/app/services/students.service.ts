import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private list:Array<any>

  constructor() { 
    this.list = [
      {
        name: "John",
        age: 30,
        phone: "09738373833",
        address: "MDY"
      },
      {
        name: "Jane",
        age: 20,
        phone: "09738373833",
        address: "YGN"
      },
      {
        name: "Joe",
        age: 40,
        phone: "09738373833",
        address: "MDY"
      }
    ];
  }

  save(s:any) {
    this.list.push(s);
  }

  getList() {
    return this.list;
  
   }
}
