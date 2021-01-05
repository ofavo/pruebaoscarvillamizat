import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment'
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public urlget =  environment.api+'posts/viewbyiduser';
  public urlpost = environment.api+'posts/create';
  public urldelete = environment.api+'posts/delete';
  code : any = ""
  id : any = ""
  token : any = ""
  constructor(public http: HttpClient) {
	
  this.code  = localStorage.getItem('code') 
  this.id  = localStorage.getItem('id')
  this.token  = localStorage.getItem('token')
	 }

  
  sendData(env: any){
    const headers = new FormData();
   
    headers.append('token',this.token.toString());
    headers.append('iduser',this.id.toString());
    headers.append('applicantcode',this.code.toString());
    headers.append('description',env.descripcion); 

    return this.http.post(this.urlpost, headers)
  }
  getDatauser(){
    const headers = new FormData();
   
    headers.append('token',this.token);
    headers.append('iduser',this.id);
    headers.append('applicantcode',this.code);
    

    return this.http.post(this.urlget, headers)
	}
  
  deleteData(ids :any){
    const headers = new FormData();
   
    headers.append('token',this.token);
    headers.append('idpost',ids);
    headers.append('applicantcode',this.code);
    

    return this.http.post(this.urldelete, headers)
	}
  
}
