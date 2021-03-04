import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMovielistComponent } from './add-edit-movielist.component';

describe('AddEditMovielistComponent', () => {
  let component: AddEditMovielistComponent;
  let fixture: ComponentFixture<AddEditMovielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMovielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
