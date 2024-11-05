import { Component } from '@angular/core';

@Component({
  selector: 'app-compra-por-equipos',
  templateUrl: './compra-por-equipos.component.html',
  styleUrls: ['./compra-por-equipos.component.css']
})
export class CompraPorEquiposComponent {
  equipos = [
    {titulo: 'Colo-Colo', link: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Colo-Colo.svg/1200px-Colo-Colo.svg.png' },
    {titulo: 'Barcelona', link: 'https://cdn.worldvectorlogo.com/logos/fc-barcelona.svg' },
    {titulo: 'Real Madrid', link: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    {titulo: 'Universidad de Chile', link: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Emblema_del_Club_Universidad_de_Chile.png' },
    {titulo: 'Universidad Catolica', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7vHhwxyXgnnr25mVuZE59pUuBT9I4cveIg&s' },
    {titulo: 'Manchester City', link: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
    {titulo: 'Inter de Miami', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_nZPbtcXcEBrBKJYaxhm3e9vxMyeO_pUgg&s' },
    {titulo: 'Manchester United', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63WaJtd6yyzrs-Z3ipy_6K8Wijlh9xeBrPA&s' },
    {titulo: 'Liverpool', link: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/640px-Liverpool_FC.svg.png' },
    {titulo: 'Arsenal', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjoUa6rEmdXrG3AKDiS6jxymFrTB5cJ7dWQ&s' },
    {titulo: 'Chelsea', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn17YOns1CcbdcZBkKza1e8bMcGsi-JB5KFA&s' },
  ]
}
