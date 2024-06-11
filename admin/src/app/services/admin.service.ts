import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  login_admin(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'login_admin', data, { headers: headers });
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public isAuthenticated(allowRoles:String[]):boolean{
    return true;
  }

}

