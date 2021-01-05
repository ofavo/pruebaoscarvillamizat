import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Red-Social-Oscar-Villamizar';

    constructor(public ruta: Router) {
	if(localStorage.getItem('token')){
		this.ruta.navigateByUrl('/')
	}else{
		this.ruta.navigateByUrl('login')
	}	
	}  

}
