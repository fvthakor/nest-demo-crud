import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './app/posts/posts.module';
import { ProductsModule } from './app/products/products.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [PostsModule, ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
