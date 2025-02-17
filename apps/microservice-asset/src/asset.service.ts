import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetService {
  getHello(): string[] {
    return ['bromba', 'mouse', 'keyboard', 'ram'];
  }
}
