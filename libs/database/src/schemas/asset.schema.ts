import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

export type AssetDocument = HydratedDocument<Asset>;
export const AssetSchema = SchemaFactory.createForClass(Asset);
