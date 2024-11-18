import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

import { Maquina } from '../../index.data.model';
import { MaquinaDTO } from '../../index.data.entities';
import { MaquinaMapper } from '../../index.data.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private url: string = `${environment.API_URL}/apiinventario`;
  private maquinaMapper: MaquinaMapper = new MaquinaMapper();

  constructor(
    private http: HttpClient,
  ) { }

  public saveMaquina(maquina: Maquina) {
    const maquinaDto: MaquinaDTO = this.maquinaMapper.mapTo(maquina);
    return this.http.post(`${this.url}/add/maquina`,maquinaDto);
  }

  public getAllMaquinas() {
    return this.http.get<Maquina[]>(`${this.url}/list/maquinas`).pipe(
      map((maquinas: MaquinaDTO[]) => {
        const maquinasTransformadas = maquinas.map(m => this.maquinaMapper.mapFrom(m));
        return maquinasTransformadas;
      })
    );
  }
}
