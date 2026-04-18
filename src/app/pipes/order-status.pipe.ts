import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus',
  standalone: true
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: string): string {

    if (value === 'P') return 'Pending';
    if (value === 'S') return 'Shipped';
    if (value === 'D') return 'Delivered';

    return 'Unknown ❓';
  }

}