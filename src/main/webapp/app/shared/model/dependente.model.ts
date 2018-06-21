import { Moment } from 'moment';

export interface IDependente {
    id?: number;
    fkDependente?: number;
    tpDependente?: number;
    nomeDepend?: string;
    datNac?: Moment;
    cpfDepend?: string;
    depIRRF?: string;
    depSF?: string;
    incapacTrab?: string;
}

export class Dependente implements IDependente {
    constructor(
        public id?: number,
        public fkDependente?: number,
        public tpDependente?: number,
        public nomeDepend?: string,
        public datNac?: Moment,
        public cpfDepend?: string,
        public depIRRF?: string,
        public depSF?: string,
        public incapacTrab?: string
    ) {}
}
