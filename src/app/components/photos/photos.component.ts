import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../../services/photos.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  interval: any;
  count: number= 0;
  data: any;
  selectedIds: any = [];
  photos: any = [];
  constructor(private photosService : PhotosService) { }

  ngOnInit() {
    this.selectedIds = this.photosService.getSelectedId();
    this.photosService.getPhotos()
    .subscribe(data => {
      this.data = data;
      if(this.selectedIds.length > 0){
        var self = this;
        self.photos = self.setPhotos(self.selectedIds[self.count++]);
        this.interval = setInterval(function(){
          if(self.count < self.selectedIds.length){
            self.photos = self.setPhotos(self.selectedIds[self.count]);
            self.count++;
          }else{
            self.count = 0;
          }
          
        },20000)
      } else{
        this.photos = this.setPhotos(this.selectedIds[0]);
      }
      
    }); 
  }

  setPhotos(albumId){
    console.log(this.photos)
    const selectedPhotos = this.data && this.data.filter((item) => {
      return item.albumId === albumId;
    });
    return selectedPhotos;
  }

  getPhotos() {
    return this.photos && this.photos.filter((item) => {
      const index = this.selectedIds.indexOf(item.albumId);
      return index !== -1;
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
