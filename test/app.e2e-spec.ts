import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Clientes Farmacia API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api/clientes (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/clientes?cidade=Sao')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(1);
        expect(body[0].nome).toBe('Mariana Costa');
      });
  });

  it('/api/produtos (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/produtos?controlado=true')
      .expect(200)
      .expect(({ body }) => {
        expect(
          body.every((item: { controlado: boolean }) => item.controlado),
        ).toBe(true);
      });
  });

  it('/api/vendas (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/vendas?clienteId=1')
      .expect(200)
      .expect(({ body }) => {
        expect(body).toHaveLength(2);
        expect(body[0].cliente.nome).toBe('Mariana Costa');
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
