import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('assets')
export class AssetController {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetProxy: ClientProxy
  ) {}

  @Get()
  getAssets() {
    return this.assetProxy.send({ cmd: 'asset.get' }, {});
  }

  @Post('register')
  registerAsset() {
    return this.assetProxy.send({ cmd: 'asset.create' }, {});
  }
}
