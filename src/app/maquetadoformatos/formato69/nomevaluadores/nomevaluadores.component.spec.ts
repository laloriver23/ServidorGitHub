import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomevaluadoresComponent } from './nomevaluadores.component';

describe('NomevaluadoresComponent', () => {
  let component: NomevaluadoresComponent;
  let fixture: ComponentFixture<NomevaluadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomevaluadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomevaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
