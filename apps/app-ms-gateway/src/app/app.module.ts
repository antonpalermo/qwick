import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
