import { Module } from '@nestjs/common';
import { QwickBackendController } from './qwick-backend.controller';
import { QwickBackendService } from './qwick-backend.service';

@Module({
  imports: [],
  controllers: [QwickBackendController],
  providers: [QwickBackendService],
})
export class QwickBackendModule {}
