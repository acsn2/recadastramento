package br.mp.mppe.recadastramento.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of RegimePrevidenciarioSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class RegimePrevidenciarioSearchRepositoryMockConfiguration {

    @MockBean
    private RegimePrevidenciarioSearchRepository mockRegimePrevidenciarioSearchRepository;

}
