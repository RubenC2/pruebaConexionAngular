import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mensaje: string = '';  // Variable para almacenar la respuesta
  error: string = '';    // Variable para almacenar el mensaje de error

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHola().subscribe({
      next: (data: string) => {
        this.mensaje = data;
      },
      error: (error) => {
        this.error = 'Ocurrió un error al obtener los datos. Intenta nuevamente más tarde.';
        console.error('Error en la solicitud HTTP:', error);
      },
      complete: () => {
        console.log('La solicitud ha sido completada');
      }
    });
  }
}
