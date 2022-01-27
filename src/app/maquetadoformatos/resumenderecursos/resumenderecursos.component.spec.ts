import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenderecursosComponent } from './resumenderecursos.component';

describe('ResumenderecursosComponent', () => {
  let component: ResumenderecursosComponent;
  let fixture: ComponentFixture<ResumenderecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenderecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenderecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
