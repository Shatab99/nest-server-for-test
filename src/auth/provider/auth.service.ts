import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/users';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService : Users
    ){}

    login (email : string){
        const isUserExists = this.userService.findbyEmail(email)
        if(!isUserExists) return "Invalid user"
        return {
            token:"dniwadnaidwnda"
        }
    }
}
