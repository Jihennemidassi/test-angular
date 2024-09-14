import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient) { 

  }
  createProfile(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/user/create-user/',data) as Observable<any>
  }
  getListUser():Observable<any>{
    return this.http.get('http://localhost:3000/user/liste-user/') as Observable<any>
  }
  deletePeofile(id:number):Observable<any>{
    return this.http.delete('http://localhost:3000/user/delete-user/'+JSON.stringify(id)) as Observable <any>
  }
  getProfile(id:Number):Observable<any>{
    return this.http.get('http://localhost:3000/user/user/'+JSON.stringify(id))
  }
  UpdateProfile(id:Number , data: any):Observable<any>{
    return this.http.patch('http://localhost:3000/user/update-user/'+String(id),data)as Observable<any>
  }
  
}
