import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number=0;
  res: any;
  profile: any;
  constructor(private route: ActivatedRoute ,private profileService :ProfileService){}
 ngOnInit(): void {
   this.res=this.route.params.pipe(map((p) => p['id']));
   console.log( this.res.source.value.id)
   this.id=this.res.source.value.id
   this.profileService.getProfile(Number(this.id)).subscribe(data=>{
    console.log(data)
    this.profile=data
   })
 }
}