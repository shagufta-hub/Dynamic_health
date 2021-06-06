import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from 'app/services/loginservice.service';
import { LoginModel, Registrationreq } from 'app/views/Entity.model';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  loginreq:LoginModel=new LoginModel();
  registerreq:Registrationreq=new Registrationreq();
  constructor(private _router:Router,private loginservice:LoginserviceService) { }

  ngOnInit() {
  }
  dologin(){
    // console.log("this is login=" ,this.loginreq.userName)
    
    this.loginservice.doLogin(this.loginreq).subscribe(data=>{
      console.log();
      this._router.navigate(['/dashboard']);
    },error=>{
      alert(error.error.message);
    })
  }
  doRegister(){
    console.log(this.registerreq);
    this.loginservice.createnewUser(this.registerreq).subscribe(data=>{
      console.log(data);
      this._router.navigate(['/dashboard']);
    },error=>{
      alert(error.error.message);
    })
  }




}
