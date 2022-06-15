import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesProfesorComponent } from './examenes-profesor.component';

describe('ExamenesProfesorComponent', () => {
  let component: ExamenesProfesorComponent;
  let fixture: ComponentFixture<ExamenesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
