package br.mp.mppe.recadastramento.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of EscolaridadeSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class EscolaridadeSearchRepositoryMockConfiguration {

    @MockBean
    private EscolaridadeSearchRepository mockEscolaridadeSearchRepository;

}
