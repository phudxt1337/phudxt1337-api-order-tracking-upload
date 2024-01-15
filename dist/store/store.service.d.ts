import * as mongoose from 'mongoose';
import { Store } from './schemas/store.schema';
export declare class StoreService {
    private storeModel;
    constructor(storeModel: mongoose.Model<Store>);
    findAll(): Promise<Store[]>;
    create(store: Store): Promise<Store>;
    findById(id: string): Promise<Store>;
    updateById(id: string, store: Store): Promise<Store>;
    deleteById(id: string): Promise<Store>;
}
