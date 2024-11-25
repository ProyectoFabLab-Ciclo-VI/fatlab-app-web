import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from '@environments/environment';

import { ConfiguracionCargo } from '../../index.data.model';
import { ConfiguracionCargoDTO } from '../../index.data.entities';
import { ConfiguracionCargoMapper } from '../../index.data.mapper';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private url: string = `${environment.API_URL}/apiconfiguracion`;
  private configuracionCargoMapper: ConfiguracionCargoMapper = new ConfiguracionCargoMapper();

  constructor(
    private http: HttpClient,
  ) { }

  getAllConfiguracionCargo() {
    return this.http.get<ConfiguracionCargo[]>(`${this.url}/lista/configuracion-cargo`).pipe(
      map((configuracion: ConfiguracionCargoDTO[]) => {
        const categoriasTransformadas = configuracion.map(c => this.configuracionCargoMapper.mapFrom(c));
        return categoriasTransformadas;
      })
    );
  }

  updateConfiguracionCargo(conf: ConfiguracionCargo){
    const configuracion: ConfiguracionCargoDTO = this.configuracionCargoMapper.mapTo(conf);
    return this.http.put(`${this.url}/update/configuracion-cargo/${conf.id}`,configuracion);
  }

  updateConfiguracionesCargo(confs: ConfiguracionCargo[]){
    const configuraciones: ConfiguracionCargoDTO[] = confs.map(conf => this.configuracionCargoMapper.mapTo(conf));
    return this.http.put(`${this.url}/update/configuracion-cargo`,configuraciones, { responseType: 'text' as 'json' });
  }
}
