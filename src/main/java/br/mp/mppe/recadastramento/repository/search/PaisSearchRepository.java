package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Pais;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Pais entity.
 */
public interface PaisSearchRepository extends ElasticsearchRepository<Pais, Long> {
}
