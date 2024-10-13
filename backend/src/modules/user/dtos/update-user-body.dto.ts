import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserBodyDto {
  @ApiProperty({ type: String, example: 'Test' })
  username: string;
}
