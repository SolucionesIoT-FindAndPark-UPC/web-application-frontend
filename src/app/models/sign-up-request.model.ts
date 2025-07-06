export class SignUpRequest {
  constructor(
    public name: string,
    public lastname: string,
    public username: string,
    public email: string,
    public password: string,
    public roles: string[] = ['USER'] // Valor por defecto
  ) {}
}