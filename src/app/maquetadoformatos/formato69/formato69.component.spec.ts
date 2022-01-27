import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato69Component } from './formato69.component';

describe('Formato69Component', () => {
  let component: Formato69Component;
  let fixture: ComponentFixture<Formato69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formato69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formato69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
