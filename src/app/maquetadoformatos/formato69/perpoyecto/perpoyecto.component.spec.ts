import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpoyectoComponent } from './perpoyecto.component';

describe('PerpoyectoComponent', () => {
  let component: PerpoyectoComponent;
  let fixture: ComponentFixture<PerpoyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerpoyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpoyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
