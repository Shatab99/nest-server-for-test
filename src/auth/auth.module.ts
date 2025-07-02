import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './provider/auth.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[UsersModule]
})
export class AuthModule {}
