import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../Models/doctor.model';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Constants } from 'src/environments/contanst';
import { Turno } from '../Models/turno.model';
import { Especialidad } from '../Models/especialidad.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  contactList: String[] = [];

  constructor(private http: HttpClient) { }

  listarDoctores(): Observable<Doctor[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Doctor[]>(
      Constants.ENDPOINT_DOCTOR, { headers : headers }
    );
  }

  listarTurnos(): Observable<Turno[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Turno[]>(
      Constants.ENDPOINT_TURNO, { headers : headers }
    );
  }

  listarEspecialidad(): Observable<Especialidad[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Especialidad[]>(
      Constants.ENDPOINT_ESPECIALIDAD, { headers : headers }
    );
  }

  addDoctor(form): Observable<Doctor[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  this.http.post(
  Constants.ENDPOINT_DOCTOR_INSERTAR + '?ci=' + form.ci + '&nombre=' + form.nombre + '&sexo=' + form.sexo + '&fechaNacimiento=' + form.fechaNacimiento +
  '&idTurno=' + form.idTurno + '&idEspecialidad=' + form.idEspecialidad,
  {headers : headers})
  .subscribe( data  => {console.log('POST Request is successful ', data); },
  error  => { console.log('Error', error); });

  return this.http.get<Doctor[]>(
    Constants.ENDPOINT_DOCTOR, { headers : headers }
  );
  }
}
