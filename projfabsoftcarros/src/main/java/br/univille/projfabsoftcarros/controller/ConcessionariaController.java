package br.univille.projfabsoftcarros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        if (concessionaria == null || concessionaria.Id() != 0) {
            return ResponseEntity.badRequest().build();
        }
        service.save(concessionaria);
        return new ResponseEntity<>(concessionaria, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Concessionaria> putConcessionaria(@RequestBody Concessionaria concessionaria) {
        if (concessionaria == null || concessionaria.Id() == 0) {
            return ResponseEntity.badRequest().build();
        }
        service.save(concessionaria);
        return new ResponseEntity<>(concessionaria, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConcessionaria(@PathVariable long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
