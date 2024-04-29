import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialComboComponent } from './special-combo.component';

describe('SpecialComboComponent', () => {
  let component: SpecialComboComponent;
  let fixture: ComponentFixture<SpecialComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialComboComponent]
    });
    fixture = TestBed.createComponent(SpecialComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
