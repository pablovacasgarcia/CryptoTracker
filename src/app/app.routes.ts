import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MonedasComponent } from './monedas/monedas.component';
import { autentificacionGuard } from './autentificacion.guard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: CuerpoComponent},
    {path: 'detalle/:id', component: DetalleComponent, canActivate:[autentificacionGuard]},
    {path: 'monedas', component: MonedasComponent, canActivate:[autentificacionGuard]},
    {path: 'portfolio', component: PortfolioComponent, canActivate:[autentificacionGuard]},
    {path: 'login', component: LoginComponent}
];
