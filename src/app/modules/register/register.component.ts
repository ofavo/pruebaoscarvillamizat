import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../generals-services/must-match.validator';
import { RegisterService } from './services/register.service'
import { ToasterService} from '../../generals-services/toastr.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    profileForm = this.fb.group({
	email: ['', [Validators.required, Validators.email]],
	nickname:['',[Validators.required]],
	applicantcode:['',[Validators.required]],
	password: ['',[Validators.required, Validators.minLength(4)]],

 
    });
  constructor(public ruta : Router, public toastr: ToasterService ,public fb : FormBuilder, public http : RegisterService ) {
	
 }

  ngOnInit(): void {

  }
   
 sendData(){
	this.http.sendData(this.profileForm.value).subscribe((data: any)=>{
		this.toastr.success(data.msg)
		this.ruta.navigateByUrl('login')
	}, err =>{
		this.toastr.error('Error')
	})	
 }

}
