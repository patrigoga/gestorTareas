package com.gestorTareas.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestorTareas.model.Tarea;
import com.gestorTareas.repository.TareaRepository;
import com.gestorTareas.service.TareasService;

@Service
public class TareasServicesImpl implements TareasService{
	
	@Autowired
	private  TareaRepository tareaRepository;

   

    @Override
    public List<Tarea> obtenerTodas() {
        return tareaRepository.findAll();
    }

    @Override
    public Optional<Tarea> obtenerPorId(Long id) {
        return tareaRepository.findById(id);
    }

    @Override
    public Tarea guardar(Tarea tarea) {
        return tareaRepository.save(tarea);
    }

    @Override
    public void eliminar(Long id) {
        tareaRepository.deleteById(id);
    }

    @Override
    public boolean existePorId(Long id) {
        return tareaRepository.existsById(id);
    }

}
