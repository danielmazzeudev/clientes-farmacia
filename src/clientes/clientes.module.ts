import { Module } from '@nestjs/common';
import { MockDatabaseModule } from '../common/database/mock-database.module';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

@Module({
  imports: [MockDatabaseModule],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
