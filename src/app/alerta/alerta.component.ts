import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertaService } from '../_servico/alerta.service';

import { Alerta, AlertaType } from '../_modelo/alerta';

@Component({
    moduleId: module.id,
    selector: 'app-alerta',
    templateUrl: 'alerta.component.html',
    styleUrls: ['./alerta.component.css']
})

export class AlertaComponent implements OnInit {
    alertas: Alerta[] = [];

    constructor(private alertaService: AlertaService) { }

    ngOnInit() {
        this.alertaService.getMensagem().subscribe((alerta: Alerta) => {
            if (!alerta) {
                this.alertas = [];
                return;
            }
            this.alertas.push(alerta);
            setTimeout(() => {
                this.removeAlert(alerta);
            }, 3500);
        });
    }

    removeAlert(alerta: Alerta) {
        this.alertas = this.alertas.filter(x => x !== alerta);
    }

    cssClass(alerta: Alerta) {
        if (!alerta) {
            return;
        }

        switch (alerta.type) {
            case AlertaType.Success:
                return 'alert success';
            case AlertaType.Inform:
                return 'alert info';
        }
    }
}
