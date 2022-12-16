import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from "@angular/common/http";
import { TvShowsService } from "./tvshows.service";

describe('TvShowsService', () => {
    let service: TvShowsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule ]
        });
        service = TestBed.inject(TvShowsService);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
