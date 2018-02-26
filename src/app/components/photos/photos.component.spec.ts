import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import {PhotosService} from '../../services/photos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports: [ MatCardModule, MatButtonModule, MatCheckboxModule, HttpClientModule ],
      providers: [PhotosService, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
