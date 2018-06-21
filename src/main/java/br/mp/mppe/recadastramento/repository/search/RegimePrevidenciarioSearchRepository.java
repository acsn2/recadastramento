package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.RegimePrevidenciario;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the RegimePrevidenciario entity.
 */
public interface RegimePrevidenciarioSearchRepository extends ElasticsearchRepository<RegimePrevidenciario, Long> {
}
