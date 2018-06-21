package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.RacaCor;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the RacaCor entity.
 */
public interface RacaCorSearchRepository extends ElasticsearchRepository<RacaCor, Long> {
}
