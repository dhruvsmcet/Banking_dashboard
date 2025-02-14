import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent {
  ficons: any = icons;
}
