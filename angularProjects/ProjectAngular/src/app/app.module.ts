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

@NgModule({
  declarations: [
    AppComponent,
    ChangeFontSizeComponent,
    PetComponent,
    BootstrapComponent,
    CalculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
