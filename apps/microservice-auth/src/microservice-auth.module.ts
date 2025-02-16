import { Module } from '@nestjs/common';
import { MicroserviceAuthController } from './microservice-auth.controller';
import { MicroserviceAuthService } from './microservice-auth.service';

@Module({
  imports: [],
  controllers: [MicroserviceAuthController],
  providers: [MicroserviceAuthService],
})
export class MicroserviceAuthModule {}
