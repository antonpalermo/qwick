import { Test, TestingModule } from '@nestjs/testing';
import { QwickBackendController } from './qwick-backend.controller';
import { QwickBackendService } from './qwick-backend.service';

describe('QwickBackendController', () => {
  let qwickBackendController: QwickBackendController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QwickBackendController],
      providers: [QwickBackendService],
    }).compile();

    qwickBackendController = app.get<QwickBackendController>(QwickBackendController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(qwickBackendController.getHello()).toBe('Hello World!');
    });
  });
});
