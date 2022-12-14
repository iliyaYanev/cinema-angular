import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BASE_URL, API_KEY } from '../constants/constants';
import { MovieDTO } from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) { }

    getMovies(type: string = 'upcoming') {
    return this.http.get<MovieDTO>(`${BASE_URL}/3/movie/${type}?api_key=${API_KEY}`);
  }
}
