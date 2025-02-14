import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MyCardComponent } from './my-card/my-card.component';
import { QuickTransferComponent } from './quick-transfer/quick-transfer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { CustomPipe } from './custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AreaChartComponent,
    DonutChartComponent,
    TransactionsComponent,
    MyCardComponent,
    QuickTransferComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
