import { Routes } from '@angular/router';
import { InicioToComponent } from './componentes/inicio-to/inicio-to.component';

export const routes: Routes = [

    {
        path: 'inicio',
        component : InicioToComponent
    },
    {
        path: '',
        redirectTo : '/inicio',
        pathMatch : 'full'
    }

];
