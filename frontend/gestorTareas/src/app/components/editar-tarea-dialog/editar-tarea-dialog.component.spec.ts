import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTareaDialogComponent } from './editar-tarea-dialog.component';

describe('EditarTareaDialogComponent', () => {
  let component: EditarTareaDialogComponent;
  let fixture: ComponentFixture<EditarTareaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTareaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTareaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
