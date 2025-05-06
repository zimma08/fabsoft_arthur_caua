package br.univille.projfabsoftcarros.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcarros.entity.Carro;
import br.univille.projfabsoftcarros.repository.CarroRepository;
import br.univille.projfabsoftcarros.service.CarroService;

@Service
public class CarroServiceImpl implements CarroService {

    @Autowired
    private CarroRepository repository;

    @Override
    public List<Carro> getAll() {
        return repository.findAll();
    }

    @Override
    public Carro save(Carro carro) {
        return repository.save(carro);
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }
}
