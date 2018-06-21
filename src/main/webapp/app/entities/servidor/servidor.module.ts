import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecadastramentoSharedModule } from 'app/shared';
import {
    ServidorComponent,
    ServidorDetailComponent,
    ServidorUpdateComponent,
    ServidorDeletePopupComponent,
    ServidorDeleteDialogComponent,
    servidorRoute,
    servidorPopupRoute
} from './';

const ENTITY_STATES = [...servidorRoute, ...servidorPopupRoute];

@NgModule({
    imports: [RecadastramentoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ServidorComponent,
        ServidorDetailComponent,
        ServidorUpdateComponent,
        ServidorDeleteDialogComponent,
        ServidorDeletePopupComponent
    ],
    entryComponents: [ServidorComponent, ServidorUpdateComponent, ServidorDeleteDialogComponent, ServidorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoServidorModule {}
