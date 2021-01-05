import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './services/login.service'
import { ToasterService} from '../../generals-services/toastr.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    profileForm = this.fb.group({
	
	applicantcode:['',[Validators.required]],
  	email: ['', [Validators.required, Validators.email]],
	password: ['',[Validators.required, Validators.minLength(4)]] 
    });
  
  constructor(public ruta : Router, public toastr: ToasterService ,public fb : FormBuilder, public http : LoginService ) {
}
  ngOnInit(): void {

  }
   
 
 sendData(){
	this.http.sendData(this.profileForm.value).subscribe((data: any)=>{
		this.toastr.success(data.msg)
		localStorage.setItem('id', data.data.iduser)
		localStorage.setItem('token',data.data.token)	
		localStorage.setItem('code',this.profileForm.value.applicantcode)	
 		this.ruta.navigateByUrl('/')
	}, err =>{
		this.toastr.error('Error')
	})	
 }

}
