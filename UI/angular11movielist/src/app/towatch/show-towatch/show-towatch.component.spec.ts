import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTowatchComponent } from './show-towatch.component';

describe('ShowTowatchComponent', () => {
  let component: ShowTowatchComponent;
  let fixture: ComponentFixture<ShowTowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTowatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
