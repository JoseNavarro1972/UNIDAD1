import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
})
export class TrianguloComponent {
  base: number = 0;
  perimetroCalculado: boolean = false;
  resultadoPerimetro: number = 0;

  calcularPerimetro() {
    if (this.base) {
           this.resultadoPerimetro = this.base * 3;
      this.perimetroCalculado = true;
    }
  }
}