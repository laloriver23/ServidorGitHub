
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formato70Component } from './formato70.component';

describe('formato70Component', () => {
  let component: formato70Component;
  let fixture: ComponentFixture<formato70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formato70Component ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(formato70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato70Component } from './formato70.component';

describe('Formato70Component', () => {
  let component: Formato70Component;
  let fixture: ComponentFixture<Formato70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formato70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formato70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
