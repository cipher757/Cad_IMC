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
  faixa: string = "";

    calc() {
        //se o peso e a altura são valores válidos (maiores que zero)
        if (this.peso <= 0 || this.altura <= 0) {
            console.error("O peso e a altura devem ser valores positivos.");
            return;
        }

        //calculo imc
        this.resultado = this.peso / (this.altura * this.altura);

        //faixa de IMC
        if (this.resultado < 18.5) {
            this.faixa = "Abaixo do peso";
        } else if (this.resultado >= 18.5 && this.resultado < 25) {
            this.faixa = "Peso normal";
        } else if (this.resultado >= 25 && this.resultado < 30) {
            this.faixa = "Sobrepeso";
        } else {
            this.faixa = "Obesidade";
        }

        //arredonda o resultado para duas casas decimais
        this.resultado = this.roundToTwoDecimalPlaces(this.resultado);
    }

    //arredonda um número para duas casas decimais
    roundToTwoDecimalPlaces(value: number): number {
        return Math.round(value * 100) / 100;
    }

}
