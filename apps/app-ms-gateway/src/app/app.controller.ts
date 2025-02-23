import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetProxy: ClientProxy
  ) {}

  @Post()
  registerAsset() {
    return this.assetProxy.send({ cmd: 'asset.create' }, {});
  }

  @Get()
  getData() {
    return this.assetProxy.send({ cmd: 'get.asset' }, {});
  }
}
