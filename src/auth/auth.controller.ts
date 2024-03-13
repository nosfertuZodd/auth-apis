import { Body, Controller, Inject, Post } from '@nestjs/common';
import { authDataDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

import { User } from './interface/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}
  @Post('login')
  @Post('signup')
  signup(@Body() authData: authDataDto): Promise<User> {
    return this.authservice.create(authData);
  }
}
