package br.univille.projfabsoftcarros.service.impl;

import java.util.List;

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
    public Cliente save(Cliente cliente){
        repository.save(cliente);
        return cliente;
    }
    @Override 
    public List <Cliente> getAll() {
        return repository.findAll();
    }
    @Override 
    public Cliente getById(Long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
        return retorno.get();
        return null;
    }

    @Override
    public Cliente delete(Long id) {
        var cliente = getById(id);
        if(cliente != null)
        repository.deleteById(id);
        return cliente;
    }

}
