import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagsService: TagService) {}

  @Get()
  async findAll(): Promise<TagEntity[]> {
    return await this.tagsService.findAll();
  }
}
