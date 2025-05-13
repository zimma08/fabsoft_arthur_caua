package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    // Consultas personalizadas, se necessário, podem ser adicionadas aqui
}
