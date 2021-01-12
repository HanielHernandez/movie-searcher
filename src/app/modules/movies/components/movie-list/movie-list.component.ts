import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ResponseResult } from '../../models/reponse';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  loading: boolean;
  movieList: ResponseResult<Movie>;
  constructor(private movies: MoviesService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Obtains a list of movies
   */
  getMovies(): void {
    this.loading = true;
    this.movies.discover().subscribe(data => {
      this.loading = false;
      this.movieList = data;
    }, error => {
      this.loading = false;
      console.error(error);
    });
  }

  getImage(imageName: string): string {
    return this.movies.getImage(imageName, 'w342');
  }

}
