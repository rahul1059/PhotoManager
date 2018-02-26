import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {UserService} from '../../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [ RouterTestingModule,MatCardModule, MatButtonModule, MatCheckboxModule , HttpClientModule],
      providers: [UserService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
