import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../Entity.model';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  loginreq:LoginModel=new LoginModel();
  constructor() { }

  ngOnInit() {
  }
  login(){
    console.log("this is login=" ,this.loginreq.userName)
  }

}
