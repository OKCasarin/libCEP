import libCEPRepository from './src/repositories/libCEP/index.js';
import libCEPHandler from './src/handlers/libCEP/index.js';

const repository = libCEPRepository();

const handler = libCEPHandler({repositories: repository});

const libCEP = {...handler};


export default libCEP;
