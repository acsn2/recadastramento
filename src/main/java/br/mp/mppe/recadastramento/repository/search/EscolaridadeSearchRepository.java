package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Escolaridade;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Escolaridade entity.
 */
public interface EscolaridadeSearchRepository extends ElasticsearchRepository<Escolaridade, Long> {
}
