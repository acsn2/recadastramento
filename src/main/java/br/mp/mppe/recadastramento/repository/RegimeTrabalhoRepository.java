package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.RegimeTrabalho;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RegimeTrabalho entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegimeTrabalhoRepository extends JpaRepository<RegimeTrabalho, Long> {

}
