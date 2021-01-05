import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public data : any = []
  constructor(public http : ProfileService) { }

  ngOnInit(): void {
 	this.http.sendData().subscribe((data: any) =>{
		this.data = data.data
	})

  }

}
