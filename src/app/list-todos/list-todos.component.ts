import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id : number,
    public description : String,
    public isCompleted : boolean,
    public targetDate : Date){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message: string
  todos : Todo[] 
  //= [
  //   new Todo(1,'Learn To Dance', false, new Date()),
  //   new Todo(2,'Become an expert', false, new Date()),  
  //   new Todo(3,'Visit America', false, new Date()),
  //   new Todo(4,'Visit London', false, new Date())
  // ]
  // todo = {
  //   id : 1,
  //   description: 'Lear to Dance'
  // }
  constructor(
    private todoService : TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoService.retreiveAllTodos('m_sampras').subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodoById('m_sampras',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete has been successful ${id}`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`Update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
