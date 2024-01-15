import * as mongoose from 'mongoose';
import { Product } from './schemas/product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: mongoose.Model<Product>);
    findAll(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
    findById(id: string): Promise<Product>;
    updateById(id: string, product: Product): Promise<Product>;
    deleteById(id: string): Promise<Product>;
}
