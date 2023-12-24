// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirculoModule } from './circulo/circulo.module';
import { HomeModule } from './home/home.module';
import { TrianguloModule } from './triangulo/triangulo.module';  // Asegúrate de importar el módulo

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CirculoModule,
    HomeModule,
    AppComponent
  // Asegúrate de agregar el módulo aquí
  ],
  bootstrap: [ ],
  providers: [],
  // bootstrap: [AppComponent], // Elimina esta línea
})
export class AppModule {}