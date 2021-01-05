import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ToasterService } from '../../../../generals-services/toastr.service';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
	 public data : any = []
  constructor(public http : HomeService, public toastr: ToasterService) { }

  ngOnInit(): void {
	this.callData()
  };
	callData() {
		this.data = []
		
  	this.http.getDatauser().subscribe((data : any) =>{
		this.data = data.data;
	 
		})	
	}
	borrar(id: any){
		this.http.deleteData(id).subscribe((data:any) =>{
			this.callData();
			this.toastr.success(data.msg)
		})	
	}
}
