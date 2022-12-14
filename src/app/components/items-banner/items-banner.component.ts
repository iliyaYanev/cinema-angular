import { Component, Input } from '@angular/core';
import { Movie } from "../../models/movie";
import {TvShow} from "../../models/tvShow";

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {

    @Input() movies: Movie[] = [];
    @Input() tvShows: TvShow[] = [];
    @Input() title: String = '';
}
