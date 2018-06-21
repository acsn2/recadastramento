export interface ICidade {
    id?: number;
    codCidade?: number;
    nomeCidade?: string;
}

export class Cidade implements ICidade {
    constructor(public id?: number, public codCidade?: number, public nomeCidade?: string) {}
}
