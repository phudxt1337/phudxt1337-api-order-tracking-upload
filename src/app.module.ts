import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://patiparnpa:V8e9YAGOtCbZyKBs@cluster0.dluwlrl.mongodb.net/order-tracking?retryWrites=true&w=majority',
    ),
    ProductModule,
    StoreModule,
    UserModule,
    OrderModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
