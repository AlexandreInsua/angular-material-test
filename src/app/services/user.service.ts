import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _logged: boolean = false;

  get isLogged() {
    return this._logged;
  }

  set isLogged(value: boolean) {
    this._logged = value;
  }
}
