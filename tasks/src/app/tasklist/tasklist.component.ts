import { TaskService } from './../services/task.service';
import { Component,Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit,OnChanges{
  @Input()inpt:boolean=false
  allTask:any
  constructor(private service:TaskService){
  }
  ngOnInit(): void {
    
    this.service.listTask().then((res:any)=>res.json()).then(data=>this.allTask=data).catch(err=>alert(err))
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.inpt);
    ;
    if (this.inpt){
      this.service.listTask().then((res:any)=>res.json()).then(data=>this.allTask=data).catch(err=>alert(err))
    }
    
  }
}
