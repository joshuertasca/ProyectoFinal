import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trofeo2Component } from './trofeo2.component';

describe('Trofeo2Component', () => {
  let component: Trofeo2Component;
  let fixture: ComponentFixture<Trofeo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trofeo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trofeo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
