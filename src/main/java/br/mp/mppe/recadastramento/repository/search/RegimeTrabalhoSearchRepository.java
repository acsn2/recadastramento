package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.RegimeTrabalho;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the RegimeTrabalho entity.
 */
public interface RegimeTrabalhoSearchRepository extends ElasticsearchRepository<RegimeTrabalho, Long> {
}
