import { Status } from '../schemas/product.schema';
export declare class UpdateProductDto {
    readonly name: string;
    readonly price: number;
    readonly status: Status;
}
