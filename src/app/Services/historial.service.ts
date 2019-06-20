import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Models/paciente.model';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }

  listarPaciente(): Observable<Paciente[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Paciente[]>(
      Constants.ENDPOINT_PACIENTES, { headers : headers }
    );
  }

  addServicio(form) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(
    Constants.ENDPOINT_AMAZON_SERVICE + '?idPaciente=' + form.idPaciente +
    '&referencia=' + form.referencia, { headers : headers })
    .subscribe( data  => {console.log('POST Request is successful ', data); },
    error  => { console.log('Error', error); });

    return this.http.get<Paciente[]>(
      Constants.ENDPOINT_PACIENTES, { headers : headers }
    );
  }
}
