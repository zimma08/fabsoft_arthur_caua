package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Concessionaria;

public interface ConcessionariaRepository extends JpaRepository<Concessionaria, Long> {
    // Aqui você pode adicionar métodos personalizados, se necessário
}
