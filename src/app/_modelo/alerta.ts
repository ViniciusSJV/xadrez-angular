export class Alerta {
    type: AlertaType;
    message: string;
}

export enum AlertaType {
    Success,
    Inform
}
