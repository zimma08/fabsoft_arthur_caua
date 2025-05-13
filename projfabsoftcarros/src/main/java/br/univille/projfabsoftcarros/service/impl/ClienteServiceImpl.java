package br.univille.projfabsoftcarros.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcarros.entity.Cliente;
import br.univille.projfabsoftcarros.repository.ClienteRepository;
import br.univille.projfabsoftcarros.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository repository;

    @Override
    public List<Cliente> getAll() {
        return repository.findAll();
    }

    @Override
    public Cliente save(Cliente cliente) {
        return repository.save(cliente);
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Cliente> getById(long id) {
        return repository.findById(id);  // Retorna um Optional de Cliente
    }
}
