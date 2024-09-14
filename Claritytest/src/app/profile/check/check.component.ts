import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  liste:any
  l: any;
 // liste=[{"id":1,"name":"hajer", "age":20},{"id":2,"name":"ali","age":30},{"id":3,"name":"mohamed","age":18}]
constructor(private profileService: ProfileService){
  
}
  ngOnInit(): void {
  this.profileService.getListUser().subscribe(ps=>{
    this.liste=ps[0]
    this.l=this.liste.length
    console.log(ps)
  })
  }
  show=false
  showUpdate=false
  userId: number=0;
  showModale(id:number){
    this.show=true
    this.userId=id
  console.log(this.show,id)
}
  actionClose(){
    this.show=false
    this.profileService.getListUser().subscribe(ps=>{
      this.liste=ps[0]
      this.l=this.liste.length
      console.log(ps)
    })
}
actionSave(){
  this.show=false
  this.profileService.getListUser().subscribe(ps=>{
    this.liste=ps[0]
    this.l=this.liste.length
    console.log(ps)
  })
}
}
