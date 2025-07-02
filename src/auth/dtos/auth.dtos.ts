import { IsEmail } from "class-validator";

export class AuthDtos {
    @IsEmail()
    email:string
}