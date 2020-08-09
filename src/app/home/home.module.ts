import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
