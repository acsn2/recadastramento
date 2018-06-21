package br.mp.mppe.recadastramento.repository;

import br.mp.mppe.recadastramento.domain.ServidorTipo;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ServidorTipo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ServidorTipoRepository extends JpaRepository<ServidorTipo, Long> {

}
