import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
})
export class CirculoComponent {
  radio: number = 0;
  perimetroCalculado: boolean = false;
  resultadoPerimetro: number = 0;

  calcularPerimetro() {
    if (this.radio) {
      const perimetro = 2 * Math.PI * this.radio;
      this.resultadoPerimetro = parseFloat(perimetro.toFixed(2));
      this.perimetroCalculado = true;
    }
  }
}