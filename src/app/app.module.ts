import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterpageComponent } from './views/registerpage/registerpage.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LbdModule } from './lbd/lbd.module';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,LbdModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
   LoginpageComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
