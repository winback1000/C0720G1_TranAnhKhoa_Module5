import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './03_Angular_Overview/thuc_hanh/change-font-size/change-font-size.component';
import {PetComponent} from "./03_Angular_Overview/thuc_hanh/pet/pet.component";
import { BootstrapComponent } from './03_Angular_Overview/thuc_hanh/bootstrap/bootstrap.component';
import { CalculatorComponent } from './03_Angular_Overview/bai_tap/calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorComponent } from './03_Angular_Overview/bai_tap/color/color.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { MatSliderModule } from '@angular/material/slider';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildComponent } from './data-transfer/child/child.component';
import { StudentDetailComponent } from './student-management/student-detail/student-detail.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { NewArticleComponent } from './hackernews/new-article/new-article.component';
import { LikesComponent } from './hackernews/likes/likes.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountDownComponent } from './count-down/count-down.component';
import { RemainTimeComponent } from './count-down/remain-time/remain-time.component';
import { TodoComponent } from './todo/todo.component';
import { CreateStudentComponent } from './student-management/create-student/create-student.component';
import { EditStudentComponent } from './student-management/edit-student/edit-student.component';
import { DeleteStudentComponent } from './student-management/delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent,
    PetComponent,
    BootstrapComponent,
    CalculatorComponent,
    ColorComponent,
    StudentManagementComponent,
    DataTransferComponent,
    ChildComponent,
    StudentDetailComponent,
    HackernewsComponent,
    NewArticleComponent,
    LikesComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountDownComponent,
    RemainTimeComponent,
    TodoComponent,
    CreateStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
