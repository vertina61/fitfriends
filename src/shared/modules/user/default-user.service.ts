import { UserService } from './user-service.interface.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { BaseUserEntity } from './base-user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';

@injectable()
export class DefaultUserService implements UserService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserModel) private readonly userModel: types.ModelType<BaseUserEntity>
  ) {}

  public async create(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>> {
    const user = new BaseUserEntity(dto);
    user.setPassword(dto.password, salt);

    const result = await this.userModel.create(user);
    this.logger.info(`New user created: ${user.email}`);

    return result;
  }

  public async findByEmail(email: string): Promise<DocumentType<BaseUserEntity> | null> {
    return this.userModel.findOne({email});
  }

  public async findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>> {
    const existedUser = await this.findByEmail(dto.email);

    if (existedUser) {
      return existedUser;
    }

    return this.create(dto, salt);
  }
}
