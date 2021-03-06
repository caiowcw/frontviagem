import { Service } from './service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeComponent } from './cidade/cidade.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MelhoresPrecosComponent } from './melhores-precos/melhores-precos.component';
import { MensagemValidacaoComponent } from './mensagem-validacao/mensagem-validacao.component';



@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    HomeComponent,
    DashboardComponent,
    MelhoresPrecosComponent,
    MensagemValidacaoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
