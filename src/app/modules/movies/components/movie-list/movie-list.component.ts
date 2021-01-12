import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movies: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Obtains a list of movies
   */
  getMovies(): void {
    this.movies.discover().subscribe(data => {
      console.log('movies', data);
    });
  }

}
