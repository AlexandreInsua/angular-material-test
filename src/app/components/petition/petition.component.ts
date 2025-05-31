import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { of, retry, timer } from 'rxjs';

@Component({
  selector: 'app-petition',
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './petition.component.html',
  styleUrl: './petition.component.scss',
})
export class PetitionComponent {
  private readonly http: HttpClient = inject(HttpClient);

  performRequest() {
    this.http
      .get('http://demo3559982.mockable.io/test')
      .pipe(
        retry({
          count: 10,
          delay: (error: any, retryCounter: number) => {
            console.log(
              `Error ${error?.code} Retry: ${retryCounter} ${new Date()}`
            );
            return timer(2000);
          },
        })
      )
      .subscribe(response => console.log(response));
  }
}
