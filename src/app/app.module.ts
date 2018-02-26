import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {UserService} from './services/user.service';
import {AlbumService} from './services/album.service';
import {PhotosService} from './services/photos.service';
import { RouterModule, Routes } from '@angular/router';

// Angular fire Imports
import {AngularFireModule} from 'angularfire2';
import {ClientService} from './services/client.service';

export const firebaseConfig = {
    apiKey: "AIzaSyCYKn8B9sM68654kSt9n2OHayw8siNC6KQ",
    authDomain: "photomanager-fa75a.firebaseapp.com",
    databaseURL: "https://photomanager-fa75a.firebaseio.com",
    projectId: "photomanager-fa75a",
    storageBucket: "photomanager-fa75a.appspot.com",
    messagingSenderId: "749496243268"
}


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: AlbumsComponent },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: 'photos', component: PhotosComponent },
  { path: 'albums', component: AlbumsComponent },
 
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
    AlbumsComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [UserService, PhotosService, AlbumService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
