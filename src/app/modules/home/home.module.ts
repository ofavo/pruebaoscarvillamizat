import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CreatePublicationsComponent } from './component/create-publications/create-publications.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { ProfileComponent } from './component/profile/profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CreatePublicationsComponent, PublicationsComponent, ProfileComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,	
    CommonModule,
    HomeRoutingModule
  ],
  providers:[PublicationsComponent],	
  schemas: [
	CUSTOM_ELEMENTS_SCHEMA
	]
})
export class HomeModule { }
