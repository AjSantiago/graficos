import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public data: ChartDataset[] = [
    {
      data: [350, 450, 100],
      borderColor: 'rgba(220, 112, 10,1)',
      backgroundColor: 'rgba(220, 112, 10,0.3)',
      hoverBackgroundColor: 'rgba(220, 112, 10,1)',
    },
    {
      data: [50, 150, 120],
      borderColor: 'rgba(0,200,50,1)',
      backgroundColor: 'rgba(0,200,50,0.3)',
      hoverBackgroundColor: 'rgba(0,200,50,1)',
    },
    {
      data: [250, 130, 70],
      borderColor: 'rgba(255,0,0,1)',
      backgroundColor: 'rgba(255,0,0,0.3)',
      hoverBackgroundColor: 'rgba(255,0,0,1)',
    },
  ];
  public labels: string[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public options: ChartOptions = {
    responsive: true,
  };
  public legend = false;
}
