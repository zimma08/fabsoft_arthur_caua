package br.univille.projfabsoftcarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.projfabsoftcarros.entity.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
    // Aqui você pode adicionar consultas personalizadas se quiser
}
