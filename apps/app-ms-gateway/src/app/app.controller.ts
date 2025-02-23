import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetProxy: ClientProxy
  ) {}

  @Get()
  getData() {
    return this.assetProxy.send({ cmd: 'get.asset' }, {});
  }
}
