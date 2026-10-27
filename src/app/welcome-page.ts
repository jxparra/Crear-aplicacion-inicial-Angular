import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {
  titulo = 'Práctica DAW: Gestión de entornos Angular';
  bienvenida = 'Bienvenido/a a la aplicación de práctica de despliegues con Git, GitHub y Vercel.';
  entorno = 'Entorno de producción';
  codigo = 'PROD';
  rama = 'main';
}
