import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    @UsePipes(new ValidationPipe())
    signup(@Body() authdto: AuthDto) {
        return { data: authdto.email };
    }

    @Post('signin')
    @UsePipes(new ValidationPipe())
    signin() {
        return this.authService.signin();
    }

}