import {Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../models/movie";
import { IMAGE_SIZES } from "../../services/constants";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() movieData: Movie | null = null;

    readonly imageSizes = IMAGE_SIZES;

    constructor() {}

    ngOnInit() :void {
    }
}
