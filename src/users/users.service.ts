import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users: any = [
        {
            id: 1,
            name: 'abc',
            email:'abc@gmail.com',
            role: 'ADMIN'
        },
        {
            id: 2,
            name: 'yguh',
            email:'abcd@gmail.com',
            role: 'USER'
        },
        {
            id: 3,
            name: 'fr',
            email:'abg@gmail.com',
            role: 'ADMIN'
        },
        {
            id: 4,
            name: 'greg',
            email:'abyjc@gmail.com',
            role: 'USER'
        }
    ]


    getUserList(): string {
        return this.users;
    }

    getUser(id: number) {
      const user =  this.users.find(user => user.id === id)
      console.log(user);
      
            return user
      
    }
}
