import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form:FormGroup
  constructor(private fb:FormBuilder ,private profileService: ProfileService ){
    this.form=fb.group({
  name:['',Validators.required],
  lastname:['',Validators.minLength(2)],
  email:['',Validators.email],
  age:['']
    })
  }
  ngOnInit(): void {
    
    }
    submit(){
      console.log(this.form.value)
      this.profileService.createProfile(this.form.value).subscribe(ps=>{
        console.log(ps)
      })
    }
    
  }


