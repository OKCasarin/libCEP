export class ErrorZipCodeNotFound extends Error {
    constructor() {
        super('Zipcode not found');
    }
}