import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'catalogo', component: CatalogoComponent},  
  {path: 'catalogo/:productName', component: DetalleProductoComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
