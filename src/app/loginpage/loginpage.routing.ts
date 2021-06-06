
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
    path: '',
    component: LoginpageComponent
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LoginRouting{

}