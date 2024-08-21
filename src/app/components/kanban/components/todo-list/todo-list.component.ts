import { Component, Input } from '@angular/core';
import { TodostWrapperComponent } from '../todos-wrapper/todos-wrapper.component';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodostWrapperComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() title!: string;
  @Input() identifier!: string;
  @Input() todos!: Todo[];
}
