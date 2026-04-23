import { Module } from '@nestjs/common';
import { MockDatabaseService } from './mock-database.service';

@Module({
  providers: [MockDatabaseService],
  exports: [MockDatabaseService],
})
export class MockDatabaseModule {}
