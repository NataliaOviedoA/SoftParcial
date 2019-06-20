import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/Services/historial.service';
import { Paciente } from 'src/app/Models/paciente.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  providers:[HistorialService]
})
export class HistorialComponent implements OnInit {

  listaPacientes: Paciente[] = [];
  resultado: any;
  constructor(private historialService: HistorialService) { }

  ngOnInit() {
    this.listarPacientes();
  }

  listarPacientes() {
    this.historialService.listarPaciente().subscribe(respuesta => {
      this.listaPacientes = respuesta;
    });
  }

  registerHistorial(form2) {
    console.log(form2.value);
    this.historialService.addServicio(form2.value).subscribe(respuesta => {
      this.listaPacientes = respuesta;
    });
  }

}
