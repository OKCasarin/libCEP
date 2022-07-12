import libCEPRepository from './src/repositories/libCEP';
import libCEPService from './src/services/libCEP';
import libCEPHandler from './src/handlers/libCEP';

const repository = libCEPRepository();
const service = libCEPService({ repositories: repository });
const handler = libCEPHandler({ services: service });

const libCEP = { ...handler };

export default libCEP;
