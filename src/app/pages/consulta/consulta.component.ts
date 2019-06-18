import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/Services/consulta.service';
import { Consulta } from 'src/app/Models/consulta.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  providers:[ConsultaService]
})
export class ConsultaComponent implements OnInit {
  listaConsulta: Consulta[] = [];
  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.listarConsultas();
  }

  listarConsultas() {
    this.consultaService.listarConsultas().subscribe(respuesta => {
      this.listaConsulta = respuesta;
      console.warn(respuesta);
    });
  }

}
