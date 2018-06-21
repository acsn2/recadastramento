package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.RegimePrevidenciario;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RegimePrevidenciario entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegimePrevidenciarioRepository extends JpaRepository<RegimePrevidenciario, Long> {

}
