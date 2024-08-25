import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

// interface DialogData {
//   title?: string | null | undefined;
//   description?: string | null | undefined;
// }

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
  fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    title: ['', { validators: [Validators.required] }],
    description: ['', { validators: [Validators.required] }],
  });

  constructor(public dialogRef: MatDialogRef<TodoFormComponent>) {}

  saveData(): void {
    this.dialogRef.close(this.form.value);
  }
}
