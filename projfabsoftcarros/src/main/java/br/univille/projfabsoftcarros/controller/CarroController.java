package br.univille.projfabsoftcarros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcarros.entity.Carro;
import br.univille.projfabsoftcarros.service.CarroService;

@RestController
@RequestMapping("/api/v1/carros")
public class CarroController {

    @Autowired
    private CarroService service;

    @GetMapping
    public ResponseEntity<List<Carro>> getCarros() {
        List<Carro> listaCarros = service.getAll();
        return ResponseEntity.ok(listaCarros);
    }

    @PostMapping
    public ResponseEntity<Carro> postCarro(@RequestBody Carro carro) {
        if (carro == null || carro.getId() != 0) {
            return ResponseEntity.badRequest().build();
        }

        Carro novoCarro = service.save(carro);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCarro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carro> putCarro(@PathVariable long id, @RequestBody Carro carro) {
        if (id <= 0 || carro == null) {
            return ResponseEntity.badRequest().build();  
        }
    
        Optional<Carro> carroExistente = service.getById(id); 
    
        if (carroExistente.isEmpty()) {
            return ResponseEntity.notFound().build();  
        }
    
        Carro carroAntigo = carroExistente.get(); 
    
        if (carro.getCliente() != null) {
            carroAntigo.setCliente(carro.getCliente());  
        }
        carroAntigo.setMarca(carro.getMarca());        
        carroAntigo.setModelo(carro.getModelo());      
        carroAntigo.setAno(carro.getAno());          
    
        service.save(carroAntigo);  
        return ResponseEntity.ok(carroAntigo);  
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCarro(@PathVariable long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}