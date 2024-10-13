export class RegisterUserBodyDto {
  username: string;
  email: string;
  verifier: string;
  salt: string;
}
