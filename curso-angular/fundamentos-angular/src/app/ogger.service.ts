import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OggerService {
  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }

  exibirTodosOsLogs() {
    console.log(this.mensagens);
  }
  
}
