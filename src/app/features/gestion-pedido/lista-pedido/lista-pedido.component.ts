import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pago } from '@core/index.data.model';
import { NotificationService } from '@core/index.service.trigger';
import { PagoService } from '@core/service/https/pago.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.css'
})
export class ListaPedidoComponent implements OnInit, OnDestroy {
  pagos: Pago[] = [];
  pagoSub: Subscription = new Subscription();
  isLoader: boolean = false;

  constructor(
    private pagoSrv: PagoService,
    private notificationSrv: NotificationService,
  ) { }

  ngOnInit(): void {
    this.ReloadPagos();
  }

  ngOnDestroy(): void {
    if(this.pagoSub) this.pagoSub.unsubscribe();    
  }

  public ReloadPagos() {
    this.pagos = [];
    this.isLoader = true;
    this.pagoSub = this.pagoSrv.getAllPagos().subscribe({
      next: (pagos) => {
        if(pagos.length > 0) {
          this.pagos = pagos;
          this.notificationSrv.addNotification('success','Listado exitosamente');
        } else {
          this.notificationSrv.addNotification('info','No hay pedidos');
        }
        this.isLoader = false;
      },
      error: (err) => {
        this.notificationSrv.addNotification('error','Error al listar');
        this.isLoader = false;
      }
    });
  }
}
