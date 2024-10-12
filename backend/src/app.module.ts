import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configOptions from './config';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [ConfigModule.forRoot(configOptions), DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
