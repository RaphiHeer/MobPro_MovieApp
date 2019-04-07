import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class FavoriteFileService {

  path: string;
  filename = 'favorite_movies.json';

  constructor(private file: File) { 

    this.path = this.file.dataDirectory;
    console.log(this.path);
    //this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
    //  console.log('Directory doesn\'t exist'));
    /*
    this.file.checkFile(this.path, this.filename)
      .catch(err => {
        this.file.createFile(this.path, this.filename, false)
        .catch(err => console.log("Error on creating file"));
      });
*/
  }

  public addMovieToFavorites(movieJSON: string) {

  }

  public removeMovieFromFavorites(movieID: number) {

  }

  public getFavoriteMovies(): string {
    
    //this.file.getDirectory(,'favorite_movies.json');
    return '';
  }
}
