package com.gestorTareas.service;

import java.util.List;
import java.util.Optional;

import com.gestorTareas.model.Tarea;

public interface TareasService {
	 List<Tarea> obtenerTodas();
	    Optional<Tarea> obtenerPorId(Long id); 
	    Tarea guardar(Tarea tarea);
	    void eliminar(Long id);
	    boolean existePorId(Long id); 
}
