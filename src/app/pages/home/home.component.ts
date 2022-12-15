import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { TvShowsService } from 'src/app/services/tvshows.service';
import { mapMovieToItem } from '../../models/movie';
import { mapTvShowToItem } from '../../models/tv';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.slice(0, 6).map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.slice(0, 6).map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies.slice(0, 6).map((movie) => mapMovieToItem(movie));
    });
    this.tvShowsService.getTvs('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows.slice(0, 6).map((tvShow) => mapTvShowToItem(tvShow));
    });
  }
}
