import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../models/movie";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Scroller } from "primeng/scroller";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({ opacity: 0})),
            transition('void <=> *', [animate('1s')])
        ])
    ]
})
export class MoviesComponent implements OnInit {

    movies: Movie[] = [];

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit(): void {
        this.getPagedMovies(1);
    }

    getPagedMovies(pageNumber: number) {
        this.moviesService.searchMovies(pageNumber)
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    paginate(event: Scroller) {
        this.getPagedMovies(event.page + 1);
    }
}
