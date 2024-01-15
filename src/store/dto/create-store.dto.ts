/* eslint-disable prettier/prettier */
import { Status } from '../schemas/store.schema';

export class CreateStoreDto {
  readonly name: string;
  readonly status: Status;
}
