import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'app/views/Entity.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http: HttpClient) { }
  url: string = 'api/login';
  public doLogin():Observable<Array<LoginModel>>{
    return this._http.get<Array<LoginModel>>(this.url);
  }

}
