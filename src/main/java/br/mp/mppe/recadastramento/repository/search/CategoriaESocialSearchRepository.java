package br.mp.mppe.recadastramento.repository.search;

import br.mp.mppe.recadastramento.domain.CategoriaESocial;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the CategoriaESocial entity.
 */
public interface CategoriaESocialSearchRepository extends ElasticsearchRepository<CategoriaESocial, Long> {
}
