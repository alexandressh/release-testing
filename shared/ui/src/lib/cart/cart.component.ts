import { Component, Input } from '@angular/core';
import {CartItem} from '@shopping/shared/util';

@Component({
  selector: 'shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() items: CartItem[] = [];
}
