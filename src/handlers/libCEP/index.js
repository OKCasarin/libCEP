import Joi from 'joi';

import {
  ErrorInvalidRequest,
  ErrorDefault,
} from './errors.js';

import {
  ErrorZipCodeNotFound,
  ErrorHttpResponse,
} from '../../repositories/libCEP/errors.js';

import {
  ErrorResponseValidation,
} from '../../services/libCEP/errors.js';

function libCEP({ services }) {
  const schema = Joi.object({
    zipcode: Joi.string().length(8),
    format: Joi.string(),
  });

  async function getAddressByZipcode({ zipcode = '', format = 'json' }) {
    try {
      const { error: validationError } = schema.validate({ zipcode, format });
      if (validationError) throw new ErrorInvalidRequest(validationError.details);

      const address = await services.createCEP({ zipcode, format });

      return address;
    } catch (err) {
      if (err instanceof ErrorInvalidRequest) throw err;

      if (err instanceof ErrorZipCodeNotFound) throw err;

      if (err instanceof ErrorHttpResponse) throw err;

      if (err instanceof ErrorResponseValidation) throw err;

      throw new ErrorDefault();
    }
  }

  return { getAddressByZipcode };
}

export default libCEP;
