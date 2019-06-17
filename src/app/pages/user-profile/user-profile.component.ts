import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/Services/paciente.service';
import { Paciente } from 'src/app/Models/paciente.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [PacienteService]
})
export class UserProfileComponent implements OnInit {
  listaPaciente: Paciente[] = [];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.listarPaciente();
  }

  listarPaciente() {
    this.pacienteService.listarPacientes().subscribe(respuesta => {
      this.listaPaciente = respuesta;
      console.warn(respuesta);
    });
  }

}
