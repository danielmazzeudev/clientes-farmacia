import { Module } from '@nestjs/common';
import { MockDatabaseModule } from '../common/database/mock-database.module';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [MockDatabaseModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
