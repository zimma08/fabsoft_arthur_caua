package br.univille.projfabsoftcarros.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftcarros.entity.Funcionario;
import br.univille.projfabsoftcarros.repository.FuncionarioRepository;
import br.univille.projfabsoftcarros.service.FuncionarioService;

@Service
public class FuncionarioServiceImpl implements FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;

    @Override
    public List<Funcionario> getAll() {
        return repository.findAll();
    }

    @Override
    public Funcionario save(Funcionario funcionario) {
        return repository.save(funcionario);
    }

    @Override
    public void delete(long id) {
        repository.deleteById(id);
    }
}
