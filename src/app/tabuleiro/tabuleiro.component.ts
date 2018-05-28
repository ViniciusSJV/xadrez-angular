import { Component, OnInit } from '@angular/core';

import { XadrezService } from '../_servico/xadrez.service';
import { AlertaService } from '../_servico/alerta.service';

import { Row, Posicao, PecaType } from '../_modelo/posicao';

@Component({
    moduleId: module.id,
    templateUrl: 'tabuleiro.component.html',
    selector: 'app-tabuleiro',
    styleUrls: ['./tabuleiro.component.css']
})

export class TabuleiroComponent implements OnInit {
    rows: Row[];
    posicaoSelecionada: Posicao;
    jogadorAtual: string;

    constructor( private xadrezService: XadrezService, private alertaService: AlertaService ) { }

    ngOnInit() {
      this.initGame();
    }

    initGame() {
      this.xadrezService.init().subscribe(rows => {
        this.rows = rows;
      });
    }

    clickTabuleiro( posicao: string ) {
      if ( this.posicaoSelecionada ) {
        this.mover(posicao);
      } else {
        this.select(posicao);
      }
    }

    select ( posicao: string ) {
      this.xadrezService.getPosicao(posicao).subscribe(
        data => {
          this.posicaoSelecionada = data;
          this.xadrezService.criarJogada(this.posicaoSelecionada).subscribe(rows => { this.rows = rows; });
        },
        error => {
          this.alertaService.info(error);
        });
    }

    mover( novaPosicao: string ) {
      this.xadrezService.moverPosicao(this.posicaoSelecionada, novaPosicao).subscribe(
        data => {
          this.rows = data;
          this.posicaoSelecionada = null;
        },
        error => {
          this.alertaService.info(error);
        });
    }
}
