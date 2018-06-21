import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IParenteServidor } from 'app/shared/model/parente-servidor.model';
import { ParenteServidorService } from './parente-servidor.service';

@Component({
    selector: '-parente-servidor-update',
    templateUrl: './parente-servidor-update.component.html'
})
export class ParenteServidorUpdateComponent implements OnInit {
    private _parenteServidor: IParenteServidor;
    isSaving: boolean;

    constructor(private parenteServidorService: ParenteServidorService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ parenteServidor }) => {
            this.parenteServidor = parenteServidor;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.parenteServidor.id !== undefined) {
            this.subscribeToSaveResponse(this.parenteServidorService.update(this.parenteServidor));
        } else {
            this.subscribeToSaveResponse(this.parenteServidorService.create(this.parenteServidor));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IParenteServidor>>) {
        result.subscribe((res: HttpResponse<IParenteServidor>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get parenteServidor() {
        return this._parenteServidor;
    }

    set parenteServidor(parenteServidor: IParenteServidor) {
        this._parenteServidor = parenteServidor;
    }
}
