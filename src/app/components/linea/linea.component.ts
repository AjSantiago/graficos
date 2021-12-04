import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styles: [],
})
export class LineaComponent {
  public data: ChartDataset[] = [
    {
      data: [65, 59, 80, 810, 56, 55, 40],
      label: 'Tamales',
      borderColor: 'rgba(220, 112, 10,1)',
      backgroundColor: 'rgba(220, 112, 10,0.3)',
      pointHoverBackgroundColor: '#fff',
    },
    {
      data: [28, 48, 40, 19, 86, 270, 90],
      label: 'Tortillas',
      borderColor: 'rgba(0,200,50,1)',
      backgroundColor: 'rgba(0,200,50,0.3)',
      pointHoverBackgroundColor: '#fff',
    },
    {
      data: [180, 480, 770, 90, 1000, 270, 400],
      label: 'Chorizo',
      borderColor: 'rgba(255,0,0,1)',
      backgroundColor: 'rgba(255,0,0,0.3)',
      pointHoverBackgroundColor: '#fff',
    },
  ];
  public labels: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
  ];
  public options: ChartOptions = {
    responsive: true,
  };
  public legend = true;
}
