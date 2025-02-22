import { ClientProxy } from '@nestjs/microservices';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateAssetDto } from '@app/database/dto/create-asset.dto';

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
  createRecord(@Body() asset: CreateAssetDto) {
    return this.assetProxy.send({ cmd: 'CREATE_ASSET' }, { asset });
  }
}
