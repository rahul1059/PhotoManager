import { TestBed, inject } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PhotosService, HttpClient]
    });
  });

  it('should be created', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an url', inject([PhotosService], (service: PhotosService) => {
    expect(service.photoUrl).toBeTruthy();
  }));

  it('should have an empty selected albums', inject([PhotosService], (service: PhotosService) => {
    expect(service.getSelectedId().length).toBe(0);
  }));

  it('should update selected albums when album is added', inject([PhotosService], (service: PhotosService) => {
    service.setSeletedId([1,2,3]);
    expect(service.getSelectedId().length).toBe(3);
  }));

  it('should return an Observable<Array<>>', inject([PhotosService], (service: PhotosService) => {
    const result = service.getPhotos();
    console.log(result)
    expect(result).toBeTruthy(3);
  }));

});
