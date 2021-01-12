import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
