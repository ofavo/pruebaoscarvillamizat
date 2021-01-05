import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = environment.api+'login'
  constructor(public http : HttpClient) { }
 
  sendData(env: any){
    const headers = new FormData();
   
    headers.append('email',env.email );
    headers.append('password',env.password);
    headers.append('applicantcode',env.applicantcode);
    

    return this.http.post(this.url, headers)
  }
}
