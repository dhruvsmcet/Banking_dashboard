import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartConfiguration, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent {
  @ViewChild(BaseChartDirective) chartComponent: BaseChartDirective | any;
  public doughnutChartLabels: string[] = [
    'Shopping',
    'Workspace',
    'Food',
    'Entertainments',
  ];

  public chartOptions: ChartConfiguration['options'] = {
    elements: {},
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
    },
  };
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [150, 300, 300, 250],
        weight: 0.1,
        backgroundColor: ['#2E4285', ' #425eb1', '#8F9ED7', '#C7CEEB'],
        rotation: -45,
      },
    ],
  };
  constructor() {
    Chart.defaults.datasets.doughnut.weight = 0.2;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log((this.chartComponent.chart.options.cutout = '70%'));
  }
}
