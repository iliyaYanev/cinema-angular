import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_KEY, BASE_URL } from "../constants/constants";
import { of, switchMap } from "rxjs";
import { TvShowDTO } from "../models/tvShow";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

    constructor(private http: HttpClient) { }

    getTvShows(type: string = 'popular', count: number = 6) {
        return this.http.get<TvShowDTO>(`${BASE_URL}/3/tv/${type}?api_key=${API_KEY}`)
            .pipe(switchMap((shows) => {
                return of(shows.results.slice(0, count));
            }));
    }
}
