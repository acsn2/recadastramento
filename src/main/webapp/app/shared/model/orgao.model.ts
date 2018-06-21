export interface IOrgao {
    id?: number;
    numOrgao?: number;
    descOrgao?: string;
}

export class Orgao implements IOrgao {
    constructor(public id?: number, public numOrgao?: number, public descOrgao?: string) {}
}
