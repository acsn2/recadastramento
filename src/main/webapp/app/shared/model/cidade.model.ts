import { IServidor } from 'app/shared/model//servidor.model';

export interface ICidade {
    id?: number;
    codCidade?: number;
    nomeCidade?: string;
    task?: IServidor;
    task?: IServidor;
}

export class Cidade implements ICidade {
    constructor(
        public id?: number,
        public codCidade?: number,
        public nomeCidade?: string,
        public task?: IServidor,
        public task?: IServidor
    ) {}
}
