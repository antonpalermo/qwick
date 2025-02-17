import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceAssetService {
  getHello(): string {
    return 'Hello World!';
  }
}
