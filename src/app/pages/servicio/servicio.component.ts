import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Services/servicio.service';
import { Servicio } from 'src/app/Models/servicio.model';

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
      const result = <any>respuesta;
     const Obj = JSON.parse(result[0].json);
     const newObj = Obj[0].KeyPhrases;
      this.listarServicio = newObj;
    });
  }

}
