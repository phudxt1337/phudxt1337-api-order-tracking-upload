/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}

@Schema({
  timestamps: true,
})
export class Store {
  @Prop()
  name: string;

  @Prop()
  status: Status;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
