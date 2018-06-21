package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.ParenteServidor;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ParenteServidor entity.
 */
public interface ParenteServidorSearchRepository extends ElasticsearchRepository<ParenteServidor, Long> {
}
