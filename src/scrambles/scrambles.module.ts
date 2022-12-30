import { Module } from '@nestjs/common';
import { ScramblesController } from './scrambles.controller';
import { ScramblesService } from './scrambles.service';

@Module({
  controllers: [ScramblesController],
  providers: [ScramblesService]
})
export class ScramblesModule {}
