import { Injectable } from '@angular/core';
import { Especialidad } from '../Models/especialidad.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http: HttpClient) { }

  listarEspecialidad(): Observable<Especialidad[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Especialidad[]>(
      Constants.ENDPOINT_ESPECIALIDAD, { headers : headers }
    );
  }
}
