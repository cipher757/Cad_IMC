import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  resultado: number = 0;

  calc() {
      // Verifica se o peso e a altura são valores válidos (maiores que zero)
      if (this.peso <= 0 || this.altura <= 0) {
          console.error("O peso e a altura devem ser valores positivos.");
          return;
      }

      // Calcula o IMC
      this.resultado = this.peso / (this.altura * this.altura);

      // arredonda o resultado para duas casas decimais
      this.resultado = this.roundToTwoDecimalPlaces(this.resultado);
  }

  // arredondar um número para duas casas decimais
  roundToTwoDecimalPlaces(value: number): number {
      return Math.round(value * 100) / 100;
  }

}
