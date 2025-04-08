package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Carro;

public interface CarroRepository extends JpaRepository<Carro, Long> {
    // Aqui você pode adicionar métodos personalizados se precisar
}
