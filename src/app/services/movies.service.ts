import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_KEY, BASE_URL } from '../constants/constants';
import { Movie, MovieCredits, MovieDTO, MovieImages, MovieVideoDTO } from "../models/movie";
import { TvDto } from "../models/tv";
import { of, switchMap } from "rxjs";
import { GenresDTO } from "../models/genre";

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

    getMovieVideos(id: string) {
        return this.http.get<MovieVideoDTO>(`${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}`)
            .pipe(switchMap((movies) => {
                return of(movies.results.slice(0, 3));
            }));
    }

    getMoviesGenres() {
        return this.http.get<GenresDTO>(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
            .pipe(switchMap((res) => {
                return of(res.genres);
            }));
    }

    getMoviesByGenre(genreId: string, page: number) {
        return this.http.get<MovieDTO>(`${BASE_URL}/3/discover/movie?with_genres=${genreId}&api_key=${API_KEY}&page=${page}`)
            .pipe(switchMap((movies) => {
                return of(movies.results);
            }));
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(`${BASE_URL}/3/movie/${id}/images?api_key=${API_KEY}`);
    }

    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}`);
    }

    searchMovies(page: number, searchString?: string) {
        const uri = searchString ? 'search/movie' : 'movie/popular';

        return this.http.get<MovieDTO>(`${BASE_URL}/3/${uri}?page=${page}&query=${searchString}&api_key=${API_KEY}`)
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
