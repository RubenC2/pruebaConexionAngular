import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Definir la URL de la API aquí
export const apiUrl = 'https://localhost:7298/api/hola'; // Reemplaza con la URL real de tu API

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Proveer apiUrl como una constante que puede ser inyectada en cualquier parte
    { provide: 'apiUrl', useValue: apiUrl }
  ]
};
