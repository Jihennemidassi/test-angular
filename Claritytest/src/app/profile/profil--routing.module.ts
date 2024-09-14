import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CheckComponent } from './check/check.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
 {path:"add", component:AddComponent},
 {path:"delete",component:DeleteComponent},
 {path:"", component: CheckComponent},
 {path:"update/:id", component:UpdateComponent},
 {path:"details/:id", component:DetailsComponent}
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
export class ProfilRoutingModule { }
