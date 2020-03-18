import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoaderComponent,NavbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
