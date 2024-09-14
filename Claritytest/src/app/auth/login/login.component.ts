import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form:FormGroup
constructor(private fb: FormBuilder , private authService:AuthService){
  this.form=this.fb.group({
    role:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    rememberMe:['',Validators.required]
  })
}
submit(){
  this.authService.login(this.form.value).subscribe(data=>{
    console.log("data",data)
  })
}
}
