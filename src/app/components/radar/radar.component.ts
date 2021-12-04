import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: [],
})
export class RadarComponent {
  public data: ChartDataset[] = [
    {
      data: [65, 59, 90, 81, 56, 55, 40],
      label: 'Wolverine',
      borderColor: 'rgba(220, 112, 10,1)',
      backgroundColor: 'rgba(220, 112, 10,0.3)',
      hoverBackgroundColor: 'rgba(220, 112, 10,1)',
    },
    {
      data: [28, 48, 40, 19, 96, 27, 100],
      label: 'Professor X',
      borderColor: 'rgba(0,200,50,1)',
      backgroundColor: 'rgba(0,200,50,0.3)',
      hoverBackgroundColor: 'rgba(0,200,50,1)',
    },
    {
      data: [15, 62, 20, 39, 76, 7, 80],
      label: 'Colossus',
      borderColor: 'rgba(255,0,0,1)',
      backgroundColor: 'rgba(255,0,0,0.3)',
      hoverBackgroundColor: 'rgba(255,0,0,1)',
    },
  ];
  public labels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];
  public options: ChartOptions = {
    responsive: true,
  };
  public legend = true;
}
