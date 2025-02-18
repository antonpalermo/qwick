import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AssetService } from './asset.service';
import { Asset, AssetSchema } from './schemas/asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Asset.name, schema: AssetSchema }]),
  ],
  providers: [AssetService],
  exports: [AssetService],
})
export class AssetModule {}
