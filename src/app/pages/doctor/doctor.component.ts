import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';
import { Doctor } from 'src/app/Models/doctor.model';
import { Turno } from 'src/app/Models/turno.model';
import { TurnoService } from 'src/app/Services/turno.service';
import { EspecialidadService } from 'src/app/Services/especialidad.service';
import { Especialidad } from 'src/app/Models/especialidad.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  providers:[DoctorService]
})
export class DoctorComponent implements OnInit {
  listaDoctores: Doctor[] = [];
  listaTurnos: Turno[] = [];
  listaEspecialidad: Especialidad[] = [];
  closeResult: string;
  constructor(
    private doctorService: DoctorService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.listarDoctores();
    this.listarTurnos();
    this.listarEspecialidad();
  }

  listarDoctores() {
    this.doctorService.listarDoctores().subscribe(respuesta => {
      this.listaDoctores = respuesta;
      // console.warn(respuesta);
    });
  }

  listarTurnos() {
    this.doctorService.listarTurnos().subscribe(respuesta => {
      this.listaTurnos = respuesta;
      // console.warn(respuesta);
    });
  }

  listarEspecialidad() {
    this.doctorService.listarEspecialidad().subscribe(respuesta => {
      this.listaEspecialidad = respuesta;
      // console.warn(respuesta);
    });
  }

  open(content2) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  registerDoctor(form2) {
    this.doctorService.addDoctor(form2.value).subscribe(respuesta => {
      this.listaDoctores = respuesta;
      // console.warn(respuesta);
    });
}

}
