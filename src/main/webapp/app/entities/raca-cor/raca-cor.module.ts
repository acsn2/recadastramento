import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecadastramentoSharedModule } from 'app/shared';
import {
    RacaCorComponent,
    RacaCorDetailComponent,
    RacaCorUpdateComponent,
    RacaCorDeletePopupComponent,
    RacaCorDeleteDialogComponent,
    racaCorRoute,
    racaCorPopupRoute
} from './';

const ENTITY_STATES = [...racaCorRoute, ...racaCorPopupRoute];

@NgModule({
    imports: [RecadastramentoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RacaCorComponent,
        RacaCorDetailComponent,
        RacaCorUpdateComponent,
        RacaCorDeleteDialogComponent,
        RacaCorDeletePopupComponent
    ],
    entryComponents: [RacaCorComponent, RacaCorUpdateComponent, RacaCorDeleteDialogComponent, RacaCorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoRacaCorModule {}
