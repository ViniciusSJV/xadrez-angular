import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BackendProvider } from './_fake-api/backEndInterceptor';
import { XadrezService } from './_servico/xadrez.service';
import { AlertaService } from './_servico/alerta.service';

import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ BackendProvider, XadrezService, AlertaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
