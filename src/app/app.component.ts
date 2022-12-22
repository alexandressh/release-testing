import { Component } from '@angular/core';
import { CartItem } from '@shopping/shared/util';

@Component({
  selector: 'shopping-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: CartItem[] = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2'}]
}
