import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Ronaldo";
  dataNascimento = "1990-07-02";
  urlImagem = "/assets/Eu e ele.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é: ${this.dataNascimento}`);
  }
}
