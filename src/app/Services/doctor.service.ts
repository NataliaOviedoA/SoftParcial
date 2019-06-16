import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../Models/doctor.model';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  listarDoctores(): Observable<Doctor[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<Doctor[]>(
      Constants.ENDPOINT_LISTAR_DOCTORES, { headers : headers }
    )
  }


}
