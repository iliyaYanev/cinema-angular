import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { IMAGE_SIZES } from "../../constants/constants";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({opacity: 0})),
            transition('void <=> *', [animate('1s')])
        ])
    ]
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] = [];
    @Input() isBanner: boolean = false;

    index: number = 0;
    readonly imageSizes = IMAGE_SIZES;

    ngOnInit(): void {
        if(!this.isBanner) {
            setInterval(() => {
                this.index = ++this.index % this.items.length;
            }, 5000);
        }
    }
}
