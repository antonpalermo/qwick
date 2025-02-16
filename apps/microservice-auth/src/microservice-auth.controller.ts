import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { MicroserviceAuthService } from './microservice-auth.service';

@Controller()
export class MicroserviceAuthController {
  constructor(
    private readonly microserviceAuthService: MicroserviceAuthService,
  ) {}

  @MessagePattern({ cmd: 'get_hello' })
  getHello(): string {
    return this.microserviceAuthService.getHello();
  }
}
