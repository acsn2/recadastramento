package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.RacaCor;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RacaCor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RacaCorRepository extends JpaRepository<RacaCor, Long> {

}
