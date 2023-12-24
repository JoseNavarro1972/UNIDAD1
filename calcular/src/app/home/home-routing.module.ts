import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'; // Importa el componente Home
import { CirculoComponent } from './circulo.component'; // Importa el componente Circulo
import { TrianguloComponent } from './triangulo/Triangulo.component'; // Importa el componente Triangulo

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'circulo', component: CirculoComponent },
  { path: 'triangulo', component: TrianguloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }