import { Component,OnInit } from '@angular/core';
import { TareaService, Tarea } from '../../service/tarea.service';
import { FilterTareasPipe } from '../../pipes/filter-tareas.pipe';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarTareaDialogComponent } from '../editar-tarea-dialog/editar-tarea-dialog.component';



@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    FilterTareasPipe,
    
    
    
    

  ],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit{
  [x: string]: any;

  tareas: Tarea[] = [];
  nuevaTarea: Tarea = { titulo: '', descripcion: '', completada: false };
  filtro: string = '';
  tareaEditando: Tarea | null = null; // Para almacenar la tarea en edición
  constructor(private tareaService: TareaService, private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.tareaService.getTareas().subscribe({
      next: (data) => {
        console.log("✅ Tareas cargadas:", data);
        this.tareas = data;
      },
      error: (err) => console.error("❌ Error al obtener tareas:", err)
    });
  }

  agregarTarea() {
    this.nuevaTarea.fechaCreacion = new Date();
    this.tareaService.addTarea(this.nuevaTarea).subscribe(() => {
      this.obtenerTareas();
      this.nuevaTarea = { titulo: '', descripcion: '', completada: false };
      this['snackBar'].open('Tarea agregada con éxito', 'OK', { duration: 3000 });
    });
  }

  // agregarTarea() {
  //   this.nuevaTarea.fechaCreacion = new Date();
  //   this.tareaService.addTarea(this.nuevaTarea).subscribe(() => {
  //     this.obtenerTareas();
  //     this.nuevaTarea = { titulo: '', descripcion: '', completada: false };
  //   });
  // }

  editarTarea(tarea: Tarea) {
    const dialogRef = this.dialog.open(EditarTareaDialogComponent, {
      width: '400px',
      data: { ...tarea } // Pasamos la tarea clonada para evitar modificarla directamente
    });

    dialogRef.afterClosed().subscribe((resultado: Tarea) => {
      if (resultado) {
        this.tareaService.updateTarea(resultado).subscribe(() => {
          this.obtenerTareas();
        });
      }
    });
  }
  guardarEdicion() {
    if (this.tareaEditando) {
      this.tareaService.updateTarea(this.tareaEditando).subscribe(() => {
        this.obtenerTareas();
        this.tareaEditando = null; // Resetea el modo edición
      });
    }
  }

  cancelarEdicion() {
    this.tareaEditando = null; // Cancela la edición y oculta el formulario
  }

  actualizarTarea(tarea: Tarea) {
    this.tareaService.updateTarea(tarea).subscribe(() => {
      console.log("Tarea actualizada correctamente");
    });
  }

  eliminarTarea(id?: number) {
    if (id) {
      this.tareaService.deleteTarea(id).subscribe(() => {
        this.obtenerTareas();
      });
    }
  }


get tareasFiltradas() {
  return this.tareas.filter(t => t.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
}


}
