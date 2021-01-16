import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  id: number;
  constructor(private route: ActivatedRoute, private movies: MoviesService) { }

  ngOnInit(): void {
    // get id of movie from path url
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.getMovie();
      }
    });
  }
  /**
   *  Gets current movie
   */
  getMovie(): void {
    this.movies.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
    });
  }
  /**
   * Returns backdrop
   */
  getBrackDrop(): string {
    return this.movies.getImage(this.movie.backdropPath, 'w1280');
  }

}
