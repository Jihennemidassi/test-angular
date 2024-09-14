import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form:FormGroup
  id:number=1
  res: any

  constructor(private fb:FormBuilder , private profileService:ProfileService , private route : ActivatedRoute){

    this.form=fb.group({
  name:['',Validators.required],
  lastname:['',Validators.minLength(2)],
  email:['',Validators.email],
  age:[0]
    })
  }
  ngOnInit(): void {
    this.res=this.route.params.pipe(map((p) => p['id']));
    console.log(this.res.source.value.id)
   this.profileService.getProfile(Number(this.id)).subscribe(data=>{
    console.log(data)
    this.form.patchValue(data)
   })
    
  }
  submit(){
    console.log(this.id)
    this.profileService.UpdateProfile(this.id, this.form.value).subscribe(ps=>{
      console.log(ps)
    })
  }
}
