/* eslint-disable prettier/prettier */
import { Status } from '../schemas/order.schema';

export class UpdateOrderDto {
  readonly productID: string;
  readonly userID: string;
  readonly storeID: string;
  readonly amount: number;
  readonly status: Status;
}
