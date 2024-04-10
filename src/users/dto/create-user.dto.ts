import { IsString, IsInt, IsEmail, IsEnum, IsEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()

    name: string;


    @IsEmail()
    email: string;

    @IsEnum(['ADMIN', 'USER'], {
        message: 'Valid role is required.'
    })
    role: 'ADMIN' | 'USER';
}