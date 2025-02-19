import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';

import { DatabaseModule } from '@app/database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [AssetController],
  providers: [],
})
export class AssetModule {}
