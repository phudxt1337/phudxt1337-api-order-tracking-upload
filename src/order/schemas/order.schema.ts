/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Status {
  COOKING = 'open',
  READY = 'ready',
  DONE = 'close',
  CANCEL = 'cancel',
}

@Schema({
  timestamps: true,
})
export class Order {
  @Prop()
  productID: string;

  @Prop()
  userID: string;

  @Prop()
  storeID: string;

  @Prop()
  amount: number;

  @Prop()
  status: Status;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
