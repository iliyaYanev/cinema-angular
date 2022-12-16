import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tvshows.service';
import { Genre } from '../../models/genre';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  tvShowGenres: Genre[] = [];
  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });

    this.tvShowsService.getTvShowsGenres().subscribe((genresData) => {
      this.tvShowGenres = genresData;
    });
  }
}
