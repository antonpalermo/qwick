import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AssetDocument = HydratedDocument<Asset>;

@Schema({
  timestamps: {
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  },
})
export class Asset {
  @Prop()
  name: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
