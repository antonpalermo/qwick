import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly microserviceAuthService: AuthService,
  ) {}

  @MessagePattern({ cmd: 'get_hello' })
  getHello(): string {
    return this.microserviceAuthService.getHello();
  }
}
