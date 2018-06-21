package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.Orgao;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Orgao entity.
 */
public interface OrgaoSearchRepository extends ElasticsearchRepository<Orgao, Long> {
}
