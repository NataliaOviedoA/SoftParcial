import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Models/paciente.model';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  _contactList: Paciente[] = [];
  constructor(private http: HttpClient) { }

  listarPacientes(): Observable<Paciente[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Paciente[]>(
      Constants.ENDPOINT_PACIENTES, { headers : headers }
    );
  }

  addPaciente(form): Observable<Paciente[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(form);
  // this.http.post(Constants.ENDPOINT_PACIENTES_INSERTAR, form.value)
  // .subscribe( data  => {console.log('POST Request is successful ', data); },
  // error  => { console.log('Error', error); });
  return this.http.get<Paciente[]>(
    Constants.ENDPOINT_PACIENTES, { headers : headers }
  );
  }
}
