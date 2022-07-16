import libCEPRepository from './src/repositories/libCEP/index.js';
import libCEPService from './src/services/libCEP/index.js';
import libCEPHandler from './src/handlers/libCEP/index.js';

const repository = libCEPRepository();
const service = libCEPService({ repositories: repository });
const handler = libCEPHandler({ services: service });

const libCEP = { ...handler };

export default libCEP;
