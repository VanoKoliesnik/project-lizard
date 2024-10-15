import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard';
import { RequestWithUser } from '@/modules/auth/jwt.strategy';
import { GetUserResponseDto } from '@/modules/user/dtos/get-user-response.dto';
import { UpdateUserBodyDto } from '@/modules/user/dtos/update-user-body.dto';
import { UpdateUserResponseDto } from '@/modules/user/dtos/update-user-response.dto';
import { UserService } from '@/modules/user/user.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: HttpStatus.OK, type: GetUserResponseDto })
  async getUser(@Req() request: RequestWithUser): Promise<GetUserResponseDto> {
    return this.userService.getUser(request.user.id);
  }

  @Patch('username')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: HttpStatus.OK, type: UpdateUserResponseDto })
  async patchUser(
    @Req() request: RequestWithUser,
    @Body() { username }: UpdateUserBodyDto,
  ): Promise<UpdateUserResponseDto> {
    return this.userService.updateUsername(request.user.id, username);
  }
}
