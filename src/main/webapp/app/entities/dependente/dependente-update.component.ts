import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDependente } from 'app/shared/model/dependente.model';
import { DependenteService } from './dependente.service';

@Component({
    selector: '-dependente-update',
    templateUrl: './dependente-update.component.html'
})
export class DependenteUpdateComponent implements OnInit {
    private _dependente: IDependente;
    isSaving: boolean;
    datNacDp: any;

    constructor(private dependenteService: DependenteService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ dependente }) => {
            this.dependente = dependente;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.dependente.id !== undefined) {
            this.subscribeToSaveResponse(this.dependenteService.update(this.dependente));
        } else {
            this.subscribeToSaveResponse(this.dependenteService.create(this.dependente));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IDependente>>) {
        result.subscribe((res: HttpResponse<IDependente>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get dependente() {
        return this._dependente;
    }

    set dependente(dependente: IDependente) {
        this._dependente = dependente;
    }
}
