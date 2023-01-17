import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:TaskService,private router:Router){

  }
  loginform=new FormGroup(
  {"username":new FormControl("",[Validators.required]),
  "password":new FormControl("",[Validators.required])

  }
)


get username(){
  return this.loginform.get("username")
}
get password(){
  return this.loginform.get("password")
}
authenticate(){
 let data=this.loginform.value
 this.service.getToken(data).then(res=>res.json().then(data=>{
  let token=data.token
  localStorage.setItem("token","Token "+token)
  this.router.navigateByUrl("home")
 }
 
 ))
  
}
}