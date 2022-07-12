import axios from 'axios';
import {
  ErrorZipCodeNotFound,
} from './errors';

const VIACEP_URL = 'https://viacep.com.br/ws';

function libCEP() {
  async function getAddressByZipcode({ zipcode = '', format = 'json' }) {
    const { data } = await axios.get(`${VIACEP_URL}/${zipcode}/${format}`);

    if (data.erro === 'true') throw new ErrorZipCodeNotFound();

    return data;
  }

  return { getAddressByZipcode };
}

export default libCEP;
