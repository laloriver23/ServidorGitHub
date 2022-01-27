import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato72Component } from './formato72.component';

describe('Formato72Component', () => {
  let component: Formato72Component;
  let fixture: ComponentFixture<Formato72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formato72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formato72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
