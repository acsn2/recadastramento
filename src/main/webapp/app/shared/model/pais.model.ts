export interface IPais {
    id?: number;
    codPais?: number;
    nomePais?: string;
}

export class Pais implements IPais {
    constructor(public id?: number, public codPais?: number, public nomePais?: string) {}
}
