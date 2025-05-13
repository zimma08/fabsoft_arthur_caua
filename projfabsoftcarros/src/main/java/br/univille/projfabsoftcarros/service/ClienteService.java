package br.univille.projfabsoftcarros.service;

import java.util.List;
import java.util.Optional;
import br.univille.projfabsoftcarros.entity.Cliente;

public interface ClienteService {
    List<Cliente> getAll();
    Cliente save(Cliente cliente);
    void delete(long id);
    Optional<Cliente> getById(long id); // Novo método adicionado
}
