import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecadastramentoSharedModule } from 'app/shared';
import {
    EstadoCivilComponent,
    EstadoCivilDetailComponent,
    EstadoCivilUpdateComponent,
    EstadoCivilDeletePopupComponent,
    EstadoCivilDeleteDialogComponent,
    estadoCivilRoute,
    estadoCivilPopupRoute
} from './';

const ENTITY_STATES = [...estadoCivilRoute, ...estadoCivilPopupRoute];

@NgModule({
    imports: [RecadastramentoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EstadoCivilComponent,
        EstadoCivilDetailComponent,
        EstadoCivilUpdateComponent,
        EstadoCivilDeleteDialogComponent,
        EstadoCivilDeletePopupComponent
    ],
    entryComponents: [EstadoCivilComponent, EstadoCivilUpdateComponent, EstadoCivilDeleteDialogComponent, EstadoCivilDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecadastramentoEstadoCivilModule {}