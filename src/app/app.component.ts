import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ifElseTask';
  currentBalance: any;
  lastTransaction: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.get_current_balance();
    this.get_last_transactions();
  }

  get_current_balance() {
    this.apiService
      .callServer('https://1.api.fy23ey01.careers.ifelsecloud.com/')
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentBalance = res;
        },
        error: (err) => {},
      });
  }
  get_last_transactions() {
    this.apiService
      .callServer('https://2.api.fy23ey01.careers.ifelsecloud.com/')
      .subscribe({
        next: (res) => {
          console.log(res);
          this.lastTransaction = res;
        },
        error: (err) => {},
      });
  }
}
