import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesEstudianteComponent } from './examenes-estudiante.component';

describe('ExamenesEstudianteComponent', () => {
  let component: ExamenesEstudianteComponent;
  let fixture: ComponentFixture<ExamenesEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
