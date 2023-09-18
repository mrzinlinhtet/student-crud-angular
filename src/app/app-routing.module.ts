import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './views/student-list/student-list.component';
import { StudentEditComponent } from './views/student-edit/student-edit.component';

const routes: Routes = [
  {path: 'list', component: StudentListComponent},
  {path: 'registration', component: StudentEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
