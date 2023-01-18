import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}
  getToken(data:any){
    let options={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "content-type":"application/json"
      }
    }

    return fetch("http://127.0.0.1:8000/token/",options)
}
  addTasks(data:any){
    let token=localStorage.getItem("token")
    if (token){
      let option={
        "method":"post",
        "body":JSON.stringify(data),
        "headers":{
          "content-type":"application/json",
          "authorization":token
        }
      }
      return fetch("http://127.0.0.1:8000/tasks/",option)
    
    }
    else{
      return new Promise((res,rej)=>rej("failed to fetch data from resource"))
    }
  }
  listTask(){
    let token = localStorage.getItem("token")
    if(token){
      let options = {
        "method": "get",
        "headers": {
          "content-type": "application/json",
          "Authorization": token
        }
      }
      return fetch("http://127.0.0.1:8000/tasks/", options)
    }else{
      return new Promise((res,rej) => rej("Failed to fetch data from resource"))
    }
  }
}
