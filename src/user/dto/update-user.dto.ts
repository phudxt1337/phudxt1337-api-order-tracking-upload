/* eslint-disable prettier/prettier */
import { Status } from '../schemas/user.schema';

export class UpdateUserDto {
  readonly name: string;
  readonly status: Status;
}
