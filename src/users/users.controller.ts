import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers(@Query('role') role?: 'ADMIN' | 'USER') {
        return this.userService.getUserList();
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(+id);
    }

    @Post()
    createUser(@Body() user: {}) {
        return user;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string) {
        return { id };
    }
}
