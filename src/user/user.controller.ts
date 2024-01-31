import { Controller, Get, Post, Patch, Param, Delete, Res, Session } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@Controller('api/user')
@ApiTags('用户管理')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('code')
  @ApiOperation({
    summary: '获取验证码',
  })
  createCode(@Res() res, @Session() session) {
    const codeInfo = this.userService.createCode();
    session.code = codeInfo.text;
    res.type('image/svg+xml');
    res.send(codeInfo.data);
  }

  @Post()
  @ApiOperation({
    summary: '新增用户',
  })
  create() {
    return this.userService.create();
  }

  @Get()
  @ApiOperation({
    summary: '查询全部用户',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '根据id查询用户信息',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '根据id更新用户信息',
  })
  update(@Param('id') id: string) {
    return this.userService.update(+id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '根据id删除用户',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
