import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos : any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(text: string) {
    this.todoService.create({text})
      .subscribe({
        next:(newTodo) => this.todos.push(newTodo)}) 
  }

  toggleComplete(todo: any) {
    todo.complete = !todo.complete;
    
    this.todoService.update(todo)
      .subscribe();
  }
}
