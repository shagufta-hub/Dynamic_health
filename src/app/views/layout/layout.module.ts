import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterlayoutComponent } from "../component/footerlayout/footerlayout.component";
import { HeaderlayoutComponent } from "../component/headerlayout/headerlayout.component";
import { SidebarlayoutComponent } from "../component/sidebarlayout/sidebarlayout.component";
import { LayoutComponent } from "./layout.component";
import { LayoutRouting} from "./layout.routing";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        LayoutRouting
    ],
    exports:[LayoutComponent],
    declarations:[LayoutComponent,HeaderlayoutComponent,SidebarlayoutComponent,FooterlayoutComponent]
})

export class LayoutModule{}