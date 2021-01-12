import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './service/movies.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { Interceptor } from 'src/app/core/http/interceptor.service';


@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [
    MoviesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ]
})
export class MoviesModule { }
