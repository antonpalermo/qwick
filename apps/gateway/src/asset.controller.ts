import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('assets')
export class AssetController {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetProxy: ClientProxy,
  ) {}

  @Get('/create')
  createAsset() {
    return this.assetProxy.send({ cmd: 'CREATE_ASSET' }, {});
  }
}
