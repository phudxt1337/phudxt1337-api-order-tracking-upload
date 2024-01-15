import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product-.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllStores(): Promise<Product[]>;
    createProduct(product: CreateProductDto): Promise<Product>;
    getProduct(id: string): Promise<Product>;
    updateProduct(id: string, product: UpdateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
