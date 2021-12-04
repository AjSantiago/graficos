import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styles: [],
})
export class BarraComponent {
  public data: ChartDataset[] = [
    {
      data: [65, 59, 80, 81, 56],
      label: 'Tamales',
      borderColor: 'rgba(220, 112, 10,1)',
      backgroundColor: 'rgba(220, 112, 10,0.3)',
    },
    {
      data: [28, 48, 40, 19, 86],
      label: 'Chorizo',
      borderColor: 'rgba(0,200,50,1)',
      backgroundColor: 'rgba(0,200,50,0.3)',
    },
  ];
  public labels: string[] = ['2008', '2009', '2010', '2011', '2012'];
  public options: ChartOptions = {
    responsive: true,
  };
  public legend = true;
}
