import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard';
import { RequestWithUser } from '@/modules/auth/jwt.strategy';
import { UserService } from '@/modules/user/user.service';
import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user' })
  async getUser(@Req() request: RequestWithUser) {
    return this.userService.getUser(request.user.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update username' })
  async patchUser(@Req() request: RequestWithUser, @Body() { username }) {
    return this.userService.updateUsername(request.user.id, username);
  }
}
