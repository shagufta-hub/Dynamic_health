import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DashboardRouting } from "./dashboard.routing";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        DashboardRouting
    ],
    declarations:[]
})

export class DashboardModule{}