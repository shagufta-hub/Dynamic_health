import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, Registrationreq } from 'app/views/Entity.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http: HttpClient) { }
  url: string = 'api/login';


  public doLogin(userdetails: LoginModel): Observable<any> {
      return this._http.post<any>('api/login/admin', userdetails);
  }
  public createnewUser(req:Registrationreq):Observable<Registrationreq>{
      
    return this._http.post<Registrationreq>('api/registration',req);

}

}
