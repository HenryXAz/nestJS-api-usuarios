import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDTO): Promise<User> {
    return this.userService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  udpateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDTO,
  ) {
    return this.userService.updateUser(id, user);
  }
}
