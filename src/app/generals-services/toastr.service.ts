import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

    constructor(private toastr: ToastrService) {}

  	success(msj :any) {
    		this.toastr.success(msj);
	 };
	error(msj: any){
		this.toastr.error(msj);
	};
	
	info(msj: any){
		this.toastr.info(msj)
	}
}
