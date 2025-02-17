import { Controller, Get } from '@nestjs/common';
import { MicroserviceAssetService } from './asset.service';

@Controller()
export class MicroserviceAssetController {
  constructor(
    private readonly microserviceAssetService: MicroserviceAssetService,
  ) {}

  @Get()
  getHello(): string {
    return this.microserviceAssetService.getHello();
  }
}
