import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { MicroserviceAssetModule } from './asset.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceAssetModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 40918 },
  });

  await app.startAllMicroservices();
  await app.listen(40918);
}

bootstrap().catch((err) => {
  console.log('unable to bootstrap microservice-asset: ', err);
  process.exit(1);
});
