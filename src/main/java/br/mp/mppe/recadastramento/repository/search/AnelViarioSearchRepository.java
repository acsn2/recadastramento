package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.AnelViario;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the AnelViario entity.
 */
public interface AnelViarioSearchRepository extends ElasticsearchRepository<AnelViario, Long> {
}
