import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { ResponseResult } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a random list of movies to discover
   */
  discover(): Observable<ResponseResult<Movie>> {
    return this.http.get(`${environment.apiUrl}/3/discover/movie`).pipe(map((data: any) => {
      data.results = data.results.map(item => new Movie(item));
      return new ResponseResult<Movie>(data);
    }));
  }
}