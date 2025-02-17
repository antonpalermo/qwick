import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AssetService } from './asset.service';
import { GatewayService } from './gateway.service';

import { AssetController } from './asset.controller';

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'AUTH_SERVICE',
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 55915,
          },
        },
        {
          name: 'ASSET_SERVICE',
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 40918,
          },
        },
      ],
    }),
  ],
  controllers: [AssetController],
  providers: [GatewayService, AssetService],
})
export class GatewayModule {}
