import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableAnimationComponent } from './disable-animation.component';

describe('DisableAnimationComponent', () => {
  let component: DisableAnimationComponent;
  let fixture: ComponentFixture<DisableAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
