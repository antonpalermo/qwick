import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { MicroserviceAuthModule } from './microservice-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceAuthModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 55915 },
  });

  await app.startAllMicroservices();
  await app.listen(55915);
}

bootstrap().catch((err) => {
  console.log('unable to bootstrap microservice-auth: ', err);
  process.exit(1);
});
