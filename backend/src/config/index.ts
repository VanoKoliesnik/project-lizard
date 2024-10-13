import { ConfigModuleOptions } from '@nestjs/config';
import {
  databaseConfigFactory,
  databaseValidation,
} from './components/database.config';
import * as Joi from 'joi';
import { jwtConfigFactory, jwtValidation } from './components/jwt.config';
import {
  serviceConfigFactory,
  serviceValidation,
} from './components/service.config';

const configOptions: ConfigModuleOptions = {
  load: [databaseConfigFactory, jwtConfigFactory, serviceConfigFactory],
  validationSchema: Joi.object({
    ...databaseValidation,
    ...jwtValidation,
    ...serviceValidation,
  }),
  isGlobal: true,
};

export default configOptions;
