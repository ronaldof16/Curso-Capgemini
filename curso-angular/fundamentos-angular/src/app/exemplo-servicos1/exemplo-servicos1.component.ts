import { Component } from '@angular/core';
import { OggerService } from '../ogger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {
  nome = "";

  constructor(private ogger: OggerService) {}

  adicionarNome() {
    this.ogger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
