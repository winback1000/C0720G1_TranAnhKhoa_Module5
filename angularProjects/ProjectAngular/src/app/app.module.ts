import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeFontSizeComponent } from './03_Angular_Overview/thuc_hanh/change-font-size/change-font-size.component';
import {PetComponent} from "./03_Angular_Overview/thuc_hanh/pet/pet.component";
import { BootstrapComponent } from './03_Angular_Overview/thuc_hanh/bootstrap/bootstrap.component';
import { CalculatorComponent } from './03_Angular_Overview/bai_tap/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorComponent } from './03_Angular_Overview/bai_tap/color/color.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { MatSliderModule } from '@angular/material/slider';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildComponent } from './data-transfer/child/child.component';
import { StudentDetailComponent } from './student-management/student-detail/student-detail.component';

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
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
