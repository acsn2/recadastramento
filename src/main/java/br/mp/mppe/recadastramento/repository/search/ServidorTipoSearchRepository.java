package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.ServidorTipo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ServidorTipo entity.
 */
public interface ServidorTipoSearchRepository extends ElasticsearchRepository<ServidorTipo, Long> {
}
