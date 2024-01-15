import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Order } from './schemas/order.schema';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getAllStores(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post('/create')
  async createOrder(
    @Body()
    order: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.create(order);
  }

  @Get(':id')
  async getOrder(
    @Param('id')
    id: string,
  ): Promise<Order> {
    return this.orderService.findById(id);
  }

  @Put(':id')
  async updateOrder(
    @Param('id')
    id: string,
    @Body()
    order: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.updateById(id, order);
  }

  @Delete(':id')
  async deleteOrder(
    @Param('id')
    id: string,
  ): Promise<Order> {
    return this.orderService.deleteById(id);
  }
}
