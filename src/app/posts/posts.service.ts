import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CommonService } from '../common.service';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService extends CommonService {
  constructor(
    @Inject('CAT_MODEL')
    model: Model<Post>,
  ) {
    super(model);
  }
}
