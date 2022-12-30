import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScramblesModule } from './scrambles/scrambles.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), ScramblesModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
