import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private userservice: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto){
        console.log(body);
        this.userservice.create(body.email, body.password)
    }
}
