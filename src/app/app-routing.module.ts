import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuardService } from "./protected/auth-guard.service";

const routes: Routes = [
 	{
		path:'register',
		loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
	},
	{
		path:'login',
		loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
	},
	{
		path: '',
		loadChildren: () => import('./modules/init/init.module').then( m => m.InitModule),
 //canDeactivate : [AuthGuardService]
	}    
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
