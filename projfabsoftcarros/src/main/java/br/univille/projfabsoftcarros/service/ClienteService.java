package br.univille.projfabsoftcarros.service;

import java.util.List;

import br.univille.projfabsoftcarros.entity.Cliente;

public interface ClienteService {
    Cliente save(Cliente cliente);
    List<Cliente> getAll();
    Cliente getById(Long id);
    Cliente delete(Long id);

}
