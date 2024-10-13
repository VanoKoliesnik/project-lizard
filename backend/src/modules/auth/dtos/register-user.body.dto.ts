import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserBodyDto {
  @ApiProperty({ type: String, example: 'Test' })
  username: string;

  @ApiProperty({ type: String, example: 'test@test.com' })
  email: string;

  @ApiProperty({
    type: String,
    example:
      '98c5c67ff08395ae7b8f86e3441fee5134146108163cb7862271100204302edd47ea06bbc41611fe391d700e97416dcd7e7b15969f7c2e118449540242f4b10fa7ee51e7530cc718274997e7b44e549a0551bc7dfa8ed35a20220634f70d2ddc2b22ca64ca883c3bc4203e045e82a341c07779f496e8d88a6c7861fff064836ed06354688dc4da449c1df3e1b218786be515c08d6e71ae3c81faf1a6c86c2738d66a336ad65cebb8125726462b3e5191c84dabeba050f5253c5e5a426bc6de4642218d20f5fd96de6b9c03a5dfb7a0d1af29a4d83c34b909a1b9835b64b928e0b12c17261b3041059e8e8345632c7902f1411344ee00324b31c03b5628cf719b',
  })
  verifier: string;

  @ApiProperty({
    type: String,
    example: '9e569cdc819b29ea7b0218f8553fe5aa1dc7be0a1ea2cec2aba2351b1356db52',
  })
  salt: string;
}
