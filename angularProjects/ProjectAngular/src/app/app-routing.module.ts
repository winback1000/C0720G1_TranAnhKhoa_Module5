import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeFontSizeComponent } from './03_Angular_Overview/thuc_hanh/change-font-size/change-font-size.component';
import {PetComponent} from "./03_Angular_Overview/thuc_hanh/pet/pet.component";
import {ColorComponent} from "./03_Angular_Overview/bai_tap/color/color.component";
import {CalculatorComponent} from "./03_Angular_Overview/bai_tap/calculator/calculator.component";
import {StudentManagementComponent} from "./student-management/student-management.component";
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { NameCardComponent } from './name-card/name-card.component';
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {CountDownComponent} from "./count-down/count-down.component";
import {TodoComponent} from "./todo/todo.component";
import {CreateStudentComponent} from "./student-management/create-student/create-student.component";
import {StudentDetailComponent} from "./student-management/student-detail/student-detail.component";
import {EditStudentComponent} from "./student-management/edit-student/edit-student.component";
import {DeleteStudentComponent} from "./student-management/delete-student/delete-student.component";


const routes: Routes = [
  { path: 'font-size', component: ChangeFontSizeComponent },
  { path: 'pet', component: PetComponent },
  { path: 'color', component: ColorComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'child-parent-testing', component: DataTransferComponent},
  { path: 'hacker-news', component: HackernewsComponent},
  { path: 'name-card', component: NameCardComponent},
  { path: 'progress-bar', component: ProgressBarComponent},
  { path: 'count-down', component: CountDownComponent},
  { path: 'todo', component: TodoComponent},

  { path: 'student-management', component: StudentManagementComponent },
  { path: 'create-student', component: CreateStudentComponent},
  { path: 'student-management/detail/:id', component: StudentDetailComponent},
  { path: 'student-management/edit/:id', component: EditStudentComponent},
  { path: 'student-management/delete/:id', component: DeleteStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
