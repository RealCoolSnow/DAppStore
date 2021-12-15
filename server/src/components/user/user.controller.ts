import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UserValidationPipe } from './pipe/user-validation.pipe'
import { User } from './entity/user.entity'
import { I18n, I18nContext, I18nLang, I18nService } from 'nestjs-i18n'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(UserValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.userService.findOne(id)
  // }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id)
  }

  @Get('i18n')
  i18n(@I18n() i18n: I18nContext) {
    return i18n.translate('common.success')
  }
}
