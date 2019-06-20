import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/Services/paciente.service';
import { Paciente } from 'src/app/Models/paciente.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [PacienteService]
})
export class UserProfileComponent implements OnInit {

  public _contactForm: FormGroup;
  listaPaciente: Paciente[] = [];
  public data: Paciente;
  isPopupOpened: boolean;
  dialog: any;
  constructor(private _formBuilder: FormBuilder,
    private pacienteService: PacienteService) { }

  ngOnInit() {
    this.listarPaciente();

    // this._contactForm = this._formBuilder.group({
    //   ci: [ this.data.ci, [Validators.required]],
    //   nombre: [ this.data.nombre, [Validators.required]],
    //   sexo: [ this.data.sexo, [Validators.required]],
    //   fechaNacimiento: [ this.data.fechaNacimiento, [Validators.required]],
    // });
  }

  addPaciente() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  listarPaciente() {
    this.pacienteService.listarPacientes().subscribe(respuesta => {
      this.listaPaciente = respuesta;
      console.warn(respuesta);
    });
  }

}
