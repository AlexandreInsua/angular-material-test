import { Injectable } from '@angular/core';
import { Todo, TodoStatusEnum } from '../model/todo';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  TODOS_KEY = 'TODOS';
  todos: Todo[] = [];

  constructor() {
    this.todos = JSON.parse(
      window.localStorage.getItem(this.TODOS_KEY) || '[]'
    );
  }

  get pedingtodos() {
    return this.todos.filter(todo => todo.status === TodoStatusEnum.PENDING);
  }

  saveTodo(data: { title: string; description: string }) {
    const todo: Todo = {
      ...data,
      uid: uuid.v4(),
      createAt: new Date().getTime(),
      status: TodoStatusEnum.PENDING,
    };
    this.todos.push(todo);
    window.localStorage.setItem(this.TODOS_KEY, JSON.stringify(this.todos));
  }
}
