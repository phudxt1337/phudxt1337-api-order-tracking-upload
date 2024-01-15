/* eslint-disable prettier/prettier */
import { Status } from '../schemas/user.schema';

export class CreateUserDto {
  readonly name: string;
  readonly status: Status;
}
