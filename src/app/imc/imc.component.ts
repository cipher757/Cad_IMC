import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
    nome: string = "";
    idade: number = 0;
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

        //calculo IMC
        this.resultado = this.peso / (this.altura * this.altura);

        //faixa de IMC
        if (this.resultado < 18.5) {
            this.faixa = "Abaixo do peso";
        } else if (this.resultado >= 18.5 && this.resultado < 25) {
            this.faixa = "Peso normal";
        } else if (this.resultado >= 25 && this.resultado < 30) {
            this.faixa = "Sobrepeso";
        } else if (this.resultado >=30 && this.resultado < 40) {
            this.faixa = "Obesidade";
        }
        else {
          this.faixa = "Obesidade Grave"
        }

        //arredonda o resultado para duas casas decimais
        this.resultado = this.roundToTwoDecimalPlaces(this.resultado);
    }

    //arredonda o número para duas casas decimais
    roundToTwoDecimalPlaces(value: number): number {
        return Math.round(value * 100) / 100;
    }

}
