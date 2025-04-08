package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    // Você pode adicionar métodos personalizados aqui se precisar
}
