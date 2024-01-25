import { registerAs } from '@nestjs/config';
import { SERVER_CONFIG } from 'src/common/constants';
import { ServerConfigInterface } from 'src/common/interfaces';

export const serverConfig = registerAs(
  SERVER_CONFIG,
  (): ServerConfigInterface => ({
    api: 'http://localhost:3000',
    environment: process.env?.NODE_ENV ?? 'development',
    port:
      'string' === typeof process.env.PORT ? parseInt(process.env.PORT) : 3001,
    cors: {
      origin: process.env.CORS_ORIGIN
        ? process.env.CORS_ORIGIN
        : 'http://localhost:3000',
    },
  }),
);
