import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from '../schemas/asset.schema';
import { Model } from 'mongoose';
import { CreateAssetDto } from '../dto/create-asset.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name) private readonly assetModel: Model<Asset>,
  ) {}

  async create(dto: CreateAssetDto) {
    return await this.assetModel.create(dto);
  }
}
