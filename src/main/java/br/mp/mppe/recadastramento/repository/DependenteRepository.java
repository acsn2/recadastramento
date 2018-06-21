package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.Dependente;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Dependente entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DependenteRepository extends JpaRepository<Dependente, Long> {

}
