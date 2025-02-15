import { Injectable } from '@nestjs/common';

@Injectable()
export class QwickBackendService {
  getHello(): string {
    return 'Hello World!';
  }
}
