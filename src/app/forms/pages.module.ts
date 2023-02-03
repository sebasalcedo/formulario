import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicialComponent } from './inicial/inicial.component';
import { Capt1Component } from './capt1/capt1.component';
import { Capt2Component } from './capt2/capt2.component';
import { Capt3Component } from './capt3/capt3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicialComponent,  Capt1Component,  Capt2Component,  Capt3Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ], exports: [
    InicialComponent,

  ]
})
export class PagesModule { }
