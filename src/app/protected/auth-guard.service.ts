import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
	let storage = localStorage.getItem('token')
    if(!storage ){
		this.router.navigateByUrl('login')
		
	}else{
		return true
	}

    return true;
  }
}

