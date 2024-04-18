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

// https://www.linkedin.com/pulse/angular-interview-questions-3-years-experience