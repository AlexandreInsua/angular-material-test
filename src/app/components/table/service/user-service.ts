import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser, IUsersResponse } from '../domain/user';

const baseApi = 'https://dummyjson.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  getUsers() {
    return this.http.get<IUsersResponse>(baseApi);
  }
}
