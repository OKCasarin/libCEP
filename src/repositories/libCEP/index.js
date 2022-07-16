import axios from 'axios';
import {
  ErrorZipCodeNotFound,
  ErrorHttpResponse,
} from './errors.js';

const VIACEP_URL = 'https://viacep.com.br/ws';

function libCEP() {
  async function getAddressByZipcode({ zipcode = '', format = 'json' }) {
    try {
      const { data } = await axios.get(`${VIACEP_URL}/${zipcode}/${format}`);

      if (data.erro === 'true') throw new ErrorZipCodeNotFound();

      return data;
    } catch (err) {
      throw new ErrorHttpResponse();
    }
  }

  return { getAddressByZipcode };
}

export default libCEP;
