import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [MatButtonModule],
})
export class LoginComponent {
  public color: string = 'warn';
  public label: string = 'login';

  private userService: UserService = inject(UserService);

  ngOnInit() {}

  toggleLog() {
    this.userService.isLogged = !this.userService.isLogged;
    if (this.userService.isLogged) {
      this.color = 'primary';
      this.label = 'log out';
    } else {
      this.color = 'warn';
      this.label = 'login';
    }
  }
}
