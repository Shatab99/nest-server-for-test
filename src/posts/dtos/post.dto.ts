import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUrl } from "class-validator";

export class PostDtos {
    @IsNumber()
    userId: number
    @IsString()
    title: string
    @IsString()
    description: string
}

export class MetaOptionsDto {
    @IsString()
    key: string
    @IsNotEmpty()
    value: any
}

export class CreatePostDto {
    @ApiProperty({
        description: "This must be string",
        example: "How to create nest js server"
    })
    @IsString()
    title: string
    @ApiProperty({
        description: "This must be enum [post or page or story or series]",
        example: "post"
    })
    @IsEnum({
        post: "post",
        page: "page",
        story: "story",
        series: "series"
    })
    postType: string
    @ApiProperty({
        description: "must be string",
        example: "advanced-guide-to-nestjs-dtos"
    })
    @IsString()
    slug: string
    @ApiPropertyOptional({
        description: "This must be strings",
        example: 'In this post, we explore advanced techniques for using DTOs with class-validator and class-transformer.'
    })
    @IsString()
    @IsOptional()
    content?: string
    @ApiPropertyOptional({
        description: "must be json at string format",
        example: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Advanced Guide to NestJS DTOs\"}"
    })
    @IsJSON()
    @IsOptional()
    schema?: string
    @ApiPropertyOptional({
        description: "must be url format",
        example: "example.com"
    })
    @IsUrl()
    @IsOptional()
    featuredUrl?: string
    @ApiProperty({
        description: "This must be date format",
        example: "2025-07-02T12:00:00.000Z"
    })
    @IsDate()
    @Type(() => Date)
    publishedOn: Date
    @ApiProperty({
        description: "must be array of string",
        example: ["nestjs", "dto", "class-validator", "typescript", "backend"]
    })
    @IsArray()
    @IsString({ each: true })
    tags: string[]
    @ApiPropertyOptional({
        description: "Must be the key value objecet",
        example: [
            { "author": "Shatab" },
            { "readTime": "8 min" },
            { "views": 1240 },
            { "category": "Backend" },
            { "seriesPart": 3 }
        ]
    })
    @IsArray()
    @IsObject({ each: true })
    @IsOptional()
    metaOptions: MetaOptionsDto[]
}