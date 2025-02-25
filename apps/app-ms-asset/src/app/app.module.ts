import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Asset, AssetSchema } from './schemas/asset.schema';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Asset.name, schema: AssetSchema }]),
  ],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AppModule {}
