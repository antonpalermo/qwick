import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AssetService } from '@app/database/services/asset.service';

@Controller()
export class AssetController {
  /**
   * asset controller constructor
   * @param assetService service that contains all asset related logic
   */
  constructor(private readonly assetService: AssetService) {}

  /**
   * create a new asset record
   * @returns newly created asset record
   */
  @MessagePattern({ cmd: 'CREATE_ASSET' })
  create() {
    return this.assetService.create();
  }
}
