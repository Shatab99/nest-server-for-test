import { Injectable } from '@nestjs/common';
import { console } from 'inspector';
import { Users } from 'src/users/users';
import { CreatePostDto } from '../dtos/post.dto';

const postdata = [
    {
        userId: 1,
        title: "Post 1",
        description: "This is post 1"
    },
    {
        userId: 2,
        title: "Post 2",
        description: "This is post 2"
    },
    {
        userId: 3,
        title: "Post 3",
        description: "This is post 3"
    },
    {
        userId: 4,
        title: "Post 4",
        description: "This is post 4"
    },
    {
        userId: 5,
        title: "Post 5",
        description: "This is post 5"
    }
]

@Injectable()
export class PostsService {

    constructor( 
        private readonly userService:Users
    ){}


    getAllPost(page: number, limit: number) {

        const skip = (page - 1) * limit
        const data = postdata.slice(skip, postdata.length)

        return {
            page, limit, data
        };
    }

    findPostByUser(userId : number){
        //validate the real user exists or not 

        const findUser = this.userService.getUserById(userId)

        if(!findUser) return "user not found !"


        const data = postdata.find(p=> p.userId === userId)
        return data 
    }

    createPost(data: CreatePostDto){
        return {
            msg:"data is created",
            data
        }
    }
}
