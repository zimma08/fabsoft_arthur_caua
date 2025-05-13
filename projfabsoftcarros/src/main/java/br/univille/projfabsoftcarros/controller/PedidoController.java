package br.univille.projfabsoftcarros.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoftcarros.entity.Pedido;
import br.univille.projfabsoftcarros.service.PedidoService;

@RestController
@RequestMapping("/api/v1/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService service;

    @GetMapping
    public ResponseEntity<List<Pedido>> getPedidos() {
        var lista = service.getAll();
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Pedido> postPedido(@RequestBody Pedido pedido) {
        
        if (pedido == null || pedido.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        service.save(pedido);
        return new ResponseEntity<>(pedido, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> putPedido(@PathVariable Long id, @RequestBody Pedido pedido) {
        if (id == null || id <= 0 || pedido == null) {
            return ResponseEntity.badRequest().build();
        }
    
        Pedido pedidoExistente = service.getById(id);
        if (pedidoExistente == null) {
            return ResponseEntity.notFound().build();
        }
    
        pedidoExistente.setData(pedido.getData());
        pedidoExistente.setCarro(pedido.getCarro());
        pedidoExistente.setCustomer(pedido.getCustomer());
    
        service.save(pedidoExistente);
        return ResponseEntity.ok(pedidoExistente);
    }    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePedido(@PathVariable long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
