import { Component } from '@angular/core';

@Component({
  selector: 'app-talla-msl',
  templateUrl: './talla-msl.component.html',
  styleUrls: ['./talla-msl.component.css']
})
export class TallaMslComponent {
  tallasMSL = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'
  ]

  tallaSeleccionada: string | null = null;

  seleccionarTalla(talla: string): void {
    this.tallaSeleccionada = talla;
  }

}
