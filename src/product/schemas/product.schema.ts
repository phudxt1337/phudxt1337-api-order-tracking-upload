/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  status: Status;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
