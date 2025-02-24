import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AssetController } from './controllers/asset.controller';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'ASSET_SERVICE',
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 5433,
          },
        },
      ],
    }),
  ],
  controllers: [AssetController],
  providers: [],
})
export class AppModule {}
