/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  status: Status;
}

export const UserSchema = SchemaFactory.createForClass(User);
