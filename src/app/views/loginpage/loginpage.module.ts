import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoginpageComponent } from "./loginpage.component";

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [LoginpageComponent],
    // exports: [SearchfiltPipe],
    // providers: [ FieldValidation, NgxSpinnerService, deliverychallanService]
  })
export class LoginpageModule{
    


}