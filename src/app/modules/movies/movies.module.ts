import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './service/movies.service';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
