import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';

import { SelectItem } from '@core/index.model.system';
import { ConfiguracionCargo, DatoPedido } from '@core/index.data.model';
import { ConfiguracionService } from '@core/index.service.http';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrl: './datos-pedido.component.css',
  standalone: true,
  imports: [CustomSelectComponent, FormsModule],
})
export class DatosPedidoComponent implements OnInit, OnDestroy {
  rol: ConfiguracionCargo = {
    id: 0,
    cargo: null,
    igv: false,
    manoObra: false,
  };
  roles: ConfiguracionCargo[] = [];
  rolesSelected: SelectItem[] = [];
  roleSelect!: SelectItem;
  
  roleSub: Subscription = new Subscription();

  @Input() datosPedido: DatoPedido = {
    cantidadUsada: 0,
    tiempoImpresion: 0,
    porcentajeGanancia: 0,
    porcentajeTasaFallo: 0,
    costoOperador: 0,
    usarIgv: true,
  };

  @Output() datosPedidoChange = new EventEmitter<DatoPedido>();

  constructor(
    private configuracionSrv: ConfiguracionService,
  ) {}

  ngOnInit(): void {
    this.roleSub = this.configuracionSrv.getAllConfiguracionCargo().subscribe(
      {
        next: configuraciones => {
          this.roles = configuraciones;
          this.rolesSelected = [];
          for(let conf of configuraciones) {
            this.rolesSelected.push({ value: conf.id, viewValue: conf.cargo?.nombre ?? '' });
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    if(this.roleSub) this.roleSub.unsubscribe();
  }

  sendChange(useIgv?: boolean) {
    if(useIgv != undefined) this.datosPedido.usarIgv = useIgv;
    this.datosPedidoChange.emit(this.datosPedido);
  }

  changeRol() {
    if(this.roles.length <= 0) return;
    this.rol = this.roles.filter(r => r.id == this.roleSelect.value)[0];
    this.datosPedido.usarIgv = this.rol.igv;
    if(!this.rol.manoObra) {
      this.datosPedido.costoOperador = 0;
    }
    this.sendChange();
  }
}
