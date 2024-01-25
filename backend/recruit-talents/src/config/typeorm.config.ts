import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TYPEORM_MODULE_CONFIG } from 'src/common/constants';
import { UserSubscriber } from 'src/modules/user/user.subscriber';

export const typeormConfig = registerAs(
  TYPEORM_MODULE_CONFIG,
  (): TypeOrmModuleOptions => {
    const dbSSL =
      'string' === typeof process.env.DATABASE_SSL
        ? process.env.DATABASE_SSL === 'true'
        : process.env.DATABASE_SSL || false;

    return {
      type: 'postgres',
      url: process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : 'postgresql://postgres:23070099@localhost:5432/template1',
      migrationsRun: 'string' === typeof process.env.DATABASE_MIGRATIONS_RUN,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      subscribers: [UserSubscriber],
      synchronize: 'string' === typeof process.env.DATABASE_SYNCHRONIZE,
      migrations: [__dirname + '/../migrations/*.{js,ts}'],
      autoLoadEntities: true,
      logging: true,
      logger: 'file',
      ssl: dbSSL
        ? {
            rejectUnauthorized: false,
          }
        : false,
    };
  },
);
