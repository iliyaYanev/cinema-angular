import { Component, Input } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Item } from '../../models/item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: Item | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}
}
