import { Injectable} from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { API_KEY, BASE_URL } from '../constants/constants';
import { Movie, MovieDTO } from "../models/movie";
import { TvDto } from "../models/tv";
import { of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) {
    }

    getMovies(type: string = 'upcoming', count: number = 6) {
        return this.http.get<MovieDTO>(`${BASE_URL}/3/movie/${type}?api_key=${API_KEY}`)
            .pipe(switchMap((movies) => {
                return of(movies.results.slice(0, count));
            }));
    }

    getMovie(id: string) {
        return this.http.get<Movie>(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`);
    }

    searchMovies(page: number) {
        return this.http.get<MovieDTO>(`${BASE_URL}/3/movie/popular?page=${page}&api_key=${API_KEY}`)
            .pipe(switchMap((movies) => {
                return of(movies.results);
            }));
    }

    getTvs(type: string = 'popular', count: number = 6) {
        return this.http.get<TvDto>(`${BASE_URL}/3/tv/popular?api_key=${API_KEY}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }
}
