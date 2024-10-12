import { ConfigModuleOptions } from '@nestjs/config';
import {
  databaseConfigFactory,
  databaseValidation,
} from './components/database.config';
import * as Joi from 'joi';

const configOptions: ConfigModuleOptions = {
  load: [databaseConfigFactory],
  validationSchema: Joi.object({
    ...databaseValidation,
  }),
  isGlobal: true,
};

export default configOptions;
