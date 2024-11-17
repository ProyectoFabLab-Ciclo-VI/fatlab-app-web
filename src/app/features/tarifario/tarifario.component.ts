import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { DatosPedidoComponent } from "./components/datos-pedido/datos-pedido.component";
import { DatosConsiderarComponent } from './components/datos-considerar/datos-considerar.component';
import { ResultadoCalculadoraComponent } from "./components/resultado-calculadora/resultado-calculadora.component";
import { CustomSelectComponent } from '../../shared/components/custom-select/custom-select.component';

import { SelectItem } from '../../core/index.model.system';
import { DatoCalculadora, DatoConsiderado, DatoPedido } from '../../core/index.data.model';

@Component({
  selector: 'app-tarifario',
  templateUrl: './tarifario.component.html',
  styleUrl: './tarifario.component.css',
  standalone: true,
  imports: [
    CustomSelectComponent,
    DatosPedidoComponent,
    DatosConsiderarComponent,
    ResultadoCalculadoraComponent,
    ResultadoCalculadoraComponent,
  ],
})
export class TarifarioComponent implements AfterViewInit {
  @ViewChild('Calculadora__header') calculadoraHeaderElement!: ElementRef<any>;
  @ViewChild('Calculadora__body') calculadoraBodyElement!: ElementRef<any>;

  public categoriasMaquina: SelectItem[] = [
    { value: 1, viewValue: 'Impresiones 3D' },
    { value: 2, viewValue: 'Papelería / Ploteo' },
    { value: 3, viewValue: 'Laser 3D' },
    { value: 4, viewValue: 'Escaneo 3D' },
  ];

  public maquinas: SelectItem[] = [
    { value: 'maquina-1', viewValue: 'Maquina 1' },
    { value: 'maquina-2', viewValue: 'Maquina 2' },
    { value: 'maquina-3', viewValue: 'Maquina 3' },
  ];

  public insumos: SelectItem[] = [
    { value: 1, viewValue: 'Insumo 1' },
    { value: 2, viewValue: 'Insumo 2' },
    { value: 3, viewValue: 'Insumo 3' },
    { value: 4, viewValue: 'Insumo 4' },
  ];

  public categoriaMaquinaSelected: SelectItem = this.categoriasMaquina[0];
  public maquinaSeleccionada!: SelectItem;
  public insumoSelected!: SelectItem;

  public datosConsiderado: DatoConsiderado = {
    porcentajeDesperdicioMaquina: 35,
    costoInsumo: 0.22,
    costoPorHoraElectricidad: 0.075,
    costoAmortizuacionPorHora: 3,
  }

  public calculadora: DatoCalculadora = {
    costoMateriales: 0,
    costoAmortizacion: 0,
    costoGanancia: 0,
    costoOperario: 0,
    costoFallo: 0,
    costoIgv: 0,
    costoTotal: 0,
  }

  public datosPedido: DatoPedido = {
    cantidadUsada: 0,
    tiempoImpresion: 0,
    porcentajeGanancia: 0,
    porcentajeTasaFallo: 0,
    costoOperador: 0,
    usarIgv: true,
  };

  constructor(
    private render: Renderer2,
  ){ }

  ngAfterViewInit(): void {
    if(!this.calculadoraHeaderElement && !this.calculadoraBodyElement) return;

    const elem = this.calculadoraBodyElement.nativeElement;
    const height = this.calculadoraHeaderElement.nativeElement.clientHeight;
    
    const heightWindow = '100vh';
    const gap = '32px';
    const paddingY = '40px';

    this.render.setStyle(elem, 'height', `calc(${heightWindow} - ${height}px - ${gap} - ${paddingY})`);
  }

  public realizarCalculo(pedido: DatoPedido): void {
    const { usarIgv } = pedido;
    const { amortizacion, ganancia, materiales, operario, tasaFallo } = this.calcularPrecioPedido(pedido);

    if(usarIgv) {
      this.calculadora.costoIgv = (amortizacion + tasaFallo + ganancia + materiales + operario) * 0.18;
    } else {
      this.calculadora.costoIgv = 0;
    }

    const total = amortizacion + tasaFallo + ganancia + this.calculadora.costoIgv + materiales + operario;

    this.calculadora.costoAmortizacion = amortizacion;
    this.calculadora.costoFallo = tasaFallo;
    this.calculadora.costoGanancia = ganancia;
    this.calculadora.costoMateriales = materiales;
    this.calculadora.costoOperario = operario;
    this.calculadora.costoTotal = total;
  }

  private calcularPrecioPedido(pedido: DatoPedido){
    const { cantidadUsada, costoOperador, porcentajeGanancia, porcentajeTasaFallo, tiempoImpresion } = pedido;
    const { costoAmortizuacionPorHora, costoInsumo, costoPorHoraElectricidad, porcentajeDesperdicioMaquina } = this.datosConsiderado;
  
    const decimalDesperdicioMaquina = porcentajeDesperdicioMaquina / 100;
    const decimalTasaFallo = porcentajeTasaFallo / 100;
    const decimalGanancia = porcentajeGanancia / 100;
    
    const precioDesperdicioInsumo = (cantidadUsada * decimalDesperdicioMaquina) * costoInsumo;
    const precioInsumo = cantidadUsada * costoInsumo;
    const precioElectricidadInsumo = costoPorHoraElectricidad * tiempoImpresion;

    const costoMaterial = precioDesperdicioInsumo + precioInsumo + precioElectricidadInsumo;
    
    let amortizacion = costoAmortizuacionPorHora * tiempoImpresion;
    let tasaFallo = (costoMaterial + costoOperador + amortizacion) * decimalTasaFallo;
    let ganancia = (costoMaterial + costoOperador) * decimalGanancia;
    let materiales = costoMaterial;
    let operario = costoOperador;

    amortizacion = parseFloat(amortizacion.toFixed(2));
    tasaFallo = parseFloat(tasaFallo.toFixed(2));
    ganancia = parseFloat(ganancia.toFixed(2));
    materiales = parseFloat(materiales.toFixed(2));
    operario = parseFloat(operario.toFixed(2));

    return {
      amortizacion,
      tasaFallo,
      ganancia,
      materiales,
      operario,
    };
  }
}
