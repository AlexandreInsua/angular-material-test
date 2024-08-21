import { Component, Input } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../model/todo';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todos-wrapper',
  standalone: true,
  imports: [CdkDropList, TodoComponent],
  templateUrl: './todos-wrapper.component.html',
  styleUrl: './todos-wrapper.component.scss',
})
export class TodostWrapperComponent {
  @Input() identifier!: string;
  @Input() todos!: Todo[];
}
