import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviproComponent } from './favipro.component';

describe('FaviproComponent', () => {
  let component: FaviproComponent;
  let fixture: ComponentFixture<FaviproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaviproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
