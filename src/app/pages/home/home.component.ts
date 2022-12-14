import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { TvShowsService } from "../../services/tv-shows.service";
import { Movie } from "../../models/movie";
import { TvShow } from "../../models/tvShow";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    popularTvShows: TvShow[] = [];

    constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {
    }

    ngOnInit(): void {
        this.moviesService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        });

        this.moviesService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });

        this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });

        this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });

        this.tvShowsService.getTvShows('popular').subscribe((tvShows) => {
           this.popularTvShows = tvShows;
        });
    }
}
