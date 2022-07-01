import libCEP from './index.js';

const test = async () => {
    try {
        const address = await libCEP.getAddressByZipcode('00');
        console.log(address);
    }
    catch (err) {
        console.error(err);
    }
}

test();