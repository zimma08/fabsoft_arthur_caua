package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    // Aqui você pode adicionar métodos personalizados se precisar, como:
    // List<Pedido> findByCustomerId(Long clienteId);
}
