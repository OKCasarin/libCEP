
function libCEP ( {repositories} ) {

    let cepSchema = {
        uf: '',
        city: '',
        neighbourhood: '',
        street: '',
        complement: ''
    };

    const required = /([A-Z])\w+/;

    const cepValidations = [
        {field: 'uf', validation: /\d{5}-\d{3}/},
        {field: 'city', validation: required},
        {field: 'neighbourhood', validation: required},
        {field: 'street', validation: required}
    ];

    async function createCEP ({zipcode, format}) {     
        const response = await repositories.getAddressByZipcode({ zipcode, format});
        parseCEP(response);
        validateCEP();
        return cepSchema;
    }

    function parseCEP (zipcode) {
        cepSchema = {
            uf: zipcode.cep,
            city: zipcode.localidade,
            neighbourhood: zipcode.bairro,
            street: zipcode.logradouro,
            complement: zipcode.complemento
        }
    }

    function validateCEP () {
        cepValidations.forEach(validation => {
            const Regex = new RegExp(validation.validation);
            if (!Regex.test(cepSchema[validation.field])) throw new Error(`Campo ${validation.field} inválido`);
        })
    }

    return { createCEP }
}

export default libCEP;