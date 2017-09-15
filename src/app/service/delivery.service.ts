import { Delivery } from '../model/delivery';
import { DELIVERIES } from '../model/mock/mock-delivery';
import { Injectable } from '@angular/core';

@Injectable()
export class DeliveryService {
  constructor() { }

  getDeliveries(): Promise<Delivery[]> {
    return Promise.resolve(DELIVERIES);
  }
}
