import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService, HttpClient]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an url', inject([UserService], (service: UserService) => {
    expect(service.usersUrl).toBeTruthy();
  }));

});
