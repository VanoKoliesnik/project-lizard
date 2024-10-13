import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({ type: String, example: 'Registration successful' })
  message: string;
}
