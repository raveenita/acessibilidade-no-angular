import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yToolbarComponent } from './a11y-toolbar.component';

describe('A11yToolbarComponent', () => {
  let component: A11yToolbarComponent;
  let fixture: ComponentFixture<A11yToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A11yToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
