import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id.search('.json'));
    // Get the information from the API
    if(id.search('.json') == 1 )
    {
      this.movieService.getDetailsFromJSON(id).subscribe(result => {
        this.information = result;
      });
    } else {
      this.movieService.getDetails(id).subscribe(result => {
        this.information = result;
        console.log(this.information);
      });
    }
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
