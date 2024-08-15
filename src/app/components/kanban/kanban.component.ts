import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TodoFormComponent } from './form/todo-form.component';
import { Todo } from './model/todo';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropListGroup,
    CdkDropList,
    CdkDragPlaceholder,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
})
export class KanbanComponent {
  private readonly dialog = inject(MatDialog);
  private readonly todoService = inject(TodosService);

  addTodo() {
    const dialogRef = this.dialog.open(TodoFormComponent);
    dialogRef.afterClosed().subscribe((todo: Todo) => {
      this.todoService.saveTodo(todo);
    });
  }
}
