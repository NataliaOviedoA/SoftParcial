import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/environments/contanst';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  listarServicio(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
 //   headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get<any[]>(
      Constants.ENDPOINT_OBTENER_VALOR, { headers : headers }
    );
  }

}
