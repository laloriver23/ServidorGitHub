import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClavepoyComponent } from './clavepoy.component';

describe('ClavepoyComponent', () => {
  let component: ClavepoyComponent;
  let fixture: ComponentFixture<ClavepoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClavepoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClavepoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
