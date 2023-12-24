// triangulo.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TrianguloComponent } from './triangulo.component';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@NgModule({
  declarations: [TrianguloComponent],
  imports: [IonicModule, FormsModule],
})
export class TrianguloModule {}