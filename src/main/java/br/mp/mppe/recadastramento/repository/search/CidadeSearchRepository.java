package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Cidade;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Cidade entity.
 */
public interface CidadeSearchRepository extends ElasticsearchRepository<Cidade, Long> {
}
