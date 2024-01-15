/* eslint-disable prettier/prettier */
import { Status } from '../schemas/product.schema';

export class UpdateProductDto {
  readonly name: string;
  readonly price: number;
  readonly status: Status;
}
