import { IServidor } from 'app/shared/model//servidor.model';

export interface IPais {
    id?: number;
    codPais?: number;
    nomePais?: string;
    task?: IServidor;
    task?: IServidor;
    task?: IServidor;
}

export class Pais implements IPais {
    constructor(
        public id?: number,
        public codPais?: number,
        public nomePais?: string,
        public task?: IServidor,
        public task?: IServidor,
        public task?: IServidor
    ) {}
}
