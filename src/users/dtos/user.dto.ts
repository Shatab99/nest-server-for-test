import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
}


export class GetUserParamsDto {
    @ApiProperty({
        description: "User Id",
        example: 1233
    })
    @IsNumber()
    @Type(() => Number)
    id: number
}


export class GetUserQueriesDto {
    @ApiPropertyOptional({
        description: "This is limit",
        example: 10
    })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    limit?: number

    @ApiPropertyOptional({
        description: "This is page number",
        example: 1
    })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    page?: number
}