import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrigralevComponent } from './crigralev.component';

describe('CrigralevComponent', () => {
  let component: CrigralevComponent;
  let fixture: ComponentFixture<CrigralevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrigralevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrigralevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
