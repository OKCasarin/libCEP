export class ErrorInvalidRequest extends Error {
  constructor(details) {
    super('Requisição inválida');
    this.errors = details;
  }
}

export class ErrorDefault extends Error {
  constructor() {
    super('Houve um erro ao processar a requisição');
  }
}
