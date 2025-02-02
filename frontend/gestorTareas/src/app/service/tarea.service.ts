import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  fechaCreacion?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:8083/api/tareas';

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiUrl}/${tarea.id}`, tarea);
  }

  deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
