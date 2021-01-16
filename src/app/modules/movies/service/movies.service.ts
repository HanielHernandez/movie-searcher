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
  /**
   * Returns the full path of an image
   * @param imageName name of the image to return
   * @param size size of the image  ("w92","w154","w185","w342","w500","w780") for poster
   */
  getImage(imageName: string, size: string): string {
    return `${environment.apiImageUrl}${size}${imageName}`;
  }
  /**
   * Returns the details of a moive
   * @param id Movie id
   */
  getMovie(id: number): Observable<Movie> {
    return this.http.get(`${environment.apiUrl}/3/movie/${id}`).pipe(map(data => {
      return new Movie(data);
    }));
  }
  /**
   * Returs the creddits of a movie
   * @param id movie id
   */
  getCredits(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/3/movie/${id}/credits`).pipe(map(data => {
      return new Movie(data);
    }));
  }

}
