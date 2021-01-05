import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment'
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public url =  environment.api+'users/viewbyid';

  
  code : any = ""
  id : any = ""
  token : any = ""
  constructor(public http: HttpClient) {
	
  this.code  = localStorage.getItem('code') 
  this.id  = localStorage.getItem('id')
  this.token  = localStorage.getItem('token')
 } 
  sendData(){
    const headers = new FormData();
   
    headers.append('token',this.token.toString());
    headers.append('iduser',this.id.toString());
    headers.append('applicantcode',this.code.toString());
    

    return this.http.post(this.url, headers)
  }
}
