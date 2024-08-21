import { Component, Input } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos-wrapper',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todos-wrapper.component.html',
  styleUrl: './todos-wrapper.component.scss',
})
export class TodostWrapperComponent {
  @Input() identifier!: string;
  @Input() todos!: Todo[];
}
