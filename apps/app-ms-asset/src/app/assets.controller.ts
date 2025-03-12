import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller()
export class AssetsController {
  constructor(private readonly asset: AssetsService) {}

  @MessagePattern('asset.create')
  register(@Payload() createAssetDto: CreateAssetDto) {
    return this.asset.register(createAssetDto);
  }

  @MessagePattern('asset.get')
  getAssets() {
    return this.asset.getAssets();
  }

  @MessagePattern('asset.getOne')
  getAsset(@Payload() id: string) {
    return this.asset.getAsset(id);
  }

  @MessagePattern('asset.update')
  updateAsset(@Payload() updateAssetDto: UpdateAssetDto) {
    return this.asset.updateAsset(updateAssetDto.id, updateAssetDto);
  }

  @MessagePattern('asset.remove')
  removeAsset(@Payload() id: string) {
    return this.asset.removeAsset(id);
  }
}
