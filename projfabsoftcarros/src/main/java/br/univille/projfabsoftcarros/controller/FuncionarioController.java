package br.univille.projfabsoftcarros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcarros.entity.Cliente;
import br.univille.projfabsoftcarros.entity.Funcionario;
import br.univille.projfabsoftcarros.service.FuncionarioService;

@RestController
@RequestMapping("/api/v1/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<Funcionario>> getFuncionarios() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Funcionario> postFuncionario(@RequestBody Funcionario funcionario) {
        if (funcionario == null || funcionario.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        service.save(funcionario);
        return new ResponseEntity<>(funcionario, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Funcionario> putFuncionario(@PathVariable long id, @RequestBody Funcionario funcionario) {
        if (funcionario == null || funcionario.getId() == null || funcionario.getId() != id) {
            return ResponseEntity.badRequest().build();
        }
    
        Funcionario funcionarioExistente = service.getById(id);
        if (funcionarioExistente == null) {
            return ResponseEntity.notFound().build();
        }
    
        funcionarioExistente.setNome(funcionario.getNome());
        funcionarioExistente.setPosicao(funcionario.getPosicao());
        funcionarioExistente.setConcessionaria(funcionario.getConcessionaria());
    
        service.save(funcionarioExistente);
    
        return ResponseEntity.ok(funcionarioExistente);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFuncionario(@PathVariable long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}