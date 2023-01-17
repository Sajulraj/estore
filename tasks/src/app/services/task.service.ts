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
        "contet-type":"application/json"
      }
    }

    return fetch("http://127.0.0.1:8000/token/",options)
}
}
