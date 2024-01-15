import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Store } from './schemas/store.schema';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  async getAllStores(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @Post('/create')
  async createStore(
    @Body()
    store: CreateStoreDto,
  ): Promise<Store> {
    return this.storeService.create(store);
  }

  @Get(':id')
  async getStore(
    @Param('id')
    id: string,
  ): Promise<Store> {
    return this.storeService.findById(id);
  }

  @Put(':id')
  async updateStore(
    @Param('id')
    id: string,
    @Body()
    store: UpdateStoreDto,
  ): Promise<Store> {
    return this.storeService.updateById(id, store);
  }

  @Delete(':id')
  async deleteStore(
    @Param('id')
    id: string,
  ): Promise<Store> {
    return this.storeService.deleteById(id);
  }
}
