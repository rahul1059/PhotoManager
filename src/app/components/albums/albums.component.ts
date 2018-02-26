import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlbumService} from '../../services/album.service';
import {PhotosService} from '../../services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  selected:Array<number> = [];
  albums: any;
  id: number;
  private sub: any;
  constructor(private albumService : AlbumService,
      private photosService : PhotosService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumService.getUsers()
    .subscribe(data => this.albums = data);
    this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number

        // In a real app: dispatch action to load the details here.
    });
  }

  getAlbums() {
    return this.albums && this.albums.filter((item) => item.userId === this.id);
  }

  selectAlbum(event, id){
    if(event.checked){
      this.selected.push(id)
    }else{
      var idx = this.selected.indexOf(id);
      if (idx >= 0) {
        this.selected.splice(idx, 1);
      } 
    }
    this.photosService.setSeletedId(this.selected);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
