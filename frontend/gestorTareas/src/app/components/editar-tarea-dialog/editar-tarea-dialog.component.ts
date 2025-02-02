import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../service/tarea.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-editar-tarea-dialog',
  standalone: true,
  templateUrl: './editar-tarea-dialog.component.html',
  styleUrl: './editar-tarea-dialog.component.css',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class EditarTareaDialogComponent {
  tarea: Tarea;

  constructor(
    public dialogRef: MatDialogRef<EditarTareaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tarea
  ) {
    this.tarea = { ...data }; // Clona la tarea recibida
  }

  guardar() {
    this.dialogRef.close(this.tarea); // Devuelve la tarea actualizada al cerrar
  }

  cancelar() {
    this.dialogRef.close(); // Cierra sin guardar
  }
}
