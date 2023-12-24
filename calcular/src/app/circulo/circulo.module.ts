// circulo.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from './circulo.component';
import { FormsModule } from '@angular/forms';  
@NgModule({
  declarations: [CirculoComponent],
  imports: [IonicModule, FormsModule],  // Agrega FormsModule aquí
})
export class CirculoModule {}