import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  saveTodo(todo: Todo) {
    console.log('save todo');
    console.log(todo);
  }
}
