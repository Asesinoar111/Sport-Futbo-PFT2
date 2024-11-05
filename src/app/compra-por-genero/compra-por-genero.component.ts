import { Component } from '@angular/core';

@Component({
  selector: 'app-compra-por-genero',
  templateUrl: './compra-por-genero.component.html',
  styleUrls: ['./compra-por-genero.component.css']
})
export class CompraPorGeneroComponent {
  generos = [
    {titulo: 'Hombre', link: 'https://nikeclprod.vtexassets.com/assets/vtex.file-manager-graphql/images/15ed6a1c-fd38-48d8-9dac-36d4d855e6b7___f38e65c73a96308fbc316dd3bacf9612.jpg'},
    {titulo: 'Mujer', link: 'https://nikeclprod.vtexassets.com/assets/vtex.file-manager-graphql/images/d1db75af-6f2b-419d-8f2a-37dc88100d36___f77f29438221bdd496022c70d47dd365.jpg'},
]}
