import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/Services/paciente.service';
import { Paciente } from 'src/app/Models/paciente.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [PacienteService]
})
export class UserProfileComponent implements OnInit {


  listaPaciente: Paciente[] = [];
  closeResult: string;
  constructor(
    private pacienteService: PacienteService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.listarPaciente();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  listarPaciente() {
    this.pacienteService.listarPacientes().subscribe(respuesta => {
      this.listaPaciente = respuesta;
      console.warn(respuesta);
    });
  }

register(form) {
    // console.log(form.value.ci);
    this.pacienteService.addPaciente(form.value).subscribe(respuesta => {
      this.listaPaciente = respuesta;
      console.warn(respuesta);
    });
}

}

export class PacienteI {
  constructor(private ci: number,
    private nombre: String,
    private sexo: String,
    private fechaNacimiento: String
    ) {}
}
