import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor (private profileService: ProfileService ){
    
  }
  @Input("idUser")
  idUser:number=0
  @Output() 
  close: EventEmitter<any> = new EventEmitter();
  @Output() 
  save: EventEmitter<any> = new EventEmitter();
 
  ngOnInit(): void {
    console.log("iduser delete",this.idUser)
    
  }
  colseAction(){
    this.close.emit(true)
  }
  saveAction(){
    this.save.emit(true)
    console.log("hello save", this.save)
    this.profileService.deletePeofile(this.idUser).subscribe(ps=>{
      console.log(ps)
    })
  }
  
  }
  