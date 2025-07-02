import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';

const users = [
    {
        id: 1,
        name: "shatab",
        email: "shatab@gmail.com"
    },
    {
        id: 2,
        name: "shatab2",
        email: "shatab@ga.com"
    }
]

@Injectable()
export class Users {
    public findAll(limit?: number, page?: number) {
        return users
    }

    public getUserById(id: number) {
        const user = users.find(u => u.id === id)
        return user
    }
    public findbyEmail(email: string) {
        const user = users.find(u => u.email === email)
        return user
    }
}
