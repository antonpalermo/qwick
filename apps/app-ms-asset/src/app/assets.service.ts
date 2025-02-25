import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Asset } from './schemas/asset.schema';

import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  constructor(@InjectModel(Asset.name) private readonly asset: Model<Asset>) {}

  async register(assetDto: CreateAssetDto) {
    return await this.asset.create({ ...assetDto });
  }

  async getAssets() {
    return await this.asset.find().exec();
  }

  async getAsset(id: string) {
    return await this.asset.findById(id).exec();
  }

  async updateAsset(id: string, updateAssetDto: UpdateAssetDto) {
    return await this.asset
      .findByIdAndUpdate({ _id: id }, updateAssetDto, {
        new: true,
      })
      .exec();
  }

  async removeAsset(id: string) {
    return await this.asset.findByIdAndDelete({ _id: id }).exec();
  }
}
