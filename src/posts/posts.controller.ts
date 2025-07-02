import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { PostsService } from './provider/posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postService: PostsService,
    ) {}

    @Get("/all-posts")
    getAllPosts(
        @Query("page",new DefaultValuePipe(1),ParseIntPipe ) page: number,
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit:number
    ){
        return this.postService.getAllPost(page, limit);
    }

    @Get("/:userId")
    getPostByUserId(
        @Param("userId", ParseIntPipe) userId :number
    ){
        return this.postService.findPostByUser(userId)
    }

}
