import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclaperdivComponent } from './enclaperdiv.component';

describe('EnclaperdivComponent', () => {
  let component: EnclaperdivComponent;
  let fixture: ComponentFixture<EnclaperdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclaperdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclaperdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
