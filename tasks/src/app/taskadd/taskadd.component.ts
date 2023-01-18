import { TaskService } from './../services/task.service';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent {
 taskform=new FormGroup({
  "task_name":new FormControl("",[Validators.required])
 })
 get task_name(){
  return this.taskform.get("task_name")
 }
 createtask(){
  let data=this.taskform.value
  this.service.addTasks(data).then((res:any)=>res.json()).then(data=>console.log("task created")
  ).catch(err=>alert(err))
  this.notify.emit(true)
 }
 constructor(private service:TaskService){

 }
 @Output()notify:EventEmitter<boolean>=new EventEmitter<boolean>()
}
