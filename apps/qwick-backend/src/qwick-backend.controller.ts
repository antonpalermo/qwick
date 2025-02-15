import { Controller, Get } from '@nestjs/common';
import { QwickBackendService } from './qwick-backend.service';

@Controller()
export class QwickBackendController {
  constructor(private readonly qwickBackendService: QwickBackendService) {}

  @Get()
  getHello(): string {
    return this.qwickBackendService.getHello();
  }
}
