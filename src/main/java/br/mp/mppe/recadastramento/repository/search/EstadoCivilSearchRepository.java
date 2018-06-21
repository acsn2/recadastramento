package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.EstadoCivil;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the EstadoCivil entity.
 */
public interface EstadoCivilSearchRepository extends ElasticsearchRepository<EstadoCivil, Long> {
}
