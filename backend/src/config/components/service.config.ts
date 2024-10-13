import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const serviceConfigFactory = registerAs('service', () => ({
  port: Number(process.env.SERVICE_HOST),
  host: process.env.SERVICE_PORT,
  name: process.env.SERVICE_NAME,

  corsOrigin: process.env.CORS_ORIGIN,
  corsMethods: process.env.CORS_METHODS,

  buildDocs: process.env.BUILD_DOCS === 'true',
}));

export const serviceValidation = {
  SERVICE_PORT: Joi.number().required(),
  SERVICE_HOST: Joi.string().required(),
  SERVICE_NAME: Joi.string().default('lizard'),

  CORS_ORIGIN: Joi.string().required(),
  CORS_METHODS: Joi.string().required(),

  BUILD_DOCS: Joi.bool().default(true),
};
