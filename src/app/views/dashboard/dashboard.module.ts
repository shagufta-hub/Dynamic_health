import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LbdModule } from "app/lbd/lbd.module";
import { DashboardRouting } from "./dashboard.routing";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        DashboardRouting,LbdModule
    ],
    declarations:[],
     schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule{}