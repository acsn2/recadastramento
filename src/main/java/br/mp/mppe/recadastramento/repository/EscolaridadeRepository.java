package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.Escolaridade;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Escolaridade entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EscolaridadeRepository extends JpaRepository<Escolaridade, Long> {

}
