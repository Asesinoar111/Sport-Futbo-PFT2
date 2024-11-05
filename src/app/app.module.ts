import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { CompraPorEquiposComponent } from './compra-por-equipos/compra-por-equipos.component';
import { CompraPorGeneroComponent } from './compra-por-genero/compra-por-genero.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { TallaZapatillaComponent } from './talla-zapatilla/talla-zapatilla.component';
import { AddCarritoFavoritoComponent } from './add-carrito-favorito/add-carrito-favorito.component';
import { TallaMslComponent } from './talla-msl/talla-msl.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TeamsComponent,
    PlayersComponent,
    HomeComponent,
    AccountComponent,
    FavoriteComponent,
    ShoppingComponent,
    CatalogoComponent,
    NovedadesComponent,
    CompraPorEquiposComponent,
    CompraPorGeneroComponent,
    FooterComponent,
    DetalleProductoComponent,
    TallaZapatillaComponent,
    AddCarritoFavoritoComponent,
    TallaMslComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
