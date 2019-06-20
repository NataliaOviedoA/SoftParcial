import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
  providers: [ServicioService]
})
export class ServicioComponent implements OnInit {

  listarServicio: any[] = [];
  constructor(private servicioS: ServicioService) { }

  ngOnInit() {
    this.mostrarServicio();
  }

  mostrarServicio() {
    this.servicioS.listarServicio().subscribe(respuesta => {
      this.listarServicio = respuesta;
      console.warn(respuesta);
    });
  }

}
