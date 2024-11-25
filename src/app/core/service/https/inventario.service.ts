import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from '@environments/environment';

import { CategoriaInsumoMapper, InsumoMapper } from '../../index.data.mapper';
import { CategoriaInsumo, Insumo } from '../../index.data.model';
import { CategoriaInsumoDTO, InsumoDTO } from '../../index.data.entities';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private url: string = `${environment.API_URL}/apiinventario`;
  private categoriaInsumoMapper: CategoriaInsumoMapper = new CategoriaInsumoMapper();
  private insumoMapper: InsumoMapper = new InsumoMapper();

  constructor(
    private http: HttpClient,
  ) { }

  getAllCategoriaInsumo() {
    return this.http.get<CategoriaInsumo[]>(this.url + '/list/categoria-insumo').pipe(
      map((categorias: CategoriaInsumoDTO[]) => {
        const categoriasTransformadas = categorias.map(c => this.categoriaInsumoMapper.mapFrom(c));
        return categoriasTransformadas;
      })
    );
  }

  getAllInsumoByIdCategoria(id: number) {
    return this.http.get<Insumo[]>(this.url + '/list/insumo/' + id).pipe(
      map((insumos: InsumoDTO[]) => {
        const insumosTransformadas = insumos.map(c => this.insumoMapper.mapFrom(c));
        return insumosTransformadas;
      })
    );
  }
}
