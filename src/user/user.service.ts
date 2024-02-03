import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as svgCaptcha from 'svg-captcha';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async queryUser(data): Promise<User[]> {
    return await this.usersRepository.query(`
    select id, username, role, roleId, permissions from user
    where username = '${data.username}' and password = '${data.password}'
    `);
  }

  createCode() {
    // 生成验证码
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    return Captcha;
  }

  create() {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    const userList = [
      { id: 1, name: '许建峰' },
      { id: 2, name: '宋宝宝' },
      { id: 3, name: '宋宝宝1' },
    ];
    return userList.find((t) => t.id === id) || '查无此人';
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
