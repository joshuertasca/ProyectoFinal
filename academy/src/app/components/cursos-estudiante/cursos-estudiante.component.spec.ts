import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEstudianteComponent } from './cursos-estudiante.component';

describe('CursosEstudianteComponent', () => {
  let component: CursosEstudianteComponent;
  let fixture: ComponentFixture<CursosEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
