import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import { AuthDtos } from './dtos/auth.dtos';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Post("/login")
    loginInbyMail(
        @Body() data: AuthDtos
    ) {
        const { email } = data
        return this.authService.login(email)
    }

}
