import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CommonController } from '../common.controller';

@Controller('products')
export class ProductsController extends CommonController {
  constructor(public readonly service: ProductsService) {
    super(service);
  }
}
