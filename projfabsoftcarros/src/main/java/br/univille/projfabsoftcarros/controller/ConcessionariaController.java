package br.univille.projfabsoftcarros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcarros.entity.Carro;
import br.univille.projfabsoftcarros.entity.Concessionaria;
import br.univille.projfabsoftcarros.service.ConcessionariaService;

@RestController
@RequestMapping("/api/v1/concessionarias")
public class ConcessionariaController {

    @Autowired
    private ConcessionariaService service;

    @GetMapping
    public ResponseEntity<List<Concessionaria>> getConcessionarias() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Concessionaria> postConcessionaria(@RequestBody Concessionaria concessionaria) {
        if (concessionaria == null || concessionaria.getId() != 0) {
            return ResponseEntity.badRequest().build();
        }
        service.save(concessionaria);
        return new ResponseEntity<Concessionaria>(concessionaria, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Concessionaria> putConcessionaria(@PathVariable long id, @RequestBody Concessionaria concessionaria) {
        if (id <= 0 || concessionaria == null) {
            return ResponseEntity.badRequest().build();  
        }
    
        Optional<Concessionaria> concessionariaExistente = service.getById(id);  
    
        if (concessionariaExistente.isEmpty()) {
            return ResponseEntity.notFound().build();  
        }
        Concessionaria concessionariaAntiga = concessionariaExistente.get();   
        concessionariaAntiga.setNome(concessionaria.getNome());  
        concessionariaAntiga.setFuncionarios(concessionaria.getFuncionarios());
        service.save(concessionariaAntiga);  
        return ResponseEntity.ok(concessionariaAntiga);  
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConcessionaria(@PathVariable long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}