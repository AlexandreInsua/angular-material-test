import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../../model/todo';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

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

  @Output() updatedList = new EventEmitter<Todo[]>();

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    this.updatedList.emit(this.todos);
  }
}
