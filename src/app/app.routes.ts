import { Routes } from '@angular/router';
import { InicioToComponent } from './componentes/inicio-to/inicio-to.component';
import { LikesComponent } from './componentes/likes/likes.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { RolesComponent } from './componentes/roles/roles.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { InicioToIdComponent } from './componentes/inicio-to-id/inicio-to-id.component';

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
        path: 'comentarios',
        component : ComentariosComponent
    },
    {
        path: 'roles',
        component : RolesComponent
    },
    {
        path: 'usuarios',
        component : UsuariosComponent
    },
    {
        path: 'buscar-post/:valor',
        component : InicioToIdComponent
    },
    {
        path: 'post/:id',
        component : InicioToIdComponent
    },
    {
        path: '',
        redirectTo : '/inicio',
        pathMatch : 'full'
    }

];
