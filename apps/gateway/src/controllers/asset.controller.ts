import { ClientProxy } from '@nestjs/microservices';
import { Controller, Inject, Post } from '@nestjs/common';

@Controller('assets')
export class AssetController {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetProxy: ClientProxy,
  ) {}

  /**
   * create a new asset record
   * @returns newly created record returned by asset microservice
   */
  @Post('/create')
  createRecord() {
    return this.assetProxy.send({ cmd: 'CREATE_ASSET' }, {});
  }
}
