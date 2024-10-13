import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';
import { jwtConfigFactory } from '@/config/components/jwt.config';
import { ConfigType } from '@nestjs/config';

type JwtPayload = { email: string };

export type RequestWithUser = Request & {
  user?: { id: number };
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(jwtConfigFactory.KEY)
    private readonly jwtConfig: ConfigType<typeof jwtConfigFactory>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: JwtPayload): Promise<RequestWithUser['user']> {
    const user = await this.usersRepository.findOne({
      where: { email: payload.email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return { id: user.id };
  }
}
