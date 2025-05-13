package br.univille.projfabsoftcarros.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcarros.entity.Concessionaria;
import br.univille.projfabsoftcarros.repository.ConcessionariaRepository;
import br.univille.projfabsoftcarros.service.ConcessionariaService;

@Service
public class ConcessionariaServiceImpl implements ConcessionariaService {

    @Autowired
    private ConcessionariaRepository repository;

    @Override
    public List<Concessionaria> getAll() {
        return repository.findAll();
    }

    @Override
    public Concessionaria save(Concessionaria concessionaria) {
        return repository.save(concessionaria);
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Concessionaria> getById(long id) {
        return repository.findById(id);
    }
}
