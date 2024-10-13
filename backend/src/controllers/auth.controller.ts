import { AuthService } from '@/modules/auth/auth.service';
import { LoginUserBodyDto } from '@/modules/auth/dtos/login-user.body.dto';
import { RegisterUserBodyDto } from '@/modules/auth/dtos/register-user.body.dto';
import { VerifyUserBodyDto } from '@/modules/auth/dtos/verify-user.body.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterUserBodyDto) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginUserBodyDto) {
    return this.authService.login(body);
  }

  @Post('verify')
  async verify(@Body() body: VerifyUserBodyDto) {
    return this.authService.verify(body);
  }
}
