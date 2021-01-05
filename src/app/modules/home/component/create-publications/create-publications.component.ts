import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { PublicationsComponent } from '../publications/publications.component'
@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.scss']
})
export class CreatePublicationsComponent implements OnInit {
  public texto: string = "";
  constructor(public http : HomeService, public rute : Router, public publica: PublicationsComponent) { }

  ngOnInit(): void {
  	

  }
  public create() {
	let env = {
		descripcion: this.texto
	};
	this.http.sendData(env).subscribe((data: any) =>{
		
		this.publica.callData();
		window.location.reload();
         })
  }	
   	
}
