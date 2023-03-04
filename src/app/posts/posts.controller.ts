import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CommonController } from '../common.controller';
@Controller('posts')
export class PostsController extends CommonController {
  constructor(public readonly service: PostsService) {
    super(service);
  }
}
