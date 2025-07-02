import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Users } from './users';
import { GetUserParamsDto, GetUserQueriesDto, UserDto } from './dtos/user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService : Users){}

    @Get("/get-all-users")
    getAllUsers(
        @Query() getUserQueries : GetUserQueriesDto
     ) {
        const {limit, page}= getUserQueries
        return this.userService.findAll(limit, page);
    }

    @Post("/create-user")
    createUser(@Body() data: UserDto ) {
        return data
    }

    @Get("/:id")
    getUserById(
        @Param() GetUserParams:GetUserParamsDto
    ){
        return this.userService.getUserById(GetUserParams.id)
    }
}
