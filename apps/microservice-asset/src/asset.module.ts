import { Module } from '@nestjs/common';
import { MicroserviceAssetController } from './asset.controller';
import { MicroserviceAssetService } from './asset.service';

@Module({
  imports: [],
  controllers: [MicroserviceAssetController],
  providers: [MicroserviceAssetService],
})
export class MicroserviceAssetModule {}
