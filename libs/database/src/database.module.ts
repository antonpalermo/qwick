import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AssetModule } from './modules/asset.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:32768/qwick'),
    AssetModule,
  ],
  exports: [AssetModule],
})
export class DatabaseModule {}
