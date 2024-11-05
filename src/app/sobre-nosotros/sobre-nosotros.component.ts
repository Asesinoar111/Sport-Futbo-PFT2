import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent {
  Equipo: Personal[] = [
    {
      nombre: 'Alonso Gatica',
      puesto: 'CEO',
      foto: 'https://asesinoar111.github.io/Portafolio-A/img/Perfil.jpg',
      descripcion: 'Encargado de dirigir y liderar el proyecto Sport Fútbol. Creador de la pagina principal de Sport Fútbol.',
      linkProfile: 'https://asesinoar111.github.io/Portafolio-A/'
    },
    {
      nombre: 'Constanza Concha',
      puesto: 'CIO',
      foto: 'https://conycvenegas2006.github.io/Portafolio/img/Dise%C3%B1o%20sin%20t%C3%ADtulo.png',
      descripcion: 'Encargada de la documentacion y la informacion de la pagina Sport Fútbol. Creadora de la documentacion sobre requerimientos y procesos de implementacion del proyecto',
      linkProfile: 'https://conycvenegas2006.github.io/Portafolio/',
    },
    {
      nombre: 'Madeline Toledo',
      puesto: 'CIO',
      foto: 'https://madelinesipaml.github.io/portafolio2024/img/yo.png',
      descripcion: 'Encargada de la planificacion y diseño de la pagina Sport Fútbol. Creadora del logo del proyecto y planificadora de la pagina web.',
      linkProfile: 'https://madelinesipaml.github.io/portafolio2024/'
    },
    {
      nombre: 'Bastian Rubilar',
      puesto: 'CTO',
      foto: 'https://b4stiann.github.io/PortafolioNuevo/foto_de_perfil.svg',
      descripcion: 'Encargado de la infraestructura fisica del proyecto. Configurador de los computadores para su correcto funcionamiento',
      linkProfile: 'https://b4stiann.github.io/PortafolioNuevo/'
    },
    {
      nombre: 'Fabian Vargas',
      puesto: 'CTO',
      foto: 'https://fbnnt.github.io/Miportafolio/img/Img-4.jpeg',
      descripcion: 'Encargado de la tecnologia logica y fisica de la pagina Sport Fútbol. Creador del servidor de Sport Fútbol.',
      linkProfile: 'https://fbnnt.github.io/Miportafolio/'
    },
    {
      nombre: 'Tomas Gutierrez',
      puesto: 'CTO',
      foto: '',
      descripcion: 'Encargado de la infraestructura fisica del proyecto. Configurador del router para su correcto funcionamiento',
      linkProfile: ''
    },
  ]

  
}

interface Personal {
  nombre: string;
  puesto: string;
  foto?: string;
  descripcion: string;
  linkProfile: string;
}
