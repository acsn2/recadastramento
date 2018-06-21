package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Dependente;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Dependente entity.
 */
public interface DependenteSearchRepository extends ElasticsearchRepository<Dependente, Long> {
}
