export class ErrorResponseValidation extends Error {
  constructor(details) {
    super('Resposta da API incorreta');
    this.errors = details;
  }
}
