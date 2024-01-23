import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MonedasComponent } from './monedas/monedas.component';

export const routes: Routes = [
    {path: '', component: CuerpoComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: 'monedas', component: MonedasComponent}
];
