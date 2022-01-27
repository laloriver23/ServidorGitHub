import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato73Component } from './formato73.component';

describe('Formato73Component', () => {
  let component: Formato73Component;
  let fixture: ComponentFixture<Formato73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formato73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formato73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
