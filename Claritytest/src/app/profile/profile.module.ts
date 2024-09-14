import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CheckComponent } from './check/check.component';
import { ProfilRoutingModule } from './profil--routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    CheckComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule, ProfilRoutingModule, ClarityModule , FormsModule , ReactiveFormsModule
  ]
})
export class ProfileModule { }
