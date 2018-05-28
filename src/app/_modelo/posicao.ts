export class Row {
    id: string;
    posicoes: Posicao[];
    constructor() {
   }
}


export class Posicao {
    type: PecaType;
    posicao: string;
    peca: string;
    class: string;
    primeiroMovimento: boolean;
    constructor() {
   }
}

export enum PecaType {
    Peao,
    Bispo,
    Torre,
    Cavalo,
    Rainha,
    Rei,
    Vazio
}
