import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceAuthController } from './microservice-auth.controller';
import { MicroserviceAuthService } from './microservice-auth.service';

describe('MicroserviceAuthController', () => {
  let microserviceAuthController: MicroserviceAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceAuthController],
      providers: [MicroserviceAuthService],
    }).compile();

    microserviceAuthController = app.get<MicroserviceAuthController>(
      MicroserviceAuthController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceAuthController.getHello()).toBe('Hello World!');
    });
  });
});
