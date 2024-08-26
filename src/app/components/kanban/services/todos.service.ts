import { Injectable } from '@angular/core';
import { Todo, TodoStatusEnum } from '../model/todo';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  TODOS_KEY = 'TODOS';
  _todos: Todo[] = [];

  constructor() {
    this._todos = JSON.parse(
      window.localStorage.getItem(this.TODOS_KEY) || '[]'
    );
  }

  get pedingtodos() {
    return this._todos.filter(todo => todo.status === TodoStatusEnum.PENDING);
  }

  saveTodo(data: { title: string; description: string }) {
    const todo: Todo = {
      ...data,
      uid: uuid.v4(),
      createAt: new Date().getTime(),
      status: TodoStatusEnum.PENDING,
    };
    this._todos.push(todo);
    window.localStorage.setItem(this.TODOS_KEY, JSON.stringify(this._todos));
  }

  saveTodosList(todos: Todo[]): void {
    console.log(this._todos, todos);
    this._todos = this._todos.filter(todo => !todos.includes(todo));
    this._todos.push(...todos);
    window.localStorage.setItem(this.TODOS_KEY, JSON.stringify(this._todos));
  }
}
