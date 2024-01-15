import { Status } from '../schemas/product.schema';
export declare class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly status: Status;
}
