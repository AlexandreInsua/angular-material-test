import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

interface DialogData {
  title?: string | null | undefined;
  description?: string | null | undefined;
}

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['My title', { validators: [Validators.required] }],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      { validators: [Validators.required] },
    ],
  });

  constructor(public dialogRef: MatDialogRef<TodoFormComponent>) {}

  saveData(): void {
    this.dialogRef.close(this.form.value);
  }
}
