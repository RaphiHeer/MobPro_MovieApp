import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieConfig } from 'src/environments/movieConfig';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  movieConfig = new MovieConfig();


  constructor(private http: HttpClient) { 

  }

  searchData(title: string, type: SearchType) {

      return this.http
      .get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.movieConfig.apiKey}`)
      .pipe(
        map(results => results['Search'])
      );
    
  }

  getDetails(id) {
      return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.movieConfig.apiKey}`);
  }

  getDetailsFromJSON(filename: string)
  {
    return this.http.get(`../../assets/movies/${filename}`);
  }
}
