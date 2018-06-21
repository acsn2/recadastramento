package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Servidor;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Servidor entity.
 */
public interface ServidorSearchRepository extends ElasticsearchRepository<Servidor, Long> {
}
