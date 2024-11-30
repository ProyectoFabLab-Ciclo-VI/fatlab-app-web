import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

import { ModeloPredefinidoMapper } from '@core/index.data.mapper';
import { ModeloPredefinido } from '@core/index.data.model';
import { ModeloPredefinidoDTO } from '@core/index.data.entities';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloPredefinidoService {
  private url: string = `${environment.API_URL}/apimodelo-predefinido`;
  private modeloPredefinidoMapper: ModeloPredefinidoMapper = new ModeloPredefinidoMapper();

  constructor(
    private http: HttpClient,
  ) { }

  public saveModeloPredefinido(modeloPredefinido: ModeloPredefinido) {
    const modeloPredefinidoDto: ModeloPredefinidoDTO = this.modeloPredefinidoMapper.mapTo(modeloPredefinido);
    return this.http.post(`${this.url}/add`, modeloPredefinidoDto, { responseType: 'text' as 'json' });
  }

  public getAllModelosPredefinidos() {
    return this.http.get<ModeloPredefinido[]>(`${this.url}/list`).pipe(
      map((modelosPredefinidos: ModeloPredefinidoDTO[]) => {
        const modelosTransformados = modelosPredefinidos.map(m => this.modeloPredefinidoMapper.mapFrom(m));
        return modelosTransformados;
      })
    );
  }
}