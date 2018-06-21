import { NgModule } from '@angular/core';

import { RecadastramentoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RecadastramentoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RecadastramentoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RecadastramentoSharedCommonModule {}
