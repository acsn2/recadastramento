package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.Orgao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Orgao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrgaoRepository extends JpaRepository<Orgao, Long> {

}
