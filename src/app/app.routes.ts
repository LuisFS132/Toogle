import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [

    {
        path: 'inicio',
        canActivate: [AuthGuard],
        component : InicioToComponent
    },
    {
        path: 'likes',
        canActivate: [AuthGuard],
        component : LikesComponent
    },
    {
        path: 'likes/:id',
        canActivate: [AuthGuard],
        component : LikesidComponent
    },
    {
        path: 'buscar-like/:valor',
        canActivate: [AuthGuard],
        component : LikesidComponent
    },
    {
        path: 'comentarios',
        canActivate: [AuthGuard],
        component : ComentariosComponent
    },
    {
        path: 'comentarios/:id',
        canActivate: [AuthGuard],
        component : ComentariosidComponent
    },
    {
        path: 'buscar-comentario/:valor',
        canActivate: [AuthGuard],
        component : ComentariosidComponent
    },
    {
        path: 'roles',
        canActivate: [AuthGuard],
        component : RolesComponent
    },
    {
        path: 'roles/:id',
        canActivate: [AuthGuard],
        component : RolesidComponent
    },
    {
        path: 'buscar-rol/:valor',
        canActivate: [AuthGuard],
        component : RolesidComponent
    },
    {
        path: 'usuarios',
        canActivate: [AuthGuard],
        component : UsuariosComponent
    },
    {
        path: 'usuarios/:id',
        canActivate: [AuthGuard],
        component : UsuariosidComponent
    },
    {
        path: 'buscar-usuario/:valor',
        canActivate: [AuthGuard],
        component : UsuariosidComponent
    },
    {
        path: 'buscar-post/:valor',
        canActivate: [AuthGuard],
        component : InicioToIdComponent
    },
    {
        path: 'post/:id',
        canActivate: [AuthGuard],
        component : InicioToIdComponent
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'registro',
        component : RegistroComponent
    },
    {
        path: '',
        redirectTo : '/login',
        pathMatch : 'full'
    }

];
