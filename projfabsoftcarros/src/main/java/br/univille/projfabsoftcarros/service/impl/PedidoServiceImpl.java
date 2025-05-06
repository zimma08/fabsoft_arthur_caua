package br.univille.projfabsoftcarros.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcarros.entity.Pedido;
import br.univille.projfabsoftcarros.repository.PedidoRepository;
import br.univille.projfabsoftcarros.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository repository;

    @Override
    public List<Pedido> getAll() {
        return repository.findAll();
    }

    @Override
    public Pedido save(Pedido pedido) {
        return repository.save(pedido);
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }
}
