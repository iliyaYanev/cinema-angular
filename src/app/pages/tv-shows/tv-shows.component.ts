import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { TvShowsService } from '../../services/tvshows.service';
import { Item } from "../../models/item";
import { mapTvShowToItem } from "../../models/tv";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Scroller } from "primeng/scroller";

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class TvShowsComponent implements OnInit {
  items: Item[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private tvShowsService: TvShowsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }

  getPagedTvShows(page: number, searchKeyword?: string) {
    this.tvShowsService.searchTvShows(page, searchKeyword).subscribe((tvShows) => {
      this.items = tvShows.map((tvShows) => mapTvShowToItem(tvShows));
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowsByGenre(genreId, page).subscribe((tvShows) => {
      this.items = tvShows.map((tvShows) => mapTvShowToItem(tvShows));
    });
  }

  paginate(event: Scroller) {
    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvShows(pageNumber, this.searchValue);
      } else {
        this.getPagedTvShows(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
    }
  }
}
