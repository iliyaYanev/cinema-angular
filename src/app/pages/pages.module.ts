import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from "./genres/genres.component";
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movie/movie.component";
import { TvShowComponent } from "./tv-show/tvshow.component";
import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import { FeaturesModule } from "../features/features.module";
import { PaginatorModule } from "primeng/paginator";
import { InputTextModule } from "primeng/inputtext";
import { ImageModule } from "primeng/image";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from "primeng/carousel";
import { RouterLink } from "@angular/router";



@NgModule({
  declarations: [
      GenresComponent,
      HomeComponent,
      MoviesComponent,
      MovieComponent,
      TvShowComponent,
      TvShowsComponent
  ],
    imports: [
        CommonModule,
        FeaturesModule,
        PaginatorModule,
        InputTextModule,
        ImageModule,
        TabViewModule,
        CarouselModule,
        RouterLink
    ],
  exports: [
    GenresComponent,
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    TvShowComponent,
    TvShowsComponent
  ]
})
export class PagesModule { }
