import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { HomePage } from './home.page';


@NgModule({
  declarations: [HomePage],
  imports: [
    IonicModule,
    FormsModule, // Importa FormsModule aquí
    // ...otros módulos o configuraciones
  ],
})
export class HomeModule {}