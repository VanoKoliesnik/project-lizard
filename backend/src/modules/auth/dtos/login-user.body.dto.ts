import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginUserBodyDto {
  @IsEmail()
  @ApiProperty({ type: String, example: 'test@test.com' })
  email: string;
}
