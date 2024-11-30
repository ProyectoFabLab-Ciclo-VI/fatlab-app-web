import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagoDTO } from '@core/index.data.entities';
import { PagoMapper } from '@core/index.data.mapper';
import { Pago } from '@core/index.data.model';

import { environment } from '@environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private url: string = `${environment.API_URL}/apipago`;
  private pagoMapper: PagoMapper = new PagoMapper();

  constructor(
    private http: HttpClient,
  ) { }

  public getAllPagos() {
    return this.http.get<Pago[]>(`${this.url}/listar/pago`).pipe(
      map((pagos: PagoDTO[]) => {
        const pagosTransformadas = pagos.map(c => this.pagoMapper.mapFrom(c));
        return pagosTransformadas;
      })
    );
  }
}
