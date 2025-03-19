import { Routes } from '@angular/router';
import { InicioToComponent } from './componentes/inicio-to/inicio-to.component';
import { LikesComponent } from './componentes/likes/likes.component';

export const routes: Routes = [

    {
        path: 'inicio',
        component : InicioToComponent
    },
    {
        path: 'likes',
        component : LikesComponent
    },
    {
        path: '',
        redirectTo : '/inicio',
        pathMatch : 'full'
    }

];
