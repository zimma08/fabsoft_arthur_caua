package br.univille.projfabsoftcarros.service;

import java.util.List;

import br.univille.projfabsoftcarros.entity.Carro;

public interface CarroService {
    List<Carro> getAll();
    Carro save(Carro carro);
    void delete(long id);
}
