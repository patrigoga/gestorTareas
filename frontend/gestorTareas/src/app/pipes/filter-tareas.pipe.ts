import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../service/tarea.service';

@Pipe({
  name: 'filterTareas',
  standalone: true
})
export class FilterTareasPipe implements PipeTransform {
  transform(tareas: Tarea[], filtro: string): Tarea[] {
    if (!tareas || !filtro) {
      return tareas;
    }
    filtro = filtro.toLowerCase();

    return tareas.filter(t => 
      t.titulo.toLowerCase().includes(filtro) || 
      t.descripcion.toLowerCase().includes(filtro)
    );
  
    return tareas.filter(t => t.titulo.toLowerCase().includes(filtro.toLowerCase()));
  }
}
