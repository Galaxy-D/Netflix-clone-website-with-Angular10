import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';

const enum endpoint {
  latest      = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular     = '/movie/popular',
  top_rated   = '/movie/top_rated',
  upcoming    = '/movie/upcoming',
  trending    = '/trending/all/week',
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL = 'https://api.themoviedb.org/3';
  private api_key = environment.api_key;
  private movie: Movies;

  constructor(private http: HttpClient) { }

  getLatestMovies() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getNowPlaying() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getOriginals() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getTopRated() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getPopularMovies() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getTrending() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getUpComing() : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.upcoming}`, {
      params : {
        api_key: this.api_key
      }
    });
  }

  getVideos(id: number) : Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}/movie/${this.movie.results[id].id}/videos`, {
      params : {
        api_key: this.api_key,        
      }
    });
  }  

}
