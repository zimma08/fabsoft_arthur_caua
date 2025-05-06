package br.univille.projfabsoftcarros.service;

import java.util.List;
import br.univille.projfabsoftcarros.entity.Concessionaria;

public interface ConcessionariaService {
    List<Concessionaria> getAll();
    Concessionaria save(Concessionaria concessionaria);
    void delete(long id);
}
