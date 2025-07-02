import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './service/user-service';
import { MatCardModule } from '@angular/material/card';
import { IUser } from './domain/user';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [MatCardModule, MatTableModule],
})
export class TableComponent implements OnInit {
  userServie = inject(UserService);
  userDataSource: IUser[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'gender',
    'birthDate',
  ];
  ngOnInit() {
    this.userServie.getUsers().subscribe({
      next: data => {
        console.log(data);
        this.userDataSource = data.users;
      },
      error: err => {
        console.error('Error fetching users:', err);
      },
    });
  }
}
