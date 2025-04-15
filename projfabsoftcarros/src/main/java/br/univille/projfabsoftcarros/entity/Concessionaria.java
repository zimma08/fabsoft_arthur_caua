package br.univille.projfabsoftcarros.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Concessionaria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;

    private String nome;

    @OneToMany(mappedBy = "concessionaria")
    private List<Funcionario> funcionarios;

    // Getters e Setters
    public long Id() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Funcionario> getFuncionarios() {
        return funcionarios;
    }

    public void setFuncionarios(List<Funcionario> funcionarios) {
        this.funcionarios = funcionarios;
    }
}
