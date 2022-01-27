import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienesmueblesComponent } from './bienesmuebles.component';

describe('BienesmueblesComponent', () => {
  let component: BienesmueblesComponent;
  let fixture: ComponentFixture<BienesmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienesmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienesmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
