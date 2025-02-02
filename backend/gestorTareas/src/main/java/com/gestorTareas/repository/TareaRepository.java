package com.gestorTareas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestorTareas.model.Tarea;

public interface TareaRepository extends JpaRepository<Tarea, Long> {

}
