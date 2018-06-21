export interface IEstadoCivil {
    id?: number;
    numEstCivil?: number;
    descEstCivil?: string;
}

export class EstadoCivil implements IEstadoCivil {
    constructor(public id?: number, public numEstCivil?: number, public descEstCivil?: string) {}
}
