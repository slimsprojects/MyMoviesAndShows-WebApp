import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTowatchComponent } from './add-edit-towatch.component';

describe('AddEditTowatchComponent', () => {
  let component: AddEditTowatchComponent;
  let fixture: ComponentFixture<AddEditTowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTowatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
