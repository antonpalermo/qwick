import { NestFactory } from '@nestjs/core';
import { MicroserviceAssetModule } from './asset.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceAssetModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap().catch((err) => {
  console.log('unable to bootstrap microservice-asset: ', err);
  process.exit(1);
});
