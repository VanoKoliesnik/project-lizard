import { AuthService } from '@/modules/auth/auth.service';
import { LoginResponseDto } from '@/modules/auth/dtos/login-response.dto';
import { LoginUserBodyDto } from '@/modules/auth/dtos/login-user.body.dto';
import { RegisterResponseDto } from '@/modules/auth/dtos/register-response.dto';
import { RegisterUserBodyDto } from '@/modules/auth/dtos/register-user.body.dto';
import { VerifyResponseDto } from '@/modules/auth/dtos/verify-response.dto';
import { VerifyUserBodyDto } from '@/modules/auth/dtos/verify-user.body.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: HttpStatus.OK, type: RegisterResponseDto })
  async register(@Body() body: RegisterUserBodyDto) {
    return this.authService.register(body);
  }

  @Post('login')
  @ApiResponse({ status: HttpStatus.OK, type: LoginResponseDto })
  async login(@Body() body: LoginUserBodyDto) {
    return this.authService.login(body);
  }

  @Post('verify')
  @ApiResponse({ status: HttpStatus.OK, type: VerifyResponseDto })
  async verify(@Body() body: VerifyUserBodyDto) {
    return this.authService.verify(body);
  }
}
