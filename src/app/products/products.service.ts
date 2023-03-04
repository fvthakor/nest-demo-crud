import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CommonService } from '../common.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService extends CommonService {
  constructor(
    @Inject('PRODUCT_MODEL')
    public model: Model<Product>,
  ) {
    super(model);
  }
}
