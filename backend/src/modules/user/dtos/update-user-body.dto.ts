import {
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_PATTERN,
} from '@/common/constants';
import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches } from 'class-validator';

export class UpdateUserBodyDto {
  @Length(USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH)
  @Matches(USERNAME_PATTERN)
  @ApiProperty({ type: String, example: 'Test' })
  username: string;
}
