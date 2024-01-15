/* eslint-disable prettier/prettier */
import { Status } from '../schemas/product.schema';

export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly status: Status;
}
