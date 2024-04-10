import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query , ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get() //all users list
    getUserList(@Query('role') role?: 'ADMIN' | 'USER') {
        return this.userService.getUserList(role);
    }

    @Get(':id') // single user
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUser(id);
    }

    @Post() // create user
    createUser(@Body(ValidationPipe) user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Patch(':id') //update user
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe)
    userUpdate: UpdateUserDto) {
        return this.userService.getUserUpdate(id, userUpdate);
    }

    @Delete(':id') // delete user
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
