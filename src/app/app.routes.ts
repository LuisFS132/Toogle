import { Routes } from '@angular/router';
import { InicioToComponent } from './componentes/inicio-to/inicio-to.component';
import { LikesComponent } from './componentes/likes/likes.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { RolesComponent } from './componentes/roles/roles.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { InicioToIdComponent } from './componentes/inicio-to-id/inicio-to-id.component';
import { LikesidComponent } from './componentes/likesid/likesid.component';
import { ComentariosidComponent } from './componentes/comentariosid/comentariosid.component';
import { RolesidComponent } from './componentes/rolesid/rolesid.component';
import { UsuariosidComponent } from './componentes/usuariosid/usuariosid.component';

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
        path: 'likes/:id',
        component : LikesidComponent
    },
    {
        path: 'buscar-like/:valor',
        component : LikesidComponent
    },
    {
        path: 'comentarios',
        component : ComentariosComponent
    },
    {
        path: 'comentarios/:id',
        component : ComentariosidComponent
    },
    {
        path: 'buscar-comentario/:valor',
        component : ComentariosidComponent
    },
    {
        path: 'roles',
        component : RolesComponent
    },
    {
        path: 'roles/:id',
        component : RolesidComponent
    },
    {
        path: 'buscar-rol/:valor',
        component : RolesidComponent
    },
    {
        path: 'usuarios',
        component : UsuariosComponent
    },
    {
        path: 'usuarios/:id',
        component : UsuariosidComponent
    },
    {
        path: 'buscar-usuario/:valor',
        component : UsuariosidComponent
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
