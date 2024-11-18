import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../../../core/service/https/configuracion.service';
import { ConfiguracionCargo } from '../../../../core/index.data.model';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../core/index.service.trigger';

@Component({
  selector: 'app-configuracion-rol',
  templateUrl: './configuracion-rol.component.html',
  styleUrl: './configuracion-rol.component.css'
})
export class ConfiguracionRolComponent implements OnInit, OnDestroy {
  roles: ConfiguracionCargo[] = []
  rolSub: Subscription = new Subscription();

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
    this.configuracionSrv.updateConfiguracionesCargo(this.roles).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Lista de roles actualizada');
      },
      error: err => {
        this.notificationSrv.addNotification('error', 'Error del servidor');
        console.error(err);
      }
    })
  }
}
