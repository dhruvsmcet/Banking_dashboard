import { Component, Input } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  ficons: any = icons;
  cardIcon: any;
  @Input('icon') icon: any = '';
  @Input('label') label: any;
  @Input('amount') amount: any;
  @Input('isActive') isActive: any;

  ngOnChanges() {
    //console.log(this.isActive);
  }
}
