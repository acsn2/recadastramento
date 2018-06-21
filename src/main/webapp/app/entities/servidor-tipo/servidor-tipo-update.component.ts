import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IServidorTipo } from 'app/shared/model/servidor-tipo.model';
import { ServidorTipoService } from './servidor-tipo.service';

@Component({
    selector: '-servidor-tipo-update',
    templateUrl: './servidor-tipo-update.component.html'
})
export class ServidorTipoUpdateComponent implements OnInit {
    private _servidorTipo: IServidorTipo;
    isSaving: boolean;

    constructor(private servidorTipoService: ServidorTipoService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ servidorTipo }) => {
            this.servidorTipo = servidorTipo;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.servidorTipo.id !== undefined) {
            this.subscribeToSaveResponse(this.servidorTipoService.update(this.servidorTipo));
        } else {
            this.subscribeToSaveResponse(this.servidorTipoService.create(this.servidorTipo));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IServidorTipo>>) {
        result.subscribe((res: HttpResponse<IServidorTipo>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get servidorTipo() {
        return this._servidorTipo;
    }

    set servidorTipo(servidorTipo: IServidorTipo) {
        this._servidorTipo = servidorTipo;
    }
}
