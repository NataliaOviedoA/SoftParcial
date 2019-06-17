import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Models/paciente.model';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  listarPacientes(): Observable<Paciente[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Paciente[]>(
      Constants.ENDPOINT_PACIENTES, { headers : headers }
    );
  }

  insertarPaciente(): Observable<Paciente[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Paciente[]>(
      Constants.ENDPOINT_PACIENTES, { headers : headers }
    );
  }
}
