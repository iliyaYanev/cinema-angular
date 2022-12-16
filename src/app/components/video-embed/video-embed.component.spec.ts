import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmbedComponent } from './video-embed.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

describe('VideoEmbedComponent', () => {
  let component: VideoEmbedComponent;
  let fixture: ComponentFixture<VideoEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoEmbedComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
