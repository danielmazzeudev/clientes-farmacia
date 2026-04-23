import { Module } from '@nestjs/common';
import { MockDatabaseModule } from '../common/database/mock-database.module';
import { VendasController } from './vendas.controller';
import { VendasService } from './vendas.service';

@Module({
  imports: [MockDatabaseModule],
  controllers: [VendasController],
  providers: [VendasService],
})
export class VendasModule {}
