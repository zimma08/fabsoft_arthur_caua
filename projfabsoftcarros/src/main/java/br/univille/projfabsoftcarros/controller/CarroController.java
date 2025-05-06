package br.univille.projfabsoftcarros.controller;

import java.util.List;

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
        var listaCarros = service.getAll();
        return new ResponseEntity<>(listaCarros, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Carro> postCarro(@RequestBody Carro carro) {
        if (carro == null || carro.getId() != 0) {
            return ResponseEntity.badRequest().build();
        }

        service.save(carro);
        return new ResponseEntity<>(carro, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Carro> putCarro(@RequestBody Carro carro) {
        if (carro == null || carro.getId() == 0) {
            return ResponseEntity.badRequest().build();
        }

        service.save(carro);
        return new ResponseEntity<>(carro, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCarro(@PathVariable long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
