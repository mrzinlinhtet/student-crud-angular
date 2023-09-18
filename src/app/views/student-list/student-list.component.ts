import { Component } from '@angular/core';
import { StudentInterface } from 'src/app/StudentInterface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'stu-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {

  list: StudentInterface[]  = [];

  constructor(service:StudentsService) {
    this.list = service.getList();
  }

}
