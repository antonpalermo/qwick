import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AssetService } from '@app/database/asset.service';

@Controller()
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @MessagePattern({ cmd: 'CREATE_ASSET' })
  createAsset() {
    return this.assetService.create();
  }
}
