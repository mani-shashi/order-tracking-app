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
    { id: 1, price: 1200, date: new Date(), status: 'P' },
    { id: 2, price: 800, date: new Date(), status: 'S' },
    { id: 3, price: 1500, date: new Date(), status: 'D' }
  ];

}