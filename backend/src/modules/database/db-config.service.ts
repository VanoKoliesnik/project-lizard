import { databaseConfigFactory } from '@/config/components/database.config';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfigFactory.KEY)
    private readonly databaseConfig: ConfigType<typeof databaseConfigFactory>,
  ) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.databaseConfig,
      autoLoadEntities: true,
      type: 'postgres',
      namingStrategy: new SnakeNamingStrategy(),
      applicationName: 'launchpad-service',
    };
  }
}
