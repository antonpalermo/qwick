import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  const prefix = 'api';
  app.setGlobalPrefix(prefix);

  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  console.log('unable to bootstrap gateway: ', err);
  process.exit(1);
});
