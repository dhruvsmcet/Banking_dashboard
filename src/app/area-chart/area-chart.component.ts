import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent {
  faChevronDown = faChevronDown;
  constructor() {
    //Chart.register();
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [1700, 3300, 1300, 1800, 956, 1955, 840],
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,102,0.1)',
        borderColor: 'rgba(255,0,102,1)',
        fill: 'origin',
      },
      {
        data: [0, 1500, 900, 800, 2500, 2700, 3300],
        yAxisID: 'y1',
        backgroundColor: 'rgba(77,83,96,0.1)',
        borderColor: '#2947AA',
        fill: 'origin',
      },
      // {
      //   data: [0, 480, 770, 90, 4000],
      //   label: 'Series C',
      //   yAxisID: 'y0',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'transparent',
      //   fill: 'none',
      // },
    ],
    labels: ['0', '05', '10', '15', '20', '25', '30'],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        border: {
          dash: [0, 0],
        },
        grid: {
          display: false,
        },
      },
      y1: {
        border: {
          dash: [2, 4],
        },
        ticks: {
          stepSize: 1000,
          callback: function (value, index, values) {
            console.log(value, index, values);
            var ranges = [
              { divider: 1e6, suffix: 'M' },
              { divider: 1e3, suffix: 'k' },
            ];
            function formatNumber(n: any) {
              for (var i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n;
            }
            return '' + formatNumber(value);
          },
        },
      },
    },
  };
}
