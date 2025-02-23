import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'asset.create' })
  async registerAsset() {
    return await this.appService.registerAsset();
  }

  @MessagePattern({ cmd: 'get.asset' })
  getData() {
    return this.appService.getData();
  }
}
