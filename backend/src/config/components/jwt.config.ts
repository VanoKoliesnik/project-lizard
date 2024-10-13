import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const jwtConfigFactory = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET_KEY,
  expiration: process.env.JWT_EXPIRATION_TIME,
}));

export const jwtValidation = {
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.string()
    .regex(/^\d+(s|m|h|d)$/)
    .required(),
};
