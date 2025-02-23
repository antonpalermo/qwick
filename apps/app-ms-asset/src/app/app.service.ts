import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Asset } from '../schemas/asset.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Asset.name) private readonly asset: Model<Asset>) {}

  async registerAsset() {
    return this.asset.create({ name: 'sample record' });
  }

  getData(): { message: string } {
    return { message: 'Hello API from asset service' };
  }
}
