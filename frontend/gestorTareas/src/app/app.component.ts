import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TareaComponent } from "./components/tarea/tarea.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, TareaComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestorTareas';
}
