import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
