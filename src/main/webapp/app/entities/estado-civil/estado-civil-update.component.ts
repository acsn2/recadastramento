import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IEstadoCivil } from 'app/shared/model/estado-civil.model';
import { EstadoCivilService } from './estado-civil.service';

@Component({
    selector: '-estado-civil-update',
    templateUrl: './estado-civil-update.component.html'
})
export class EstadoCivilUpdateComponent implements OnInit {
    private _estadoCivil: IEstadoCivil;
    isSaving: boolean;

    constructor(private estadoCivilService: EstadoCivilService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ estadoCivil }) => {
            this.estadoCivil = estadoCivil;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.estadoCivil.id !== undefined) {
            this.subscribeToSaveResponse(this.estadoCivilService.update(this.estadoCivil));
        } else {
            this.subscribeToSaveResponse(this.estadoCivilService.create(this.estadoCivil));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IEstadoCivil>>) {
        result.subscribe((res: HttpResponse<IEstadoCivil>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }

    set estadoCivil(estadoCivil: IEstadoCivil) {
        this._estadoCivil = estadoCivil;
    }
}
