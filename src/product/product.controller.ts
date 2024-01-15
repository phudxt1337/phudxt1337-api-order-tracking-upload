import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product-.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllStores(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post('/create')
  async createProduct(
    @Body()
    product: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(product);
  }

  @Get(':id')
  async getProduct(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.productService.findById(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateById(id, product);
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.productService.deleteById(id);
  }
}
