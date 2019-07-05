import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Services/servicio.service';
import { Servicio } from 'src/app/Models/servicio.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
  providers: [ServicioService]
})
export class ServicioComponent implements OnInit {
  idPaciente: number;

  listarServicio: any[] = [];
  constructor(private servicioS: ServicioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idPaciente = params['idPaciente'];
      this.mostrarServicio();
    });


  }

  mostrarServicio() {
    console.warn(this.idPaciente);
    this.servicioS.listarServicio().subscribe(respuesta => {
      const result = <any>respuesta;
     const Obj = JSON.parse(result[0].json);
     const newObj = Obj[0].KeyPhrases;
      this.listarServicio = newObj;
    });
  }

  volerPacientes() {
    this.router.navigate(['/user-profile']);
  }

}
