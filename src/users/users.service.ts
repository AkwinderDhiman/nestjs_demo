import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    users: any = [
        {
            id: 1,
            name: 'abc',
            email: 'abc@gmail.com',
            role: 'ADMIN'
        },
        {
            id: 2,
            name: 'yguh',
            email: 'abcd@gmail.com',
            role: 'USER'
        },
        {
            id: 3,
            name: 'fr',
            email: 'abg@gmail.com',
            role: 'ADMIN'
        },
        {
            id: 4,
            name: 'greg',
            email: 'abyjc@gmail.com',
            role: 'USER'
        }
    ]

    getUserList(role: any): string {
        if (role) {
            const allUsers = this.users.filter(user => user.role === role);
            if (allUsers.length === 0) throw new NotFoundException('User role not found.')
            return allUsers
        }
        return this.users;
    }

    getUser(id: number) {
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException('User not found.')
        return user
    }

    createUser(user: CreateUserDto) {
        return user
    }

    getUserUpdate(id: number, updateUser: UpdateUserDto) {
        this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUser }
            }
            return user;
        })
    }

    deleteUser(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }
}
