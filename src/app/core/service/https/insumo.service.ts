import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Insumo } from '../../index.data.model';
import { InsumoDTO } from '../../index.data.entities';
import { InsumoMapper } from '../../index.data.mapper';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  private url: string = `${environment.API_URL}/apiinventario`
  private insumoMapper: InsumoMapper = new InsumoMapper();

  constructor(
    private http: HttpClient,
  ) { }

  public saveInsumo(insumo: Insumo) {
    const insumoDto: InsumoDTO = this.insumoMapper.mapTo(insumo);
    return this.http.post(`${this.url}/add/insumo`,insumoDto);
  }
}
