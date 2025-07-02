import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('TableService', () => {
  let service: UserService;
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    service.getUsers().subscribe();

    const req = httpTesting.expectOne('https://dummyjson.com/users');
    expect(req.request.method).toBe('GET');
    req.flush({});
    httpTesting.verify();
  });
});
