import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular.pierreviprey.fr' title`, () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular.pierreviprey.fr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular.pierreviprey.fr');
  });
});
