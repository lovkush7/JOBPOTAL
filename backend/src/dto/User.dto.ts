import { IsEmail, IsEnum, IsNotEmpty, IsString, Max } from "class-validator";
import  { UserRole } from "../Enum/Enum.ts";
import { Column } from "typeorm";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    Fullname: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    address: string;

   
    @IsEnum(UserRole)
    role!: UserRole;

    @IsString()
    experience: string;

     @IsString()
     skills: string;


}