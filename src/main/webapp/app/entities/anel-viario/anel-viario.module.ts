import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecadastramentoSharedModule } from 'app/shared';
import {
    AnelViarioComponent,
    AnelViarioDetailComponent,
    AnelViarioUpdateComponent,
    AnelViarioDeletePopupComponent,
    AnelViarioDeleteDialogComponent,
    anelViarioRoute,
    anelViarioPopupRoute
} from './';

const ENTITY_STATES = [...anelViarioRoute, ...anelViarioPopupRoute];

@NgModule({
    imports: [RecadastramentoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AnelViarioComponent,
        AnelViarioDetailComponent,
        AnelViarioUpdateComponent,
        AnelViarioDeleteDialogComponent,
        AnelViarioDeletePopupComponent
    ],
    entryComponents: [AnelViarioComponent, AnelViarioUpdateComponent, AnelViarioDeleteDialogComponent, AnelViarioDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoAnelViarioModule {}
