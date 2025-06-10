import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import {
  catchError,
  delay,
  EMPTY,
  retry,
  Subject,
  switchMap,
  timer,
} from 'rxjs';

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
export class PetitionComponent implements OnInit {
  init = true;
  waiting = false;
  errorMessage = '';
  successMessage = '';

  private click$ = new Subject<void>();
  private readonly http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.click$
      .pipe(
        delay(1000),
        switchMap(() =>
          this.http.get('http://demo3559982.mockable.io/test').pipe(
            retry({
              count: 10,
              delay: (error: any, retryCounter: number) => {
                if (error?.status === HttpStatusCode.Conflict) {
                  this.waiting = false;
                  this.errorMessage = `Error ${error?.status} Retry: ${retryCounter} ${new Date().toLocaleTimeString()}`;
                  return timer(2000);
                }
                throw error;
              },
            }),
            catchError(error => {
              this.errorMessage = `Fatal error ${error?.status} ${new Date().toLocaleTimeString()}`;
              console.error(this.errorMessage);
              return EMPTY;
            })
          )
        )
      )
      .subscribe((response: any) => {
        this.waiting = false;
        this.errorMessage = '';
        this.successMessage = response.msg;
      });
  }

  performRequest() {
    this.init = false;
    this.waiting = true;
    this.click$.next();
  }
}
