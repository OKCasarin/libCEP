export class ErrorZipCodeNotFound extends Error {
  constructor() {
    super('CEP não encontrado');
  }
}

export class ErrorHttpResponse extends Error {
  constructor() {
    super('Houve um erro na consulta à API');
  }
}
