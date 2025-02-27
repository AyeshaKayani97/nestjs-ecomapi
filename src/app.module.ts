import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({isGlobal:true, cache:true}),
    MongooseModule.forRootAsync({
      useFactory:(configService:ConfigService)=>({
        uri:configService.get<string>("MONGODB_URI")
      }),
      inject:[ConfigService]
    }),
    UserModule,
    ProductsModule,
    CategoriesModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
