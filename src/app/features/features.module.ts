import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "./item/item.component";
import { ItemsBannerComponent } from "./items-banner/items-banner.component";
import { SliderComponent } from "./slider/slider.component";
import { VideoEmbedComponent } from "./video-embed/video-embed.component";
import { RouterLink } from "@angular/router";



@NgModule({
  declarations: [
      ItemComponent,
      ItemsBannerComponent,
      SliderComponent,
      VideoEmbedComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        ItemComponent,
        ItemsBannerComponent,
        SliderComponent,
        VideoEmbedComponent
  ]
})
export class FeaturesModule { }
