import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';
import { Doctor } from 'src/app/Models/doctor.model';
import { Turno } from 'src/app/Models/turno.model';
import { TurnoService } from 'src/app/Services/turno.service';
import { EspecialidadService } from 'src/app/Services/especialidad.service';
import { Especialidad } from 'src/app/Models/especialidad.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  public data: any;
  public _contactForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.listarDoctores();
    this.listarTurnos();
    this.listarEspecialidad();

    // this._contactForm = this._formBuilder.group({
    //   FirstName: [ this.data.FirstName, [Validators.required]],
    //   LastName: [ this.data.LastName, [Validators.required]],
    //   Contact: [ this.data.Contact, [Validators.required]],
    //   Email: [ this.data.Email , [Validators.required]],
    // });
  }

  // onSubmit() {
  //     this.doctorService.addDoctor(this._contactForm.value);
  // }

  listarDoctores() {
    this.doctorService.listarDoctores().subscribe(respuesta => {
      this.listaDoctores = respuesta;
      console.warn(respuesta);
    });
  }

  listarTurnos() {
    this.doctorService.listarTurnos().subscribe(respuesta => {
      this.listaTurnos = respuesta;
      console.warn(respuesta);
    });
  }

  listarEspecialidad() {
    this.doctorService.listarEspecialidad().subscribe(respuesta => {
      this.listaEspecialidad = respuesta;
      console.warn(respuesta);
    });
  }

}
