import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AlbumService, HttpClient]
    });
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
