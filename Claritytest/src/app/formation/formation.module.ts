import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DeleteComponent } from './delete/delete.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AddComponent,
    DeleteComponent,
    ListeFormationComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule , FormsModule, ReactiveFormsModule , ClarityModule
  ]
})
export class FormationModule { }
