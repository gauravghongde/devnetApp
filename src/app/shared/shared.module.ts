import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { VoteBadgeComponent } from './vote-badge/vote-badge.component';



@NgModule({
  declarations: [LoaderComponent,NavbarComponent, VoteBadgeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent,
    VoteBadgeComponent
  ]
})
export class SharedModule { }
