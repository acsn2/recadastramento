export interface IServidorTipo {
    id?: number;
    numero?: number;
    nome?: string;
    indicativo?: string;
}

export class ServidorTipo implements IServidorTipo {
    constructor(public id?: number, public numero?: number, public nome?: string, public indicativo?: string) {}
}
