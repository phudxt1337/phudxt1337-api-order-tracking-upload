/* eslint-disable prettier/prettier */
import { Status } from '../schemas/store.schema';

export class UpdateStoreDto {
  readonly name: string;
  readonly status: Status;
}
