import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from './schemas/asset.schema';
import { Model } from 'mongoose';

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name) private readonly assetModel: Model<Asset>,
  ) {}

  async create() {
    return this.assetModel.create({ name: 'sample' });
  }
}
