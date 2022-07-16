import Joi from 'joi';
import {
  ErrorResponseValidation,
} from './errors.js';

function parseCEP(input) {
  return {
    zipcode: input.cep,
    uf: input.uf,
    city: input.localidade,
    neighbourhood: input.bairro,
    street: input.logradouro,
    complement: input.complemento,
  };
}

function validateCEP(input) {
  const cepValidations = Joi.object({
    zipcode: Joi.string().required().pattern(/\d{5}-\d{3}/),
    uf: Joi.string().required().length(2),
    city: Joi.string().required(),
    neighbourhood: Joi.string().required(),
    street: Joi.string().required(),
    complement: Joi.any(),
  });

  const { error: validationError } = cepValidations.validate(input);
  if (validationError) throw new ErrorResponseValidation(validationError);
}

function libCEP({ repositories }) {
  let cepSchema = {
    zipcode: '',
    uf: '',
    city: '',
    neighbourhood: '',
    street: '',
    complement: '',
  };

  async function createCEP({ zipcode, format }) {
    const response = await repositories.getAddressByZipcode({ zipcode, format });
    cepSchema = parseCEP(response);
    validateCEP(cepSchema);
    return cepSchema;
  }

  return { createCEP };
}

export default libCEP;
