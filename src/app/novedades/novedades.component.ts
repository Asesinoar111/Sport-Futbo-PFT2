import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent {
  novedades = [
    {titulo: 'Colección Especial de Equipos y Temporada', link: 'https://www.cienporcientofutbol.cl/cdn/shop/collections/ggg_413x413.jpg?v=1720028284' },
    {titulo: 'Nuevos Lanzamientos de Botines y Zapatillas', link: 'https://www.cienporcientofutbol.cl/cdn/shop/files/F50_Elite_Firm_Ground_Boots_Pink_302x302.jpg?v=1729692850' },
    {titulo: 'Ediciones Limitadas de Productos Exclusivos', link: 'https://www.cienporcientofutbol.cl/cdn/shop/collections/arsenal-equipacion-local-adidas-2022-2023-wbn_413x413.jpg?v=1721663275' },
  ];
}
