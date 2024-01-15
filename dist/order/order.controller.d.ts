import { Order } from './schemas/order.schema';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getAllStores(): Promise<Order[]>;
    createOrder(order: CreateOrderDto): Promise<Order>;
    getOrder(id: string): Promise<Order>;
    updateOrder(id: string, order: UpdateOrderDto): Promise<Order>;
    deleteOrder(id: string): Promise<Order>;
}
