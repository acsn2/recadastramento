package br.mp.mppe.recadastramento.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of RegimeTrabalhoSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class RegimeTrabalhoSearchRepositoryMockConfiguration {

    @MockBean
    private RegimeTrabalhoSearchRepository mockRegimeTrabalhoSearchRepository;

}
