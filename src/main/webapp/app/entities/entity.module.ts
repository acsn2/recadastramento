import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RecadastramentoServidorModule } from './servidor/servidor.module';
import { RecadastramentoDependenteModule } from './dependente/dependente.module';
import { RecadastramentoParenteServidorModule } from './parente-servidor/parente-servidor.module';
import { RecadastramentoEstadoCivilModule } from './estado-civil/estado-civil.module';
import { RecadastramentoOrgaoModule } from './orgao/orgao.module';
import { RecadastramentoServidorTipoModule } from './servidor-tipo/servidor-tipo.module';
import { RecadastramentoPaisModule } from './pais/pais.module';
import { RecadastramentoCidadeModule } from './cidade/cidade.module';
import { RecadastramentoRacaCorModule } from './raca-cor/raca-cor.module';
import { RecadastramentoEscolaridadeModule } from './escolaridade/escolaridade.module';
import { RecadastramentoCategoriaESocialModule } from './categoria-e-social/categoria-e-social.module';
import { RecadastramentoRegimeTrabalhoModule } from './regime-trabalho/regime-trabalho.module';
import { RecadastramentoRegimePrevidenciarioModule } from './regime-previdenciario/regime-previdenciario.module';
import { RecadastramentoAnelViarioModule } from './anel-viario/anel-viario.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RecadastramentoServidorModule,
        RecadastramentoDependenteModule,
        RecadastramentoParenteServidorModule,
        RecadastramentoEstadoCivilModule,
        RecadastramentoOrgaoModule,
        RecadastramentoServidorTipoModule,
        RecadastramentoPaisModule,
        RecadastramentoCidadeModule,
        RecadastramentoRacaCorModule,
        RecadastramentoEscolaridadeModule,
        RecadastramentoCategoriaESocialModule,
        RecadastramentoRegimeTrabalhoModule,
        RecadastramentoRegimePrevidenciarioModule,
        RecadastramentoAnelViarioModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoEntityModule {}
