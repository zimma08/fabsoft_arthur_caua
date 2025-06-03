package br.univille.projfabsoftcarros.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcarros.entity.Cliente;
import br.univille.projfabsoftcarros.service.ClienteService;

@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {
    
    @Autowired
    private ClienteService service; 

    @GetMapping
    public ResponseEntity<List<Cliente>> getClientes() {
        var listaClientes = service.getAll();
        return new ResponseEntity<>(listaClientes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cliente> postCliente(@RequestBody Cliente cliente) {
        if (cliente == null || cliente.getId() != 0) {
            return ResponseEntity.badRequest().build();
        }
        service.save(cliente);
        return new ResponseEntity<>(cliente, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> putCliente(@PathVariable long id, @RequestBody Cliente cliente) {
        if (id <= 0 || cliente == null) {
            return ResponseEntity.badRequest().build();
        }

        Optional<Cliente> clienteAntigo = service.getById(id);
        if (clienteAntigo.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Cliente clienteExistente = clienteAntigo.get();
        clienteExistente.setNome(cliente.getNome());
        clienteExistente.setEmail(cliente.getEmail());
        clienteExistente.setSenha(cliente.getSenha());

        service.save(clienteExistente);
        return ResponseEntity.ok(clienteExistente);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable long id) {
        service.delete(id);
        return ResponseEntity.noContent().build(); 
    }
}
