package br.mp.mppe.recadastramento.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(br.mp.mppe.recadastramento.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Servidor.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Servidor.class.getName() + ".serMatriculas", jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Dependente.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.ParenteServidor.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.EstadoCivil.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Orgao.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.ServidorTipo.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Pais.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Cidade.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.RacaCor.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.Escolaridade.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.CategoriaESocial.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.RegimeTrabalho.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.RegimePrevidenciario.class.getName(), jcacheConfiguration);
            cm.createCache(br.mp.mppe.recadastramento.domain.AnelViario.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
