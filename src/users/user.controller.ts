import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { BackendValidationPipe } from '@app/shared/pipes/backendValidation.pipe';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { UsePipes } from '@nestjs/common';
import { LoginUserDto } from './dto/loginUser.dto';
import { Request } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { User } from './decorators/user.decorator';
import { UserEntity } from './user.entity';
import { AuthGuard } from './guards/auth.guard';
import { Put } from '@nestjs/common/decorators';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('users')
  @UsePipes(new BackendValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserReponse(user);
  }

  @Post('users/login')
  @UsePipes(new BackendValidationPipe())
  async login(
    @Body('user') loginDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserReponse(user);
  }

  @Get('users')
  @UseGuards(AuthGuard)
  async currentUser(
    //@Req() request: ExpressRequest,
    @User() user: UserEntity,
  ): Promise<UserEntity> {
    //console.log('current' + request.user);
    return user;
  }

  @Put('users')
  @UseGuards(AuthGuard)
  async updateCurrentUser(
    @User('id') currentUserId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userService.updateUser(
      currentUserId,
      updateUserDto,
    );
    return user;
  }
}
