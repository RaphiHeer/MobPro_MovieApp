import { MovieService } from './../services/movie.service';
import { Movie } from 'src/interfaces/Movie';
import { Component, OnInit } from '@angular/core';
import { FavoriteFileService } from './../services/favorite-file.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public movies = [
    { Filename: "1.json", Title: "Pulp Fiction"},
    { Filename: "2.json", Title: "The Lord of the Rings: The Fellowship of the Ring"},
    { Filename: "3.json", Title: "Madagascar"},
    { Filename: "4.json", Title: "Brüno"},
    { Filename: "5.json", Title: "The Best of Borat"}
  ]
  

  constructor() { 
  }
  
  ngOnInit() {
  }
}
