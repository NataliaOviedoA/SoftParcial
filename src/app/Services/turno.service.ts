import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../Models/turno.model';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) { }

  listarTurnos(): Observable<Turno[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Turno[]>(
      Constants.ENDPOINT_DOCTOR, { headers : headers }
    );
  }
}
