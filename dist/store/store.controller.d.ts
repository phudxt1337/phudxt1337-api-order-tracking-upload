import { Store } from './schemas/store.schema';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoreController {
    private storeService;
    constructor(storeService: StoreService);
    getAllStores(): Promise<Store[]>;
    createStore(store: CreateStoreDto): Promise<Store>;
    getStore(id: string): Promise<Store>;
    updateStore(id: string, store: UpdateStoreDto): Promise<Store>;
    deleteStore(id: string): Promise<Store>;
}
