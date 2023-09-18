import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';


@Component({
  selector: 'stu-student-edit',
  templateUrl: './student-edit.component.html',
})
export class StudentEditComponent {

  studentForm: FormGroup;

  constructor(
    private service: StudentsService,
    builder: FormBuilder,
    private route: Router
  ) {
    this.studentForm = builder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]  
    })
  }

  save() {
    this.service.save(this.studentForm.value);
    this.route.navigate(['/list']);
  }

}
