package com.gestorTareas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestorTareas.model.Tarea;
import com.gestorTareas.service.TareasService;

@CrossOrigin(origins = "http://localhost:4200") // Permite conexión con Angular
@RestController
@RequestMapping("/api/tareas")
public class TareaController {
	
	@Autowired
	 private  TareasService tareaService;

	    public TareaController(TareasService tareaService) {
	        this.tareaService = tareaService;
	    }

	    // Obtener todas las tareas
	    @GetMapping
	    public ResponseEntity<List<Tarea>> obtenerTareas() {
	        List<Tarea> tareas = tareaService.obtenerTodas();
	        return ResponseEntity.ok(tareas); // HTTP 200 OK
	    }

	    // Crear una nueva tarea
	    @PostMapping
	    public ResponseEntity<Tarea> guardarTarea(@RequestBody Tarea tarea) {
	        Tarea nuevaTarea = tareaService.guardar(tarea);
	        return ResponseEntity.status(201).body(nuevaTarea); // HTTP 201 Created
	    }

	    // Obtener una tarea por ID
	    @GetMapping("/{id}")
	    public ResponseEntity<Tarea> obtenerTareaPorId(@PathVariable Long id) {
	        return tareaService.obtenerPorId(id)
	                .map(ResponseEntity::ok) // Si la tarea existe, devuelve HTTP 200 OK
	                .orElse(ResponseEntity.notFound().build()); // Si no existe, HTTP 404 Not Found
	    }

	    // Actualizar una tarea
	    @PutMapping("/{id}")
	    public ResponseEntity<Tarea> actualizarTarea(@PathVariable Long id, @RequestBody Tarea tarea) {
	        return tareaService.obtenerPorId(id)
	                .map(t -> {
	                    tarea.setId(id);
	                    Tarea tareaActualizada = tareaService.guardar(tarea);
	                    return ResponseEntity.ok(tareaActualizada); // HTTP 200 OK
	                })
	                .orElse(ResponseEntity.notFound().build()); // HTTP 404 Not Found si la tarea no existe
	    }

	    // Eliminar una tarea
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id) {
	        if (tareaService.existePorId(id)) {
	            tareaService.eliminar(id);
	            return ResponseEntity.noContent().build(); // HTTP 204 No Content
	        } else {
	            return ResponseEntity.notFound().build(); // HTTP 404 Not Found
	        }
	    }

}
