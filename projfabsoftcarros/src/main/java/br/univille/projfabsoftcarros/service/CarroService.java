package br.univille.projfabsoftcarros.service;

import java.util.List;
import java.util.Optional;

import br.univille.projfabsoftcarros.entity.Carro;

public interface CarroService {
    List<Carro> getAll();
    Optional<Carro> getById(long id);
    Carro save(Carro carro);
    void delete(long id);
}
