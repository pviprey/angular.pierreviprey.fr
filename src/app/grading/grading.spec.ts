import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grading } from './grading';

describe('Grading', () => {
  let component: Grading;
  let fixture: ComponentFixture<Grading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
