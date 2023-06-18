import { Component } from '@angular/core';
import { OggerService } from '../ogger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao = "";

  constructor(private ogger: OggerService) {}

  adicionarProduto() {
    this.ogger.logar(`O produto ${this.descricao} foi adicionado`);
  }
}
