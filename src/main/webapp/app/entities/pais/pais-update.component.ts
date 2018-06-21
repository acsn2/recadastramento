import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPais } from 'app/shared/model/pais.model';
import { PaisService } from './pais.service';

@Component({
    selector: '-pais-update',
    templateUrl: './pais-update.component.html'
})
export class PaisUpdateComponent implements OnInit {
    private _pais: IPais;
    isSaving: boolean;

    constructor(private paisService: PaisService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ pais }) => {
            this.pais = pais;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.pais.id !== undefined) {
            this.subscribeToSaveResponse(this.paisService.update(this.pais));
        } else {
            this.subscribeToSaveResponse(this.paisService.create(this.pais));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPais>>) {
        result.subscribe((res: HttpResponse<IPais>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get pais() {
        return this._pais;
    }

    set pais(pais: IPais) {
        this._pais = pais;
    }
}
