import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovielistComponent } from './show-movielist.component';

describe('ShowMovielistComponent', () => {
  let component: ShowMovielistComponent;
  let fixture: ComponentFixture<ShowMovielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMovielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
