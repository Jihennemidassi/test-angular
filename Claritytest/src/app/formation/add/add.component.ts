import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  form: FormGroup
  constructor(private fb : FormBuilder){
    this.form=fb.group({
      description:[''],
      title:['',Validators.required],
      nbHeure:['',Validators.required],
      specialite:['',Validators.required],
      logo:['',Validators.required]
    })
  }
}