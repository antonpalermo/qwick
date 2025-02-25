import { ClientProxy } from '@nestjs/microservices';
import {
  Put,
  Get,
  Body,
  Post,
  Param,
  Inject,
  Controller,
  Delete,
} from '@nestjs/common';

import { CreateAssetDto } from '../dto/create-asset.dto';
import { UpdateAssetDto } from '../dto/update-asset.dto';

@Controller('assets')
export class AssetController {
  constructor(@Inject('ASSET_SERVICE') private readonly proxy: ClientProxy) {}

  @Post('register')
  register(@Body() asset: CreateAssetDto) {
    return this.proxy.send('asset.create', asset);
  }

  @Get()
  getAssets() {
    return this.proxy.send('asset.get', {});
  }

  @Get(':id')
  getAsset(@Param('id') id: string) {
    return this.proxy.send('asset.getOne', id);
  }

  @Put(':id/update')
  updateAsset(@Param('id') id: string, @Body() asset: UpdateAssetDto) {
    return this.proxy.send('asset.update', asset);
  }

  @Delete(':id/remove')
  removeAsset(@Param('id') id: string) {
    return this.proxy.send('asset.remove', id);
  }
}
