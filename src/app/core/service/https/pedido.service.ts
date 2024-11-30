import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url: string = `${environment.API_URL}/apipedidos`;

  constructor(
    private http: HttpClient,
  ) { }
}
