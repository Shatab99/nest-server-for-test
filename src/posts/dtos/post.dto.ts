import { IsNumber, IsString } from "class-validator";

export class PostDtos{
    @IsNumber()
    userId : number
    @IsString()
    title : string
    @IsString()
    description : string
}