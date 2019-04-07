import { MovieService } from './../services/movie.service';
import { environment } from './../../environments/environment';
import { MovieConfig } from './../../environments/movieConfig';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/interfaces/Movie';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchType } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  private searchedMovie: string;
  private movieConfig: MovieConfig;

  constructor(
    private movieService: MovieService,
    private router: Router
     ) {
      this.movieConfig = new MovieConfig();
   }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  /*
  searchMovieClicked() {
    let filmsObservable;
    console.log(`Searched Movie: ${this.searchedMovie}`);

    // Get movie from website
    filmsObservable = this.httpClient
      .get(`http://www.omdbapi.com/?plot=short&r=json&t=${this.searchedMovie}&apikey=${this.movieConfig.apiKey}`);

    // Async-call -> if call finished, send to detail page
    filmsObservable.subscribe(data => {
      const movie: Movie = {
        Response: '',
        Title: '',
        Plot: '',
        Poster: '',
        Error: '',
        Country: '',
        Year: '',
        Director: ''
      };

      this.router.navigate(['movie-details']);
      console.log('my data: ', data);
    });
  }
  */
}
