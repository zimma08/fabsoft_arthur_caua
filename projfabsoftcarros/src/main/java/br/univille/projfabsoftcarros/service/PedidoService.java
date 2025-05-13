package br.univille.projfabsoftcarros.service;

import java.util.List;
import br.univille.projfabsoftcarros.entity.Pedido;

public interface PedidoService {
    List<Pedido> getAll();
    Pedido save(Pedido pedido);
    void delete(long id);
    Pedido getById(long id); // <- Adicione esta linha
}
