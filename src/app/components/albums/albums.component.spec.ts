import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import {MatCardModule} from '@angular/material/card';
import {AlbumService} from '../../services/album.service';
import {PhotosService} from '../../services/photos.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {
  RouterTestingModule
} from '@angular/router/testing';




describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      imports: [ RouterTestingModule, MatCardModule, MatButtonModule, MatCheckboxModule, HttpClientModule ],
      providers: [AlbumService, HttpClient, PhotosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
