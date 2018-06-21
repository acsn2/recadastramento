package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.AnelViario;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AnelViario entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AnelViarioRepository extends JpaRepository<AnelViario, Long> {

}
