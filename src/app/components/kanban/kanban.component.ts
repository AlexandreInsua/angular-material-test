import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TodoFormComponent } from './form/todo-form.component';
import { Todo } from './model/todo';
import { TodosService } from './services/todos.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';

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
    TodoListComponent,
  ],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
})
export class KanbanComponent implements OnInit {
  pedingtodos: Todo[] = [];
  activetodos: Todo[] = [];
  donetodos: Todo[] = [];
  private readonly dialog = inject(MatDialog);
  private readonly todoService = inject(TodosService);

  ngOnInit(): void {
    this.pedingtodos = this.todoService.pedingtodos;
    console.log(this.pedingtodos);
  }

  addTodo() {
    const dialogRef = this.dialog.open(TodoFormComponent);
    dialogRef.afterClosed().subscribe((todo: Todo) => {
      if (todo) this.todoService.saveTodo(todo);
    });
  }
}
