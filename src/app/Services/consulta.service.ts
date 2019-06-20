import { Injectable } from '@angular/core';
import { Consulta } from '../Models/consulta.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  listarConsultas(): Observable<Consulta[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Consulta[]>(
      Constants.ENDPOINT_CONSULTA, { headers : headers }
    );
  }

  addConsulta(form): Observable<Consulta[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  this.http.post(
  Constants.ENDPOINT_CONSULTA_INSERTAR + '?fecha=' + form.fecha + '&idTurno=' + form.idTurno + '&idHorario=' + form.idHorario +
  '&idPaciente=' + form.idPaciente, { headers : headers })
  .subscribe( data  => {console.log('POST Request is successful ', data); },
  error  => { console.log('Error', error); });

  return this.http.get<Consulta[]>(
    Constants.ENDPOINT_CONSULTA, { headers : headers }
  );
  }
}
