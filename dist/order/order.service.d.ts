import * as mongoose from 'mongoose';
import { Order } from './schemas/order.schema';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: mongoose.Model<Order>);
    findAll(): Promise<Order[]>;
    create(order: Order): Promise<Order>;
    findById(id: string): Promise<Order>;
    updateById(id: string, order: Order): Promise<Order>;
    deleteById(id: string): Promise<Order>;
}
