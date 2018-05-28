import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Alerta, AlertaType } from '../_modelo/alerta';

@Injectable()
export class AlertaService {
    private subject = new Subject<Alerta>();

    constructor() { }

    success(message: string) {
        this.alert(AlertaType.Success, message);
    }

    info(message: string) {
        this.alert(AlertaType.Inform, message);
    }

    alert(type: AlertaType, message: string) {
        this.subject.next(<Alerta>{ type: type, message: message });
    }

    getMensagem(): Observable<any> {
        return this.subject.asObservable();
    }

    clear() {
        this.subject.next();
    }
}
