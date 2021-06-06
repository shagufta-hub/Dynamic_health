import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HeaderlayoutComponent } from './headerlayout.component';

const routes: Routes = [{
    path: '',
    component: HeaderlayoutComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Headerrouting{

}