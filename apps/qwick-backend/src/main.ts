import { NestFactory } from '@nestjs/core';
import { QwickBackendModule } from './qwick-backend.module';

async function bootstrap() {
  const app = await NestFactory.create(QwickBackendModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
