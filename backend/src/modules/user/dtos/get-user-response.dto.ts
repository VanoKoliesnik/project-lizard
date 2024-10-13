import { ApiProperty } from '@nestjs/swagger';

export class GetUserResponseDto {
  @ApiProperty({ type: String, example: 'Test' })
  username: string;

  @ApiProperty({ type: String, example: 'test@test.com' })
  email: string;
}
