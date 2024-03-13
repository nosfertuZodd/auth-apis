import { Injectable } from '@nestjs/common';
import { authDataDto } from './dto/auth.dto';
import { User } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async find() {}
  async create(user: User) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
  async delete() {}
  async update() {}
}
