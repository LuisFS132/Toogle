import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signOut} from 'firebase/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor() { }

  getAuth(){  // obtener autenticacion de firebase
    return getAuth();
  }

  register(user:User ){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password) // crea un nuevo usuario con el correo y la contraseña
  }

  async login(user:User){
    const result = await signInWithEmailAndPassword(getAuth(), user.email, user.password);
    // Guardar el token
    const token = await result.user.getIdToken();
    localStorage.setItem('token', token);
    return result;
  }

  async loginGoogle(){
    const result = await signInWithPopup(getAuth(), new GoogleAuthProvider());
    // Guardar el token
    const token = await result.user.getIdToken();
    localStorage.setItem('token', token);
    return result;
  }

  logLogout(){
    localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
    return signOut(getAuth()) // recibe la autenticacino 
  }

  isAuthenticated(): boolean{
    const user = getAuth().currentUser; // obtiene el usuario actual
    return user !== null; // si el usuario es diferente de null, retorna verdadero

  }
}
