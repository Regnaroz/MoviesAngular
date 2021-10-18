import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswrodComponent } from './reset-passwrod.component';

describe('ResetPasswrodComponent', () => {
  let component: ResetPasswrodComponent;
  let fixture: ComponentFixture<ResetPasswrodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswrodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
