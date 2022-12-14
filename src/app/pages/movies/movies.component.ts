import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Scroller } from "primeng/scroller";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({opacity: 0})),
            transition('void <=> *', [animate('1s')])
        ])
    ]
})
export class MoviesComponent implements OnInit {

    movies: Movie[] = [];
    genreId: string | null = null;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.pipe(take(1))
            .subscribe(({genreId}) => {
               if (genreId) {
                   this.genreId = genreId;
                   this.getMoviesByGenre(genreId, 1);
               } else {
                   this.getPagedMovies(1);
               }
            });
    }

    getPagedMovies(pageNumber: number) {
        this.moviesService.searchMovies(pageNumber)
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    getMoviesByGenre(genreId: string, page: number) {
        this.moviesService.getMoviesByGenre(genreId, page)
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    paginate(event: Scroller) {
        const pageNumber = event.page + 1;

        if (this.genreId) {
            this.getMoviesByGenre(this.genreId, pageNumber);
        }
        else {
            this.getPagedMovies(pageNumber);
        }
    }
}
