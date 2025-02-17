import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AssetService } from './asset.service';

@Controller()
export class AssetController {
  constructor(private readonly microserviceAssetService: AssetService) {}

  @MessagePattern({ cmd: 'GET_ASSETS' })
  getHello(): string[] {
    return this.microserviceAssetService.getHello();
  }
}
