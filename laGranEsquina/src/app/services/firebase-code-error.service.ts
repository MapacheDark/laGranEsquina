import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/fire-base-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() {
    
   }
   codeError(code: string) {
    switch (code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'EL usuario ya existe';
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo invalido';
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Usuario no existe';
      default:
        return 'Error desconocido'
    }

  }
}
