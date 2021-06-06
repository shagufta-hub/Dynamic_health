import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LbdModule } from "app/lbd/lbd.module";
import { LoginpageComponent } from "./loginpage.component";
import { LoginRouting } from "./loginpage.routing";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      // LbdModule
      LoginRouting
    ],
    // declarations: [LoginpageComponent],
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    // exports: [SearchfiltPipe]
    providers: []
  })
export class LoginpageModule{
    


}