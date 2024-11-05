import { Component } from '@angular/core';

@Component({
  selector: 'app-talla-zapatilla',
  templateUrl: './talla-zapatilla.component.html',
  styleUrls: ['./talla-zapatilla.component.css']
})
export class TallaZapatillaComponent {
  tallaZapatilla = [
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
  ]
  tallaSeleccionada: number | null = null;

  seleccionarTalla(talla: number): void {
    this.tallaSeleccionada = talla;
  }
}
