import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ConfiguracionCargo } from '@core/index.data.model';
import { NotificationService } from '@core/index.service.trigger';
import { ConfiguracionService } from '@core/index.service.http';

@Component({
  selector: 'app-configuracion-rol',
  templateUrl: './configuracion-rol.component.html',
  styleUrl: './configuracion-rol.component.css'
})
export class ConfiguracionRolComponent implements OnInit, OnDestroy {
  roles: ConfiguracionCargo[] = []
  rolSub: Subscription = new Subscription();
  isSend: boolean = false;

  constructor(
    private configuracionSrv: ConfiguracionService,
    private notificationSrv: NotificationService,
  ) {}

  ngOnInit(): void {
    this.rolSub = this.configuracionSrv.getAllConfiguracionCargo().subscribe({
      next: configuraciones => {
        for(let conf of configuraciones) {
          this.roles.push(conf)
        }
      }
    })
  }

  ngOnDestroy(): void {
    if(this.rolSub) this.rolSub.unsubscribe();
  }

  public viewChange() {
    this.isSend = true;
    this.configuracionSrv.updateConfiguracionesCargo(this.roles).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Lista de roles actualizada');
        this.isSend = false;
      },
      error: err => {
        this.notificationSrv.addNotification('error', 'Error del servidor');
        this.isSend = false;
        console.error(err);
      }
    })
  }
}
