import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule , FormsModule, ReactiveFormsModule , ClarityModule
  ]
})
export class FormationModule { }
