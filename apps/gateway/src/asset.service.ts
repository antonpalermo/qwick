import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AssetService {
  constructor(
    @Inject('ASSET_SERVICE') private readonly assetService: ClientProxy,
  ) {}

  getAssets() {
    return this.assetService.send({ cmd: 'GET_ASSETS' }, {});
  }
}
