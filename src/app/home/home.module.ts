// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { HomeComponent } from './home.component'; // <-- Import HomeComponent
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent, // <-- Declare HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // <-- Add FormsModule here
    HttpClientModule
  ],
})
export class HomeModule {}