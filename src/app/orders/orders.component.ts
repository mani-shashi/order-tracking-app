import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusPipe } from '../pipes/order-status.pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderStatusPipe],
  templateUrl: './orders.component.html'
})
export class OrdersComponent {

  orders = [
    { id: 1, price: 185, date: new Date(), status: 'P' },
    { id: 2, price: 94585, date: new Date(), status: 'S' },
    { id: 3, price: 4352, date: new Date(), status: 'D' },
    { id: 4, price: 4564, date: new Date(), status: 'P' },
    { id: 5, price: 455, date: new Date(), status: 'S' },
    { id: 6, price: 675, date: new Date(), status: 'D' }
  ];

}