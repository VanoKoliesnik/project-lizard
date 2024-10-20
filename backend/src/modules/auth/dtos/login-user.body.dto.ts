import { ApiProperty } from '@nestjs/swagger';

export class LoginUserBodyDto {
  @ApiProperty({ type: String, example: 'test@test.com' })
  email: string;
}
