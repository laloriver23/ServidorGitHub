import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosmaterialesComponent } from './recursosmateriales.component';

describe('RecursosmaterialesComponent', () => {
  let component: RecursosmaterialesComponent;
  let fixture: ComponentFixture<RecursosmaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosmaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
