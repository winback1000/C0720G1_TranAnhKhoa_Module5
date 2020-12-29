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


const routes: Routes = [
  { path: 'font-size', component: ChangeFontSizeComponent },
  { path: 'pet', component: PetComponent },
  { path: 'color', component: ColorComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'student-management', component: StudentManagementComponent },
  { path: 'child-parent-testing', component: DataTransferComponent},
  { path: 'hacker-news', component: HackernewsComponent},
  { path: 'name-card', component: NameCardComponent},
  { path: 'progress-bar', component: ProgressBarComponent},
  { path: 'count-down', component: CountDownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
