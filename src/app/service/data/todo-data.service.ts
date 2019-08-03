import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient
  ) { }

  retreiveAllTodos(username){
    return (this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`));
    //console.log("executeHelloWorldBeanService");
  }

  deleteTodoById(username, id){
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retreiveTodoById(username, id){
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodoById(username, id,todo){
    return this.http.
    put(
      `${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  addToDo(username,todo){
    return this.http.
    post(
      `${JPA_API_URL}/users/${username}/todos`, todo);

  }
  
}
