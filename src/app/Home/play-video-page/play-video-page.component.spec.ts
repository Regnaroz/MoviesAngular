import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoPageComponent } from './play-video-page.component';

describe('PlayVideoPageComponent', () => {
  let component: PlayVideoPageComponent;
  let fixture: ComponentFixture<PlayVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
