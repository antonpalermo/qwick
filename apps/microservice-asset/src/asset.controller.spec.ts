import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceAssetController } from './asset.controller';
import { MicroserviceAssetService } from './asset.service';

describe('MicroserviceAssetController', () => {
  let microserviceAssetController: MicroserviceAssetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceAssetController],
      providers: [MicroserviceAssetService],
    }).compile();

    microserviceAssetController = app.get<MicroserviceAssetController>(
      MicroserviceAssetController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceAssetController.getHello()).toBe('Hello World!');
    });
  });
});
