import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecadastramentoSharedModule } from 'app/shared';
import {
    RegimeTrabalhoComponent,
    RegimeTrabalhoDetailComponent,
    RegimeTrabalhoUpdateComponent,
    RegimeTrabalhoDeletePopupComponent,
    RegimeTrabalhoDeleteDialogComponent,
    regimeTrabalhoRoute,
    regimeTrabalhoPopupRoute
} from './';

const ENTITY_STATES = [...regimeTrabalhoRoute, ...regimeTrabalhoPopupRoute];

@NgModule({
    imports: [RecadastramentoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RegimeTrabalhoComponent,
        RegimeTrabalhoDetailComponent,
        RegimeTrabalhoUpdateComponent,
        RegimeTrabalhoDeleteDialogComponent,
        RegimeTrabalhoDeletePopupComponent
    ],
    entryComponents: [
        RegimeTrabalhoComponent,
        RegimeTrabalhoUpdateComponent,
        RegimeTrabalhoDeleteDialogComponent,
        RegimeTrabalhoDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoRegimeTrabalhoModule {}
