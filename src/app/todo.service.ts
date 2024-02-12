import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL = 'http://localhost:4210/todos';
  apiURL1 = 'http://localhost:4210/todo/new';
   

  constructor(private http: HttpClient) { }

  getAll() { 
    return this.http.get<any>(this.apiURL);
  }

  create(todo: any) {
    return this.http.post<any>(this.apiURL1, todo); 
  }

  update(todo: any) {
    return this.http.put<any>(`${this.apiURL}/${todo._id}`, todo);
  }
}
