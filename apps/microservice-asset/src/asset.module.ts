import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';

import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule],
  controllers: [AssetController],
  providers: [],
})
export class AssetModule {}
