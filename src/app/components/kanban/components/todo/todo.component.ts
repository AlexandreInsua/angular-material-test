import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe, MatCardModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo!: Todo;
}
